"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitLeadCapture } from "@/actions/lead-capture";
import { X, Home, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

const LeadCaptureSchema = z.object({
  phone: z.string().min(7, "Enter a valid phone number"),
  whatsapp: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
});

type LeadCaptureValues = z.infer<typeof LeadCaptureSchema>;

const STORAGE_KEY = "leadCaptureSubmitted";
const STORAGE_TIMESTAMP_KEY = "leadCaptureTimestamp";
const DELAY_MS = 2500; // Show after 2.5s

const greeting = (() => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning! 👋";
  if (hour < 17) return "Good afternoon! 👋";
  return "Good evening! 👋";
})();

export default function LeadCaptureModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<LeadCaptureValues>({
    resolver: zodResolver(LeadCaptureSchema),
    defaultValues: { phone: "", whatsapp: "", email: "" },
  });

  useEffect(() => {
    // Check if user has already seen/submitted the modal in this session
    const hasSeenModal = sessionStorage.getItem(STORAGE_KEY);
    
    if (hasSeenModal) {
      // User has already seen the modal, don't show it again
      return;
    }
    
    // Set a timeout to show the modal after delay
    const timer = setTimeout(() => {
      // Double-check again before showing (in case something changed during delay)
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setShow(true);
        // Optionally mark as seen immediately to prevent showing if user navigates quickly
        // But we'll keep the timeout behavior as is
      }
    }, DELAY_MS);
    
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once when component mounts

  const onSubmit = (values: LeadCaptureValues) => {
    setError(undefined);
    startTransition(() => {
      submitLeadCapture(values).then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setSubmitted(true);
          // Mark as submitted/seen immediately
          sessionStorage.setItem(STORAGE_KEY, "true");
          sessionStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
          setTimeout(() => setShow(false), 3000);
        }
      });
    });
  };

  const handleClose = () => {
    // Mark as seen even if user closes without submitting
    sessionStorage.setItem(STORAGE_KEY, "closed");
    sessionStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(17, 24, 39, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "fadeIn 0.3s ease-out",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Stay connected with Samish Homes"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-card {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .react-international-phone-input-container {
          width: 100% !important;
        }
        .react-international-phone-input-container .react-international-phone-country-selector-button {
          border: 1px solid hsl(214 20% 88%) !important;
          border-right: none !important;
          border-radius: 8px 0 0 8px !important;
          background: #f8fafc !important;
          height: 40px !important;
        }
        .react-international-phone-input-container .react-international-phone-input {
          width: 100% !important;
          border: 1px solid hsl(214 20% 88%) !important;
          border-radius: 0 8px 8px 0 !important;
          height: 40px !important;
          font-size: 14px !important;
          color: #293d5c !important;
        }
        .react-international-phone-input:focus {
          outline: none !important;
          border-color: #eabe20 !important;
          box-shadow: 0 0 0 3px rgba(234,190,32,0.15) !important;
        }
      `}</style>

      <div
        className="modal-card relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Decorative header band */}
        <div
          style={{
            background: "linear-gradient(135deg, #293d5c 0%, #3a5278 60%, #293d5c 100%)",
            padding: "28px 28px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(234,190,32,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)",
            }}
          />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              zIndex: 10,
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-3 relative z-10 mb-2">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: "#eabe20" }}
            >
              <Home size={20} color="#293d5c" strokeWidth={2.5} />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(234,190,32,0.9)", fontFamily: "Inter, sans-serif" }}
              >
                Samish Homes
              </p>
              <h2
                className="text-xl font-bold leading-tight"
                style={{
                  color: "#ffffff",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Find Your Dream Home
              </h2>
            </div>
          </div>

          <p
            className="text-sm relative z-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            {greeting} Welcome to Samish Homes! We&apos;re excited to help you find the perfect property. 
          </p>
        </div>

        {/* Form body */}
        <div className="p-6">
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center py-6 gap-3 text-center"
              style={{ animation: "slideUp 0.35s ease-out" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-1"
                style={{ backgroundColor: "rgba(234,190,32,0.12)" }}
              >
                <CheckCircle2 size={32} color="#eabe20" />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: "#293d5c", fontFamily: "'Playfair Display', serif" }}
              >
                You&apos;re on the list!
              </h3>
              <p
                className="text-sm"
                style={{ color: "#6983a5", fontFamily: "Inter, sans-serif" }}
              >
                We&apos;ll be in touch with the best properties for you shortly.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: "#293d5c", fontFamily: "Inter, sans-serif" }}
                      >
                        <Phone size={13} />
                        Phone Number <span style={{ color: "#e53e3e" }}>*</span>
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="ng"
                          value={field.value}
                          onChange={(phone) => field.onChange(phone)}
                          disabled={isPending}
                          style={{ width: "100%" }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp (optional) */}
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: "#293d5c", fontFamily: "Inter, sans-serif" }}
                      >
                        <MessageCircle size={13} />
                        WhatsApp Number{" "}
                        <span
                          className="font-normal text-xs"
                          style={{ color: "#6983a5" }}
                        >
                          (optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="ng"
                          value={field.value ?? ""}
                          onChange={(phone) => field.onChange(phone)}
                          disabled={isPending}
                          style={{ width: "100%" }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: "#293d5c", fontFamily: "Inter, sans-serif" }}
                      >
                        <Mail size={13} />
                        Email Address <span style={{ color: "#e53e3e" }}>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@example.com"
                          disabled={isPending}
                          style={{
                            borderColor: "hsl(214 20% 88%)",
                            color: "#293d5c",
                            fontFamily: "Inter, sans-serif",
                          }}
                          className="focus-visible:ring-[#eabe20] focus-visible:border-[#eabe20]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error && (
                  <p
                    className="text-sm text-center py-2 px-3 rounded-lg"
                    style={{
                      color: "#c53030",
                      backgroundColor: "#fff5f5",
                      border: "1px solid #fed7d7",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {error}
                  </p>
                )}

                <div className="flex gap-3 pt-1">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 font-semibold transition-all active:scale-[0.98]"
                    style={{
                      backgroundColor: "#eabe20",
                      color: "#293d5c",
                      fontFamily: "Inter, sans-serif",
                      height: "42px",
                      fontSize: "14px",
                      boxShadow: "0 2px 8px rgba(234,190,32,0.35)",
                    }}
                  >
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>

                <p
                  className="text-xs text-center"
                  style={{ color: "#879fbc", fontFamily: "Inter, sans-serif" }}
                >
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}