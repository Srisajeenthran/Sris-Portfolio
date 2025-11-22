import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// =======================
// CORS CONFIG
// =======================
const allowedOrigins = [
  "http://localhost:5173",               
  "https://sris-portfolio-six.vercel.app/"     
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server / curl / Postman (no origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

app.use(express.json());

// =======================
// OpenAI SETUP
// =======================
const apiKey = process.env.OPENAI_API_KEY;
const hasOpenAI = Boolean(apiKey);

if (!hasOpenAI) {
  console.warn("[Chatbot] OPENAI_API_KEY missing → Using fallback responses only.");
}

const openai = hasOpenAI ? new OpenAI({ apiKey }) : null;

const systemPrompt = `
You are an AI assistant embedded in the portfolio of Srisajeenthran Sritharan.
You know his skills (React/Next, Node/Spring Boot, LLMs, Python OpenCV, Git/Docker/Kubernetes),
projects (LLM-based interview automation, TryFit virtual dressing room, Fit-Connect fitness social platform, MERN food delivery),
and internships (Uvexzon Software Engineering Intern May-Oct 2025, DGateway In Software Engineering Intern Mar-Jul 2024).
Provide concise, friendly answers. If unsure, say so and point the user to the contact section or email srisajeenthran00@gmail.com.
`;

// =======================
// EMAIL / CONTACT SETUP
// =======================
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
  from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER
};

const emailReady = Boolean(
  emailConfig.host &&
    emailConfig.port &&
    emailConfig.user &&
    emailConfig.pass &&
    emailConfig.to
);

if (!emailReady) {
  console.warn(
    "[Contact] SMTP not fully configured → Messages will be logged instead of sent."
  );
}

const mailTransporter = emailReady
  ? nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.port === 465,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
      }
    })
  : null;

const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!mailTransporter) throw new Error("email_not_configured");

  await mailTransporter.sendMail({
    from: emailConfig.from,
    to: emailConfig.to,
    replyTo: email,
    subject: `[Portfolio] ${subject}`.slice(0, 180),
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p style="white-space: pre-wrap;">${message}</p>
    `
  });
};

// =======================
// FALLBACK CHATBOT
// =======================
const generateFallbackReply = (msg = "") => {
  const text = msg.toLowerCase();

  if (text.includes("skill")) {
    return "I focus on React/Next.js, Node & Spring Boot, and LLM tooling such as GPT/BERT, NLP, and OpenCV.";
  }
  if (text.includes("project") || text.includes("build") || text.includes("work")) {
    return "Some key projects include: LLM interview automation, TryFit virtual dressing room, Fit-Connect platform, and a MERN food delivery system.";
  }
  if (text.includes("contact") || text.includes("email")) {
    return "You can reach Srisajeenthran at: srisajeenthran00@gmail.com.";
  }

  return "I’m the portfolio assistant! Ask about skills, projects, or contact details.";
};

// =======================
// ROUTES
// =======================
app.get("/", (req, res) => {
  res.send("Chatbot API is running.");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required." });

  // If no OpenAI key → always fallback
  if (!openai) {
    return res.json({ reply: generateFallbackReply(message) });
  }

  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: systemPrompt.trim(),
      input: [
        {
          role: "user",
          content: [{ type: "input_text", text: message }]
        }
      ]
    });

    let reply = "";

    // Extract reply safely
    const output = response?.output?.[0]?.content?.find(
      (c) => c.type === "output_text"
    );

    if (output?.text) reply = output.text.trim();
    if (!reply && typeof response.output_text === "string") {
      reply = response.output_text.trim();
    }

    if (!reply) reply = generateFallbackReply(message);

    res.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);

    const isQuotaError =
      error?.status === 429 || error?.error?.code === "insufficient_quota";

    if (isQuotaError) {
      return res.json({ reply: generateFallbackReply(message) });
    }

    return res.status(500).json({ reply: generateFallbackReply(message) });
  }
});

// =======================
// CONTACT ROUTE
// =======================
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email." });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    res.json({ status: "ok", message: "Your message has been sent." });
  } catch (err) {
    console.warn("[Contact] Email fallback:", err.message);
    res.status(503).json({
      error: "Email service unavailable. Please use: srisajeenthran00@gmail.com"
    });
  }
});

// =======================
// SERVER START
// =======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Chatbot server running on port ${PORT}`);
});
