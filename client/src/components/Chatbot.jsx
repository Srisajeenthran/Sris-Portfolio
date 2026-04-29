import { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  X,
  Bot,
  User,
  Loader2,
} from "lucide-react";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://sris-portfolio-api.onrender.com";

const fallbackTopics = {
  skills:
    "I focus on React/Next.js frontends, Node & Spring Boot backends, and AI tooling with GPT/BERT, NLP, and Python OpenCV.",
  projects:
    "Highlights include the LLM-powered interview automation suite, TryFit virtual dressing room, Fit-Connect social platform, and a MERN food delivery system.",
  contact:
    "You can reach me at srisajeenthran00@gmail.com or connect via GitHub and LinkedIn linked in the Contact section.",
};

// Memoized message component for better performance
const MessageBubble = memo(({ msg }) => (
  <motion.div
    key={msg.id}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.15 }}
    className={`flex items-start gap-3 ${
      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${
        msg.sender === "user"
          ? "bg-primary"
          : "bg-muted"
      }`}
    >
      {msg.sender === "user" ? (
        <User className="h-4 w-4 text-white" />
      ) : (
        <Bot className="h-4 w-4 text-primary" />
      )}
    </div>
    <div
      className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 backdrop-blur-md transition-all ${
        msg.sender === "user"
          ? "bg-primary text-white shadow-lg shadow-primary/20"
          : "bg-white/5 border border-white/10 text-foreground group-hover:bg-white/10"
      }`}
    >
      <p className="text-sm font-medium leading-relaxed tracking-tight">{msg.text}</p>
    </div>
  </motion.div>
));

MessageBubble.displayName = "MessageBubble";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      sender: "bot",
      text: "Hello. I am Sris-AI, your intelligent guide for Srisajeenthran's portfolio. How can I assist you today?",
    },
  ]);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const getFallbackReply = useCallback((text) => {
    const lowered = text.toLowerCase();
    if (lowered.includes("skill")) return fallbackTopics.skills;
    if (lowered.includes("project")) return fallbackTopics.projects;
    if (lowered.includes("contact")) return fallbackTopics.contact;
    return "I'm currently refined for specific queries. Try asking about skills or projects.";
  }, []);

  const handleSend = useCallback(
    async (e) => {
      e.preventDefault();
      if (!input.trim() || isSending) return;

      const text = input.trim();
      const userMsg = { id: crypto.randomUUID(), sender: "user", text };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsSending(true);

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      try {
        const res = await fetch(`${API_BASE_URL}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
          signal: abortControllerRef.current.signal,
        });

        if (!res.ok) throw new Error("Network error");

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), sender: "bot", text: data.reply },
        ]);
      } catch (error) {
        if (error.name === "AbortError") return;
        const fallbackText = getFallbackReply(text);
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), sender: "bot", text: fallbackText },
        ]);
      } finally {
        setIsSending(false);
        abortControllerRef.current = null;
      }
    },
    [input, isSending, getFallbackReply]
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="mb-6 w-[calc(100vw-2.5rem)] max-w-[420px] overflow-hidden rounded-[2.5rem] border-2 border-white/10 bg-card/60 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:w-[400px]"
          >
            <div className="mb-6 flex items-center justify-between border-b border-border/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-foreground">Sris-AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Digital Consciousness Active</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-muted/50 p-2 text-muted-foreground hover:bg-muted transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-6 flex h-80 flex-col gap-4 overflow-y-auto pr-2 scrollbar-hide">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              {isSending && (
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="relative flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Sris..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
              >
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-black text-white shadow-2xl transition-all ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <MessageCircle size={20} />
        <span className="uppercase tracking-[0.2em]">Sris-AI</span>
        
      </motion.button>
    </div>
  );
};

export default Chatbot;
