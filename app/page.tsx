"use client";

import { useEffect, useMemo, useState } from "react";

// ============================================================================
// CONFIGURATION: Lemon Squeezy Checkout URL
// ============================================================================
const LEMON_SQUEEZY_CHECKOUT_URL = "https://facelessai-technologies68.lemonsqueezy.com/checkout/buy/62aae9a3-1e4b-4bc5-a0a9-a4c7c5746b9f";

type Niche =
  | "AI & Tech"
  | "Motivation"
  | "Finance"
  | "Gaming"
  | "Business"
  | "Facts";

type Voice =
  | "Confident Male"
  | "Energetic Female"
  | "Deep Documentary"
  | "Calm Storyteller"
  | "Hype Creator";

const niches: Niche[] = [
  "AI & Tech",
  "Motivation",
  "Finance",
  "Gaming",
  "Business",
  "Facts",
];

const voices: Voice[] = [
  "Confident Male",
  "Energetic Female",
  "Deep Documentary",
  "Calm Storyteller",
  "Hype Creator",
];

const processingSteps = [
  "AI Composing Script...",
  "Synthesizing Premium Voice...",
  "Rendering Vertical Media Engine...",
  "Applying Captions & Motion...",
  "Finalizing Your Short...",
];

export default function Home() {
  const [isDashboard, setIsDashboard] = useState(false);
  const [niche, setNiche] = useState<Niche>("AI & Tech");
  const [voice, setVoice] = useState<Voice>("Confident Male");
  const [prompt, setPrompt] = useState(
    "Create a fast-paced short explaining 3 AI tools that can save creators hours every week."
  );

  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    if (!isGenerating) return;

    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current >= processingSteps.length - 1) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 1100);

    return () => window.clearInterval(timer);
  }, [isGenerating]);

  const progress = useMemo(() => {
    if (!isGenerating) return generated ? 100 : 0;
    return Math.min(((step + 1) / processingSteps.length) * 100, 100);
  }, [isGenerating, generated, step]);

  const generateVideo = () => {
    if (!prompt.trim() || isGenerating) return;

    setGenerated(false);
    setStep(0);
    setIsGenerating(true);

    window.setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      setStep(processingSteps.length - 1);
    }, 5600);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => setIsDashboard(false)}
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-lg shadow-[0_0_25px_rgba(129,140,248,0.15)]">
              ⚡
            </span>

            <span className="text-lg font-black tracking-tight">
              Faceless<span className="text-indigo-400">AI</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#how" className="transition hover:text-white">
              How it works
            </a>
          </div>

          <button
            onClick={() => setIsDashboard((value) => !value)}
            className="rounded-xl border border-indigo-400/30 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-indigo-300/60 hover:bg-indigo-500/10"
          >
            {isDashboard ? "← Landing Page" : "Open Studio →"}
          </button>
        </div>
      </nav>

      {isDashboard ? (
        <Dashboard
          niche={niche}
          setNiche={setNiche}
          voice={voice}
          setVoice={setVoice}
          prompt={prompt}
          setPrompt={setPrompt}
          isGenerating={isGenerating}
          generated={generated}
          progress={progress}
          step={step}
          onGenerate={generateVideo}
        />
      ) : (
        <LandingPage onOpenStudio={() => setIsDashboard(true)} />
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* LANDING PAGE                                                               */
/* -------------------------------------------------------------------------- */

function LandingPage({
  onOpenStudio,
}: {
  onOpenStudio: () => void;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            AI SHORT-FORM VIDEO ENGINE
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Turn one idea into
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              addictive Shorts.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            FacelessAI turns a simple text prompt into a complete
            retention-focused vertical video — script, voice, captions,
            visuals and pacing included.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={onOpenStudio}
              className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-4 text-sm font-bold shadow-[0_0_45px_rgba(129,140,248,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(129,140,248,0.4)] sm:w-auto"
            >
              Create Free Video Demo ⚡
            </button>

            <a
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-7 py-4 text-center text-sm font-bold text-indigo-200 transition hover:bg-indigo-500/20 sm:w-auto"
            >
              Get $9 Unlimited Access →
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            ⚡ No video editing skills required. Cancel subscription anytime with 1-click.
          </p>
        </div>

        {/* Hero visual */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-indigo-950/30">
            <div className="overflow-hidden rounded-[22px] border border-white/5 bg-slate-900">
              <div className="flex h-10 items-center gap-2 border-b border-white/5 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-[10px] text-slate-600">
                  facelessai / studio
                </span>
              </div>

              <div className="grid min-h-[330px] md:grid-cols-[1fr_0.8fr]">
                <div className="p-7 sm:p-10">
                  <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                    Your next viral short
                  </div>

                  <h2 className="max-w-lg text-3xl font-black tracking-tight sm:text-5xl">
                    One prompt.
                    <br />
                    <span className="text-slate-500">Full video.</span>
                  </h2>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm leading-6 text-slate-300">
                      “Explain why most creators fail to grow on short-form
                      platforms and give 3 actionable fixes.”
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Script", "Voice", "Captions", "Visuals"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-white/5 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 p-8 md:border-l md:border-t-0">
                  <div className="relative aspect-[9/16] w-36 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-indigo-950 via-slate-900 to-black shadow-[0_0_45px_rgba(129,140,248,0.2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.35),transparent_35%)]" />
                    <div className="absolute inset-x-3 bottom-12 text-center">
                      <div className="text-[8px] font-black uppercase tracking-widest text-cyan-300">
                        FacelessAI
                      </div>
                      <div className="mt-2 text-lg font-black leading-tight">
                        Your idea
                        <br />
                        just became
                        <br />
                        a SHORT.
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/5 px-5 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          <Stat value="50M+" label="Views Generated" />
          <Stat value="85%" label="Retention Score Boost" />
          <Stat value="1-Click" label="Video Creation" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Everything automated
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Stop editing.
            <br />
            Start publishing.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Feature icon="🧠" title="AI Script Engine" text="Hooks, pacing and retention-focused storytelling designed for viral shorts." />
          <Feature icon="🎙️" title="Ultra-Realistic Voice" text="Natural voice personalities matched to your specific content niche." />
          <Feature icon="🎬" title="Auto Visual Render" text="High-converting 9:16 vertical media generated dynamically." />
          <Feature icon="⚡" title="Dynamic Captions" text="High-retention animated captions optimized for mobile scrollers." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-cyan-500/5 p-7 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
            The workflow
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Idea → Short → Publish.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Step number="01" title="Describe Your Prompt" text="Type a topic or hook idea into the studio setup." />
            <Step number="02" title="AI Assembles Media" text="AI generates script, voice, graphics, and animated captions in seconds." />
            <Step number="03" title="Export & Go Viral" text="Download ready-to-post 9:16 Shorts for YouTube, TikTok & Reels." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-cyan-500/10 p-7 text-center shadow-[0_0_80px_rgba(99,102,241,0.1)] sm:p-12">
          <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[90px]" />

          <div className="relative">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              LAUNCH SPECIAL • SAVE $500/MONTH
            </span>

            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
              Create 30 Viral Videos Every Month for Just $9
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Skip paying expensive video editors $50/video. Generate complete high-retention faceless shorts in 10 seconds.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="text-6xl font-black">$9</span>
              <span className="text-left text-sm text-slate-400">
                / month
                <br />
                <span className="text-xs text-indigo-300 font-semibold">30 Video Credits</span>
              </span>
            </div>

            <a
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block w-full rounded-2xl bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100 sm:w-auto shadow-lg"
            >
              Get Instant Access for $9 →
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span>✓ Instant Delivery</span>
              <span>✓ Secure Checkout (Card / Apple Pay)</span>
              <span>✓ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-10 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} FacelessAI. Built for creators globally.
      </footer>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* DASHBOARD                                                                  */
/* -------------------------------------------------------------------------- */

function Dashboard({
  niche,
  setNiche,
  voice,
  setVoice,
  prompt,
  setPrompt,
  isGenerating,
  generated,
  progress,
  step,
  onGenerate,
}: {
  niche: Niche;
  setNiche: (value: Niche) => void;
  voice: Voice;
  setVoice: (value: Voice) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  isGenerating: boolean;
  generated: boolean;
  progress: number;
  step: number;
  onGenerate: () => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <div className="mb-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              FacelessAI Studio
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
              Create your next Short.
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Turn an idea into a ready-to-publish vertical video.
            </p>
          </div>

          <a
            href={LEMON_SQUEEZY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-3 transition hover:bg-indigo-500/20"
          >
            <span className="text-lg">⚡</span>
            <div>
              <div className="text-xs font-bold text-white">Upgrade Plan</div>
              <div className="text-[10px] text-indigo-300">Get 30 Credits for $9</div>
            </div>
          </a>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
        {/* Controls */}
        <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <h2 className="font-bold">Video Setup</h2>
              <p className="mt-1 text-xs text-slate-600">
                Tell the AI what you want.
              </p>
            </div>

            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[10px] font-bold text-green-300">
              ● READY
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Niche */}
            <label className="block">
              <span className="mb-2 block text-xs font-bold text-slate-400">
                🎯 NICHE
              </span>

              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value as Niche)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60"
              >
                {niches.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            {/* Voice */}
            <label className="block">
              <span className="mb-2 block text-xs font-bold text-slate-400">
                🎙️ VOICE
              </span>

              <select
                value={voice}
                onChange={(e) => setVoice(e.target.value as Voice)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60"
              >
                {voices.map((item) => (
                  <option key={item}>{item}</option>
          
