"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  X,
  MessageCircle,
  Mail,
  User,
  Code,
  Briefcase,
} from "lucide-react";

// Types
interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  action: string;
}


const PERSONAL_INFO = {
  name: "Rai M. Reyes Jr.",
  email: "raireyesjr@gmail.com",
  phone: "+63 9 763053088",
  skills: ["React", "NextJS", "TypeScript", "Node.js", "Tailwind CSS"],
  experience: "3+ years",
  resumeLink: "/resume.pdf",
  githubLink: "https://github.com/DevAdora",
  linkedinLink: "https://linkedin.com/in/yourusername",
  location: "Kabankalan City, Philippines",
  availability: "Open to opportunities",
};

const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hi! I'm ${PERSONAL_INFO.name}'s assistant. How can I help you today?`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Quick actions
  const quickActions: QuickAction[] = [
    {
      icon: <User size={16} />,
      label: "About",
      action: "Tell me about yourself",
    },
    {
      icon: <Code size={16} />,
      label: "Skills",
      action: "What are your skills?",
    },
    {
      icon: <Briefcase size={16} />,
      label: "Projects",
      action: "Show me your projects",
    },
    {
      icon: <Mail size={16} />,
      label: "Contact",
      action: "How can I contact you?",
    },
  ];

  // Bot response logic
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Contact/Email keywords
    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("reach") ||
      input.includes("get in touch") ||
      input.includes("hire")
    ) {
      setShowContactForm(true);
      return `You can reach me at **${PERSONAL_INFO.email}**${
        PERSONAL_INFO.phone ? ` or call me at ${PERSONAL_INFO.phone}` : ""
      }. I've opened a contact form for you below!`;
    }

    // About/Bio keywords
    if (
      input.includes("about") ||
      input.includes("who are you") ||
      input.includes("tell me about") ||
      input.includes("introduce")
    ) {
      return `I'm **${PERSONAL_INFO.name}**, a passionate developer based in ${PERSONAL_INFO.location}. I have ${PERSONAL_INFO.experience} of experience building modern web applications. Currently ${PERSONAL_INFO.availability}!`;
    }

    // Skills keywords
    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech stack") ||
      input.includes("what do you know") ||
      input.includes("programming")
    ) {
      return `My core skills include: **${PERSONAL_INFO.skills.join(", ")}**. I'm always learning and exploring new technologies!`;
    }

    // Experience keywords
    if (
      input.includes("experience") ||
      input.includes("background") ||
      input.includes("work history")
    ) {
      return `I have **${PERSONAL_INFO.experience}** of professional experience in web development. Check out my resume for more details: [Download Resume](${PERSONAL_INFO.resumeLink})`;
    }

    // Projects keywords
    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("work") ||
      input.includes("built")
    ) {
      return `I've built several exciting projects! Scroll down to see my portfolio section, or check out my [GitHub](${PERSONAL_INFO.githubLink}) to see my code.`;
    }

    // Resume keywords
    if (input.includes("resume") || input.includes("cv")) {
      return `You can download my resume here: [Download Resume](${PERSONAL_INFO.resumeLink})`;
    }

    // Social links keywords
    if (
      input.includes("github") ||
      input.includes("linkedin") ||
      input.includes("social")
    ) {
      return `Connect with me:\n- [GitHub](${PERSONAL_INFO.githubLink})\n- [LinkedIn](${PERSONAL_INFO.linkedinLink})`;
    }

    // Availability keywords
    if (
      input.includes("available") ||
      input.includes("hiring") ||
      input.includes("open to work") ||
      input.includes("opportunities")
    ) {
      return `I'm currently **${PERSONAL_INFO.availability}**! Feel free to reach out at ${PERSONAL_INFO.email}.`;
    }

    // Greetings
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey") ||
      input === "greetings"
    ) {
      return `Hello! 👋 I'm here to help you learn more about ${PERSONAL_INFO.name}. What would you like to know?`;
    }

    // Thanks
    if (input.includes("thank") || input.includes("thanks")) {
      return `You're welcome! Is there anything else you'd like to know?`;
    }

    // Default response
    return `I'm not sure about that, but I can help you with:\n- Learning about ${PERSONAL_INFO.name}\n- Viewing skills and experience\n- Checking out projects\n- Getting contact information\n\nWhat would you like to know?`;
  };

  // Handle sending message
  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // Handle quick action click
  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  // Toggle chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowContactForm(false);
  };

  // Format message text (basic markdown support)
  const formatMessage = (text: string) => {
    // Bold text
    let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Links
    formatted = formatted.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">$1</a>',
    );
    // Line breaks
    formatted = formatted.replace(/\n/g, "<br />");
    return formatted;
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-4 rounded-full shadow-2xl hover:shadow-violet-500/50 transition-all hover:scale-110">
              <MessageCircle size={28} />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[620px] z-50 flex flex-col bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">
                  Portfolio Assistant
                </h3>
                <p className="text-xs text-white/80">
                  Online • Instant replies
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                      : "bg-zinc-800 text-zinc-100"
                  }`}
                >
                  <div
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(message.text),
                    }}
                  />
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-white/60"
                        : "text-zinc-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800">
              <p className="text-xs text-zinc-400 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-full transition-colors"
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Form */}
          {showContactForm && (
            <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800">
              <div className="bg-zinc-800 rounded-lg p-3">
                <p className="text-sm text-zinc-300 mb-2">
                  Send me a message directly:
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Hello from your portfolio`}
                  className="block w-full text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white text-sm font-medium py-2 rounded-lg transition-all"
                >
                  Open Email Client
                </a>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-zinc-800 text-zinc-100 placeholder-zinc-500 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioChatbot;
