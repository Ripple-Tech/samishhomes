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

    // Chrome & Edge install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // show after a short delay so it doesn't interrupt immediately
      setTimeout(() => setShowModal(true), 4000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Safari / iOS fallback - show manual instructions after a delay
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

  // don't show if not needed or already installed
  if (!showModal || isStandalone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white text-black rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
        <h2 className="text-2xl font-bold mb-3 text-[#0b4a3b]">
          Install Samish Homes
        </h2>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          Add Samish Homes and Apartments to your home screen for quick access to listings,
          property details and contact information. Enjoy a faster, app-like experience.
        </p>

        {/* iOS Safari manual instructions */}
        {isIOS && !deferredPrompt ? (
          <div className="text-sm text-gray-700 mb-6">
            <p className="mb-2 font-medium">To install on your iPhone or iPad:</p>
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
              className="flex-1 bg-[#0b4a3b] text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Install Now
            </button>

            <button
              onClick={handleClose}
              className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Maybe Later
            </button>
          </div>
        )}

        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black"
          aria-label="Close install prompt"
        >
          ✕
        </button>
      </div>
    </div>
  );
}