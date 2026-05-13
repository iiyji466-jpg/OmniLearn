"use client";

import { cn } from "@/utils/cn";

type Provider = "google" | "github" | "microsoft" | "apple";

type Props = {
  label: string;
  provider: Provider;
  className?: string;
};

function ProviderIcon({ provider }: { provider: Provider }) {
  if (provider === "google") {
    return (
      <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.194 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.46 6.053 29.574 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.46 6.053 29.574 4 24 4c-7.682 0-14.354 4.327-17.694 10.691z"/>
        <path fill="#4CAF50" d="M24 44c5.079 0 9.874-1.948 13.409-5.132l-6.19-5.238C29.148 35.091 26.715 36 24 36c-5.174 0-9.62-3.317-11.286-7.946l-6.522 5.025C9.47 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.083 3.057-3.196 5.509-5.884 7.13l.002-.001 6.19 5.238C35.74 39.437 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
      </svg>
    );
  }

  if (provider === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.21 23.88c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.43-4.04-1.43-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.46-2.38 1.22-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.76.84 1.22 1.91 1.22 3.22 0 4.62-2.81 5.63-5.48 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (provider === "microsoft") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path fill="#F25022" d="M2 2h9v9H2z" />
        <path fill="#7FBA00" d="M13 2h9v9h-9z" />
        <path fill="#00A4EF" d="M2 13h9v9H2z" />
        <path fill="#FFB900" d="M13 13h9v9h-9z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.03-1.26 2.67-.98.78-2.13 1.23-3.35 1.13-.06-1.08.42-2.17 1.21-2.92A4.27 4.27 0 0 1 16.365 1.43ZM20.3 17.8c-.55 1.24-.82 1.78-1.53 2.87-.98 1.49-2.36 3.34-4.08 3.36-1.53.01-1.93-1-4-.98-2.07.01-2.5.99-4.03.98-1.72-.02-3.04-1.67-4.03-3.16C.39 17.56-.69 12.04 1.27 8.62c.98-1.72 2.72-2.81 4.61-2.84 1.44-.03 2.79.99 3.67.99.85 0 2.48-1.23 4.18-1.05.71.03 2.7.29 3.98 2.17-.11.08-2.38 1.39-2.35 4.15.03 3.3 2.9 4.39 2.94 4.41z" />
    </svg>
  );
}

export function OAuthButton({ label, provider, className }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-[13px] font-medium text-white/88 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/[0.06] hover:border-white/20",
        className
      )}
    >
      <ProviderIcon provider={provider} />
      <span>{label}</span>
    </button>
  );
}
