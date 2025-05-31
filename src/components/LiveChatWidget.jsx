"use client";

import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Send, Minimize2, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const ws = useRef(null);
  const messagesEndRef = useRef(null);

  const [contactForm, setContactForm] = useState({
    phone: "",
    email: "",
    selectedProduct: "",
  });

  // Product categories
  const productCategories = [
    "Gastro Intestinal Drugs & Combinations",
    "Anti - Infective",
    "Cardio Vascular Drugs",
    "Respiratory Drugs",
    "Anti - Obesity",
    "Anti - Bph",
    "Anti - Depressant",
    "Pain Management",
    "Orthopedics",
    "New Products",
    "WHO GMP Products",
    "Vitamins And Minerals Premixes",
    "Spasmolytic",
    "Nutraceuticals",
    "Anti Allergic",
    "Muscular Relaxer",
    "Anti Inflammatory Analgesics",
    "Anti Emetic",
    "Anti Hyperlipidemic",
    "Immuno Suppressant",
    "Anti Psychotic",
    "DC Granules",
    "Sugar Spheres NPS",
    "Anti Coagulants",
    "Dietary Supplements",
  ];

  // WebSocket connection
  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Replace with your WebSocket server URL
      ws.current = new WebSocket("ws://your-backend.com/chat");

      ws.current.onopen = () => {
        console.log("WebSocket connected");
        // Send initial message or context
        ws.current.send(
          JSON.stringify({
            type: "init",
            product: selectedProduct || "General Inquiry",
          })
        );
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.message || "How can I assist you today?" },
        ]);
      };

      ws.current.onclose = () => {
        console.log("WebSocket disconnected");
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        setErrorMessage("Failed to connect to chat server. Please try again.");
        setSubmitStatus("error");
      };

      return () => {
        ws.current?.close();
      };
    }
  }, [isOpen, isMinimized, selectedProduct]);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setContactForm((prev) => ({ ...prev, selectedProduct: product }));
    setMessages([{ sender: "bot", text: `You selected ${product}. How can I assist you?` }]);
    setShowContactForm(false);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          type: "message",
          product: selectedProduct,
          message: userMessage,
        })
      );
    }
    setUserMessage("");
  };

  const handleInputChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactForm.phone || !contactForm.email) {
      setErrorMessage("Please fill in all required fields");
      setSubmitStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(contactForm.phone.replace(/[\s\-()]/g, ""))) {
      setErrorMessage("Please enter a valid phone number");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: contactForm.selectedProduct,
          phone: contactForm.phone,
          email: contactForm.email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          resetChat();
        }, 3000);
      } else {
        setErrorMessage("Server error. Please try again later.");
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setShowContactForm(false);
    setSelectedProduct("");
    setContactForm({ phone: "", email: "", selectedProduct: "" });
    setMessages([]);
    setSubmitStatus("idle");
    setErrorMessage("");
    setUserMessage("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    resetChat();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  // Floating chat button when closed
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="mb-2 mr-2 animate-bounce">
          <div className="bg-white rounded-lg shadow-lg p-3 relative border border-gray-200">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg">😊</div>
              <span className="text-sm font-medium text-gray-700">We are Online!</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  // Minimized state
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleMaximize}
          className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  // Full chat interface
  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <div className="flex items-center space-x-1">
              <button onClick={handleMinimize} className="p-1 hover:bg-green-700 rounded transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={handleClose} className="p-1 hover:bg-green-700 rounded transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-96 overflow-y-auto">
          {!showContactForm ? (
            selectedProduct ? (
              <div className="p-4 space-y-3">
                <div className="space-y-3">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[75%] p-3 rounded-lg text-sm ${
                          msg.sender === "user"
                            ? "bg-green-100 text-gray-800"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex space-x-2 pt-2">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                <div className="text-sm text-gray-600 mb-4">Please select a product category you're interested in:</div>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {productCategories.map((product, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 text-sm border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors"
                      onClick={() => handleProductSelect(product)}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="p-4">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Inquiry Sent Successfully!</h3>
                  <p className="text-gray-600 text-sm">Inquiry has been sent! Our team will get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Selected: <span className="font-medium text-green-600">{selectedProduct}</span>
                    </p>
                  </div>

                  {submitStatus === "error" && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-sm text-red-600">{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <button
                        type="button"
                        onClick={resetChat}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Submit</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveChatWidget;