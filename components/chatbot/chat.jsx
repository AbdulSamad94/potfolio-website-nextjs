"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, MessageCircleMore, SendHorizontal, X } from "lucide-react";

// Enhanced markdown-like parser for bot responses
const parseMessageText = (text) => {
  if (!text) return text;

  // Replace **text** with bold
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Replace bullet points (•) with proper list items
  text = text.replace(/^• (.+)$/gm, "<li>$1</li>");

  // Replace lines starting with **header:** with proper headers
  text = text.replace(
    /^\*\*(.*?):\*\*(.*)$/gm,
    '<h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-1 mt-2">$1:</h4><p class="mb-2">$2</p>'
  );

  // Wrap consecutive list items in ul tags
  text = text.replace(
    /(<li>.*<\/li>\s*)+/gs,
    '<ul class="list-disc list-inside mb-3 space-y-1 ml-2">$&</ul>'
  );

  // Handle URLs - make them clickable with better styling
  text = text.replace(
    /(https?:\/\/[^\s<>]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 underline break-all">$1</a>'
  );

  // Add proper spacing between sections
  text = text.replace(/\n\n/g, "<br><br>");
  text = text.replace(/\n/g, "<br>");

  return text;
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! I'm here to guide you through Abdul Samad's work. What would you like to see?",
      isBot: true,
      loading: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessageText = inputValue.trim();
    console.log("User message text:", userMessageText);
    console.log("Current session ID:", sessionId);

    const newUserMessage = {
      id: messages.length + 1,
      text: userMessageText,
      isBot: false,
      loading: false,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    const loadingMessage = {
      id: messages.length + 2,
      text: "",
      isBot: true,
      loading: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);
    setIsLoading(true);

    try {
      // Prepare request payload
      const requestBody = {
        message: userMessageText,
        ...(sessionId && { session_id: sessionId }),
      };

      console.log("Sending request payload:", requestBody);

      const res = await fetch(`/api/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        throw new Error(
          errorData.error || "Failed to get response from AI agent."
        );
      }

      const data = await res.json();
      console.log("Success response:", data);

      // Update or set session_id from backend response
      if (data.session_id) {
        if (!sessionId) {
          console.log("Setting new session ID:", data.session_id);
          setSessionId(data.session_id);
        } else if (sessionId !== data.session_id) {
          console.log("Updating session ID:", data.session_id);
          setSessionId(data.session_id);
        }
      }

      // Update messages: remove loading and add actual bot response
      setMessages((prev) => {
        const newMessages = prev.filter((msg) => !msg.loading);
        return [
          ...newMessages,
          {
            id: newMessages.length + 1,
            text: data.response,
            isBot: true,
            loading: false,
          },
        ];
      });
    } catch (error) {
      console.error("Error sending message to API:", error);
      setMessages((prev) => {
        const newMessages = prev.filter((msg) => !msg.loading);
        return [
          ...newMessages,
          {
            id: newMessages.length + 1,
            text: `Error: ${error.message}. Please try again.`,
            isBot: true,
            loading: false,
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Clear session when chat is closed (optional)
  const handleCloseChat = () => {
    setIsOpen(false);
    // Optionally clear session when closing chat
    // setSessionId(null);
    // setMessages([{
    //   id: 1,
    //   text: "Hey! I'm here to guide you through Abdul Samad's work. What would you like to see?",
    //   isBot: true,
    //   loading: false,
    // }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Debug session ID changes
  useEffect(() => {
    console.log("Session ID updated:", sessionId);
  }, [sessionId]);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-white font-semibold text-sm sm:text-base">
              SamadAI
            </h3>
            {/* Debug: Show session status */}
            {sessionId && (
              <div className="text-xs text-white/70">
                Session: {sessionId.slice(0, 8)}...
              </div>
            )}
          </div>
          <button
            onClick={handleCloseChat}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-800 relative">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl overflow-hidden">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading || !inputValue.trim()}
              className="px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <SendHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        {isOpen ? (
          <ArrowDown className="m-auto" size={20} />
        ) : (
          <div className="relative">
            <MessageCircleMore className="m-auto" size={20} />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>
    </div>
  );
};

const MessageBubble = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const parsedText = message.isBot
    ? parseMessageText(message.text)
    : message.text;

  return (
    <div
      className={`flex ${
        message.isBot ? "justify-start" : "justify-end"
      } transform transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className={`max-w-[85%] sm:max-w-xs md:max-w-sm px-3 sm:px-4 py-3 rounded-2xl transition-all duration-300 ${
          message.isBot
            ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
            : "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
        }`}
      >
        {message.loading ? (
          <LoadingAnimation />
        ) : message.isBot ? (
          <div
            className="text-xs sm:text-sm formatted-message leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parsedText }}
          />
        ) : (
          <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
        )}
      </div>
    </div>
  );
};

const LoadingAnimation = () => {
  return (
    <div className="flex items-center gap-1 py-1">
      <div className="flex gap-1 ml-2">
        <div
          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
        ></div>
        <div
          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
        ></div>
        <div
          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Chat;
