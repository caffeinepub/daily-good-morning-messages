import { Button } from "@/components/ui/button";
import { Sparkles, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const messages = [
  "Good morning! May your day be filled with positivity and success ☀️",
  "Every morning is a new beginning. Start your day with a smile 😊",
  "Wake up and chase your dreams today 🌅",
  "Good morning! Believe in yourself and amazing things will happen ✨",
  "Let today be a day of happiness and progress 🌻",
  "Good morning! Stay positive and strong 💪",
  "A beautiful morning for a beautiful soul 🌸",
  "Start your day with gratitude and joy 🙏",
  "Good morning! Today is another chance to shine 🌞",
  "Rise and shine! Your future is bright ⭐",
];

export default function App() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [messageKey, setMessageKey] = useState(0);

  const handleNewMessage = () => {
    let idx = Math.floor(Math.random() * messages.length);
    // Avoid showing same message twice in a row
    if (messages[idx] === currentMessage && messages.length > 1) {
      idx = (idx + 1) % messages.length;
    }
    setCurrentMessage(messages[idx]);
    setMessageKey((k) => k + 1);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="sunrise-bg flex flex-col min-h-screen">
      {/* Decorative orbs */}
      <div
        className="orb"
        style={{
          width: 320,
          height: 320,
          top: "-80px",
          left: "-60px",
          background: "oklch(0.88 0.14 55)",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 240,
          height: 240,
          bottom: "60px",
          right: "-50px",
          background: "oklch(0.76 0.14 38)",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 160,
          height: 160,
          bottom: "200px",
          left: "10%",
          background: "oklch(0.82 0.10 62)",
          animationDelay: "6s",
        }}
      />

      {/* Main content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          data-ocid="morning.panel"
          className="w-full max-w-md bg-card rounded-2xl shadow-card px-8 py-10 flex flex-col items-center gap-6"
          style={{
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(255,180,120,0.25)",
          }}
        >
          {/* Animated sun icon */}
          <motion.div
            animate={{ rotate: [0, 10, -8, 6, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center w-16 h-16 rounded-full"
            style={{ background: "oklch(0.94 0.08 60)" }}
          >
            <Sun
              className="w-8 h-8"
              style={{ color: "oklch(0.62 0.18 38)" }}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Heading */}
          <div className="text-center space-y-1">
            <h1
              className="font-display text-4xl font-700 tracking-tight leading-tight"
              style={{ color: "oklch(0.58 0.18 36)" }}
            >
              Good Morning
            </h1>
            <p
              className="text-sm font-body"
              style={{ color: "oklch(0.60 0.06 52)" }}
            >
              Your daily dose of sunshine ✨
            </p>
          </div>

          {/* Message display */}
          <div
            className="w-full rounded-xl px-6 py-5 min-h-[96px] flex items-center justify-center"
            style={{
              background: "oklch(0.97 0.03 65)",
              border: "1px solid oklch(0.91 0.05 60)",
            }}
          >
            <AnimatePresence mode="wait">
              {currentMessage ? (
                <motion.p
                  key={messageKey}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center text-lg font-body font-500 leading-relaxed"
                  style={{ color: "oklch(0.32 0.04 50)" }}
                >
                  {currentMessage}
                </motion.p>
              ) : (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-base font-body italic"
                  style={{ color: "oklch(0.62 0.05 58)" }}
                >
                  Click the button to see today's message
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <Button
            data-ocid="morning.primary_button"
            onClick={handleNewMessage}
            size="lg"
            className="btn-shine w-full h-12 text-base font-body font-600 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
            style={{
              background: "oklch(0.64 0.18 38)",
              color: "white",
              border: "none",
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            New Message
          </Button>

          {/* Message counter hint */}
          <p
            className="text-xs font-body"
            style={{ color: "oklch(0.68 0.05 56)" }}
          >
            {messages.length} uplifting messages
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4">
        <p
          className="text-xs font-body"
          style={{ color: "oklch(0.52 0.06 46)" }}
        >
          © {currentYear}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.52 0.06 46)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
