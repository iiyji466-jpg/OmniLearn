import { ArrowRight, Brain, ChartNoAxesCombined, Sparkles } from "lucide-react";

import { OAuthButton } from "@/components/auth/oauth-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-4">
        <header className="flex items-center justify-between text-[15px] text-white/85">
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/10">
            Back
          </button>
          <div className="font-medium tracking-wide">omnilearn-auth.jsx</div>
          <button className="text-2xl leading-none text-white/70 transition hover:text-white">
            ×
          </button>
        </header>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-[#090d18]/95 px-5 py-8 shadow-glow backdrop-blur-2xl">
          <div className="mx-auto mb-4 h-2 w-24 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-400/30 to-violet-400/20 blur-sm" />

          <div className="mb-5 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/65">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              AI-Powered Cognitive Learning
            </div>

            <h1 className="mt-6 text-[38px] font-semibold leading-[1.03] tracking-[-0.04em] text-white">
              Learn Anything.
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Master Everything.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[300px] text-[14px] leading-6 text-white/55">
              Your personal AI mentor that adapts to how you think, remembers your progress, and guides you from curious beginner to true mastery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <OAuthButton label="Google" provider="google" />
            <OAuthButton label="GitHub" provider="github" />
            <OAuthButton label="Microsoft" provider="microsoft" />
            <OAuthButton label="Apple" provider="apple" />
          </div>

          <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/25">
            <div className="h-px flex-1 bg-white/10" />
            or continue with email
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/35">
                Full Name
              </label>
              <input
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-violet-400/45"
                placeholder="Ada Lovelace"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/35">
                Email
              </label>
              <input
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-violet-400/45"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/35">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 pr-12 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-violet-400/45"
                  placeholder="Min. 6 characters"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/45 transition hover:text-white/75"
                >
                  •
                </button>
              </div>
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(124,58,237,0.45)] transition hover:brightness-110">
              Create Account <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-center text-[13px] text-white/45">
            Have an account? <span className="font-semibold text-white/80">Sign in</span>
          </p>
        </section>

        <section className="mt-4 grid gap-3">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-1 flex items-center gap-2 text-[16px] font-semibold text-white/88">
              <Brain className="h-4 w-4 text-violet-300" />
              Active Recall Engine
            </div>
            <div className="text-[13px] leading-5 text-white/46">
              Spaced repetition and retrieval practice built into every session.
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-1 flex items-center gap-2 text-[16px] font-semibold text-white/88">
              <ChartNoAxesCombined className="h-4 w-4 text-cyan-300" />
              Cognitive Analytics
            </div>
            <div className="text-[13px] leading-5 text-white/46">
              Track exactly where you're strong and where you need more practice.
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-1 flex items-center gap-2 text-[16px] font-semibold text-white/88">
              <Sparkles className="h-4 w-4 text-amber-300" />
              4 Sign-In Methods
            </div>
            <div className="text-[13px] leading-5 text-white/46">
              Google, GitHub, Microsoft, Apple — or classic email. Real OAuth flows.
            </div>
          </div>
        </section>

        <footer className="mt-auto pt-6 text-center text-sm text-white/65">
          <span className="font-semibold text-white">Omnilearn</span> — No fake systems. No placeholder AI. Everything real.
        </footer>
      </div>
    </main>
  );
}
