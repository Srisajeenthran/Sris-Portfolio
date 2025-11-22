import { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  X,
  Bot,
  User,
  Sparkles,
  Loader2
} from "lucide-react";

const fallbackTopics = {
  skills:
    "I focus on React/Next.js frontends, Node & Spring Boot backends, and AI tooling with GPT/BERT, NLP, and Python OpenCV.",
  projects:
    "Highlights include the LLM-powered interview automation suite, TryFit virtual dressing room, Fit-Connect social platform, and a MERN food delivery system.",
  contact:
    "You can reach me at srisajeenthran00@gmail.com or connect via GitHub and LinkedIn linked in the Contact section."
};

// Memoized message component for better performance
const MessageBubble = memo(({ msg }) => (
  <motion.div
    key={msg.id}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.15 }}
    className={`flex items-start gap-2 ${
      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div
      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
        msg.sender === "user"
          ? "bg-gradient-to-br from-blue-600 to-cyan-500"
          : "bg-gradient-to-br from-slate-700 to-slate-800"
      }`}
    >
      {msg.sender === "user" ? (
        <User className="h-3 w-3 text-white" />
      ) : (
        <Bot className="h-3 w-3 text-white" />
      )}
    </div>
    <div
      className={`max-w-[80%] rounded-2xl px-3 py-2 ${
        msg.sender === "user"
          ? "bg-gradient-to-br from-blue-600/30 to-cyan-500/30 text-blue-50"
          : "bg-white/10 text-slate-200"
      }`}
    >
      <p className="text-sm leading-relaxed">{msg.text}</p>
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
      text: "Hi! I'm the AI assistant for Srisajeenthran. Ask about skills, projects, or how to get in touch."
    }
  ]);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    // Use instant scroll for better performance
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const getFallbackReply = useCallback((text) => {
    const lowered = text.toLowerCase();
    if (lowered.includes("skill")) return fallbackTopics.skills;
    if (lowered.includes("project")) return fallbackTopics.projects;
    if (lowered.includes("contact")) return fallbackTopics.contact;
    return "I'm offline, but feel free to email srisajeenthran00@gmail.com.";
  }, []);

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const text = input.trim();
    const userMsg = { id: crypto.randomUUID(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsSending(true);

    // Abort any previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
        signal: abortControllerRef.current.signal
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), sender: "bot", text: data.reply }
      ]);
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("Chatbot assistant failed:", error);
      const fallbackText = getFallbackReply(text);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: fallbackText
        }
      ]);
    } finally {
      setIsSending(false);
      abortControllerRef.current = null;
    }
  }, [input, isSending, getFallbackReply]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group relative mb-3 w-80 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/70 p-4 shadow-2xl backdrop-blur"
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 p-1.5 shadow-lg">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-slate-400">Always here to help</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="mb-3 max-h-64 space-y-2 overflow-y-auto pr-2 text-sm scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <MessageBubble key={msg.id} msg={msg} idx={idx} />
              ))}
              {isSending && (
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-2">
                    <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                    <span className="text-xs text-slate-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                disabled={isSending}
                className="flex-1 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-all duration-150 focus:border-cyan-500/50 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={isSending || !input.trim()}
                whileHover={{ scale: isSending || !input.trim() ? 1 : 1.1 }}
                whileTap={{ scale: isSending || !input.trim() ? 1 : 0.9 }}
                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-2.5 text-white shadow-lg shadow-blue-500/50 transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-60 hover:shadow-xl hover:shadow-cyan-500/60"
              >
                {isSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-150 hover:shadow-xl hover:shadow-cyan-500/60 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex items-center gap-2">
          <MessageCircle size={18} className="transition-transform duration-300 group-hover:scale-110" />
          <span>Chat with me</span>
          <Sparkles
            size={14}
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </motion.button>
    </div>
  );
};

export default Chatbot;