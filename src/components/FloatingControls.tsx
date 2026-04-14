"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Mail, User, Code, Briefcase } from "lucide-react";
import { useTheme } from "next-themes";

/* ================================================================
   THEME TOGGLE
   ================================================================ */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        w-12 h-12 flex items-center justify-center rounded-full
        shadow-lg border transition-all duration-300 cursor-pointer hover:scale-110
        ${isDark
          ? "bg-[#1a1917] border-white/15 text-white/70 hover:text-white hover:border-white/40"
          : "bg-[#f2ede4] border-black/15 text-black/60 hover:text-black hover:border-black/40"
        }
      `}
    >
      {isDark ? (
        /* Moon */
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M15.5 10.5A6.5 6.5 0 1 1 7.5 2.5a5.5 5.5 0 0 0 8 8z" fill="currentColor" />
        </svg>
      ) : (
        /* Sun */
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="9" cy="9" r="3.5" fill="currentColor" stroke="none" />
          <line x1="9" y1="1" x2="9" y2="3" />
          <line x1="9" y1="15" x2="9" y2="17" />
          <line x1="1" y1="9" x2="3" y2="9" />
          <line x1="15" y1="9" x2="17" y2="9" />
          <line x1="3.22" y1="3.22" x2="4.64" y2="4.64" />
          <line x1="13.36" y1="13.36" x2="14.78" y2="14.78" />
          <line x1="14.78" y1="3.22" x2="13.36" y2="4.64" />
          <line x1="4.64" y1="13.36" x2="3.22" y2="14.78" />
        </svg>
      )}
    </button>
  );
}

/* ================================================================
   CHATBOT
   ================================================================ */

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const PERSONAL_INFO = {
  name: "Rai M. Reyes Jr.",
  email: "raireyesjr@gmail.com",
  phone: "+63 9 763053088",
  skills: ["React", "NextJS", "TypeScript", "Node.js", "Tailwind CSS"],
  experience: "3+ years",
  resumeLink: "/resume.pdf",
  githubLink: "https://github.com/DevAdora",
  linkedinLink: "https://www.linkedin.com/in/rai-reyes-jr-6bb906272/",
  location: "Kabankalan City, Philippines",
  availability: "Open to opportunities",
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: `Hi! I'm ${PERSONAL_INFO.name}'s assistant. How can I help you today?`, sender: "bot", timestamp: new Date() },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  const quickActions = [
    { icon: <User size={16} />,      label: "About",    action: "Tell me about yourself" },
    { icon: <Code size={16} />,      label: "Skills",   action: "What are your skills?" },
    { icon: <Briefcase size={16} />, label: "Projects", action: "Show me your projects" },
    { icon: <Mail size={16} />,      label: "Contact",  action: "How can I contact you?" },
  ];

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("hire")) {
      setShowContactForm(true);
      return `You can reach me at **${PERSONAL_INFO.email}** or call **${PERSONAL_INFO.phone}**. I've opened a contact shortcut below!`;
    }
    if (input.includes("about") || input.includes("who are you") || input.includes("introduce")) {
      return `I'm **${PERSONAL_INFO.name}**, a developer based in ${PERSONAL_INFO.location}. ${PERSONAL_INFO.experience} of experience building modern web apps. Currently ${PERSONAL_INFO.availability}!`;
    }
    if (input.includes("skill") || input.includes("technology") || input.includes("tech stack")) {
      return `My core skills: **${PERSONAL_INFO.skills.join(", ")}**. Always learning new things!`;
    }
    if (input.includes("experience") || input.includes("background")) {
      return `**${PERSONAL_INFO.experience}** of professional web dev experience. [Download Resume](${PERSONAL_INFO.resumeLink})`;
    }
    if (input.includes("project") || input.includes("portfolio") || input.includes("work")) {
      return `Scroll down to see my projects, or check [GitHub](${PERSONAL_INFO.githubLink}).`;
    }
    if (input.includes("resume") || input.includes("cv")) {
      return `[Download Resume](${PERSONAL_INFO.resumeLink})`;
    }
    if (input.includes("github") || input.includes("linkedin") || input.includes("social")) {
      return `- [GitHub](${PERSONAL_INFO.githubLink})\n- [LinkedIn](${PERSONAL_INFO.linkedinLink})`;
    }
    if (input.includes("available") || input.includes("hiring")) {
      return `Currently **${PERSONAL_INFO.availability}**! Reach out: ${PERSONAL_INFO.email}`;
    }
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return `Hello! 👋 What would you like to know about ${PERSONAL_INFO.name}?`;
    }
    if (input.includes("thank")) return `You're welcome! Anything else?`;
    return `I can help with:\n- About Rai\n- Skills & experience\n- Projects\n- Contact info\n\nWhat would you like to know?`;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: messageText, sender: "user", timestamp: new Date() }]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: getBotResponse(messageText), sender: "bot", timestamp: new Date() }]);
      setIsTyping(false);
    }, 800);
  };

  const formatMessage = (text: string) => {
    let f = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    f = f.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:text-violet-300 underline">$1</a>');
    f = f.replace(/\n/g, "<br />");
    return f;
  };

  return (
    /* This wrapper is relative so the chat window can be positioned above it */
    <div className="relative">
      {/* Chat window — opens upward */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-[340px] sm:w-[390px] h-[540px] flex flex-col bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden mb-2">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-white/80">Online · Instant replies</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-950">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.sender === "user" ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white" : "bg-zinc-800 text-zinc-100"}`}>
                  <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                  <div className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/50" : "text-zinc-500"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800 shrink-0">
              <p className="text-xs text-zinc-400 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, i) => (
                  <button key={i} onClick={() => handleSendMessage(action.action)} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-full transition-colors cursor-pointer">
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact shortcut */}
          {showContactForm && (
            <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800 shrink-0">
              <a href={`mailto:${PERSONAL_INFO.email}?subject=Hello from your portfolio`} className="block w-full text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white text-sm font-medium py-2 rounded-lg transition-all">
                Open Email Client →
              </a>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-zinc-800 text-zinc-100 placeholder-zinc-500 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
              />
              <button onClick={() => handleSendMessage()} disabled={!inputValue.trim()} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all cursor-pointer" aria-label="Send">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all duration-200 hover:scale-110"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-md opacity-60" />
        <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 w-full h-full rounded-full flex items-center justify-center text-white">
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </div>
      </button>
    </div>
  );
}

/* ================================================================
   FLOATING CONTROLS — ThemeToggle above Chatbot
   ================================================================ */

export default function FloatingControls() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* ThemeToggle sits above the chatbot button */}
      <ThemeToggle />
      <Chatbot />
    </div>
  );
}