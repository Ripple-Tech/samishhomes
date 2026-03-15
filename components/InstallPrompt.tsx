"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    const ios = /iphone|ipad|ipod/.test(userAgent);
    const standalone =
      (window.navigator as any).standalone ||
      window.matchMedia("(display-mode: standalone)").matches;

    setIsIOS(ios);
    setIsStandalone(standalone);

    if (standalone) return;
    if (localStorage.getItem("pwaPromptDismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowModal(true), 8000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    if (ios) {
      setTimeout(() => {
        setShowModal(true);
      }, 4000);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowModal(false);
      setDeferredPrompt(null);
      localStorage.setItem("pwaPromptDismissed", "true");
    }
  };

  const handleClose = () => {
    localStorage.setItem("pwaPromptDismissed", "true");
    setShowModal(false);
  };

  if (!showModal || isStandalone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Install Samish Homes"
    >
      <div
        className="rounded-2xl p-6 max-w-md w-full shadow-2xl relative font-body"
        style={{
          backgroundColor: "var(--color-card, white)",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-4 mb-3">
          {/* logo.jpg in public/ — shows if available */}
          <img
            src="/logo.jpg"
            alt="Samish Homes logo"
            className="w-12 h-12 rounded-md object-cover"
            onError={(e) => {
              // hide if not found
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--color-navy)" }}
            >
              Install Samish Homes
            </h2>
            <p className="text-sm" style={{ color: "var(--color-navy-700)" }}>
              Add Samish Homes and Apartments to your home screen
            </p>
          </div>
        </div>

        <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--color-navy-700)" }}>
          Get quick access to listings, property details and contact information.
          Install Samish Homes for a fast, app-like experience.
        </p>

        {isIOS && !deferredPrompt ? (
          <div className="text-sm mb-6" style={{ color: "var(--color-navy-700)" }}>
            <p className="mb-2 font-medium" style={{ color: "var(--color-navy)" }}>
              To install on iPhone or iPad:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Open this page in Safari</li>
              <li>Tap the Share icon (the square with an arrow)</li>
              <li>Select "Add to Home Screen"</li>
              <li>Tap "Add" in the top-right corner</li>
            </ol>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleInstall}
              className="flex-1 py-2 rounded-lg font-medium"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "black",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              Install Now
            </button>

            <button
              onClick={handleClose}
              className="flex-1 py-2 rounded-lg font-medium"
              style={{
                backgroundColor: "transparent",
                color: "var(--color-navy)",
                border: "1px solid hsl(var(--border))",
              }}
            >
              Maybe Later
            </button>
          </div>
        )}

        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black"
          aria-label="Close install prompt"
          style={{ color: "var(--color-navy-400)" }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}