import { useEffect, useMemo, useRef, useState } from "react";

type Role = "assistant" | "user";

type Message = {
  id: string;
  role: Role;
  content: string;
  pending?: boolean;
};

const INITIAL_MESSAGE =
  "Hi, I'm Rogers. Ask me anything about my experience, stack, work style, or availability. I speak English and Spanish.";

const SPANISH_PATTERN =
  /[áéíóúñ¿¡]|\b(hola|como|cómo|qué|que|cual|cuál|dónde|donde|por qué|porque|puedes|podrías|tienes|tengo|eres|soy|estás|esta|está|tú|tu|experiencia|trabajo|disponibilidad|español|correo|linkedin|remoto|frontend|stack|feliz|pregunta|hablar|hablas|puedo|quiero)\b/;

const parseMarkdownLinks = (content: string) => {
  const parts: Array<string | { label: string; href: string }> = [];
  const pattern = /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content))) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    parts.push({ label: match[1], href: match[2] });
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
};

const LOCAL_API_HINT =
  "The chat API is not running. Start the site with Azure Static Web Apps so /api/chat is available.";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "assistant",
      content: INITIAL_MESSAGE
    }
  ]);
  const threadRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("chat-open", isOpen);
    return () => {
      document.body.classList.remove("chat-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      window.setTimeout(() => inputRef.current?.focus(), 180);
    }
  }, [isOpen]);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const looksLikeSpanish = useMemo(() => SPANISH_PATTERN.test(message.toLowerCase()), [message]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setStatus("Write a question first.");
      return;
    }

    if (trimmedMessage.length > 100) {
      setStatus("Use 100 characters or fewer.");
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedMessage
    };

    const pendingMessage: Message = {
      id: `assistant-pending-${Date.now()}`,
      role: "assistant",
      content: SPANISH_PATTERN.test(trimmedMessage.toLowerCase())
        ? "Escribiendo..."
        : "Typing...",
      pending: true
    };

    setMessages((current) => [...current, userMessage, pendingMessage]);
    setMessage("");
    setStatus("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: trimmedMessage })
      });

      const contentType = response.headers.get("content-type") || "";
      const rawText = await response.text();

      if (!contentType.includes("application/json")) {
        const looksLikeHtml = rawText.trim().startsWith("<!doctype") || rawText.trim().startsWith("<html");
        throw new Error(looksLikeHtml ? LOCAL_API_HINT : "The chat API returned an unexpected response.");
      }

      const data = JSON.parse(rawText);

      if (!response.ok) {
        throw new Error(data?.error || "Request failed.");
      }

      setMessages((current) =>
        current.map((item) =>
          item.id === pendingMessage.id
            ? {
                ...item,
                content: data.reply,
                pending: false
              }
            : item
        )
      );
      setStatus("");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while contacting the chat endpoint.";

      setMessages((current) =>
        current.map((item) =>
          item.id === pendingMessage.id
            ? {
                ...item,
                content: errorMessage,
                pending: false
              }
            : item
        )
      );
      setStatus(errorMessage);
    }
  };

  return (
    <>
      <button
        className="chat-launcher"
        type="button"
        aria-haspopup="dialog"
        aria-controls="chat-overlay"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span className="chat-launcher__label">Ask me anything...</span>
        <span className="chat-launcher__pill">AI</span>
      </button>

      <div
        className={`chat-overlay${isOpen ? " is-open" : ""}`}
        id="chat-overlay"
        aria-hidden={!isOpen}
      >
        <div
          className="chat-overlay__backdrop"
          onClick={() => setIsOpen(false)}
        ></div>

        <section
          className="chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Ask me anything"
        >
          <button
            className="chat-mobile-close"
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>

          <div className="chat-thread" ref={threadRef}>
            {messages.map((item) => (
              <article
                key={item.id}
                className={`chat-message chat-message--${item.role}`}
              >
                <img
                  className="chat-message__avatar"
                  src={item.role === "assistant" ? "/rogers-avatar.png" : "/user-avatar.png"}
                  alt={item.role === "assistant" ? "Rogers avatar" : "User avatar"}
                  width={40}
                  height={40}
                />
                <div className="chat-message__bubble">
                  <p>
                    {item.role === "assistant"
                      ? parseMarkdownLinks(item.content).map((part, index) =>
                          typeof part === "string" ? (
                            <span key={index}>{part}</span>
                          ) : (
                            <a
                              key={index}
                              href={part.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {part.label}
                            </a>
                          )
                        )
                      : item.content}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <form className="chat-composer" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              Ask me anything...
            </label>
            <div className="chat-composer__row">
              <input
                id="chat-input"
                name="message"
                type="text"
                placeholder="Ask me anything..."
                autoComplete="off"
                maxLength={100}
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              <button type="submit">Send</button>
            </div>
            <p className="chat-status">{status}</p>
          </form>
        </section>
      </div>
    </>
  );
}
