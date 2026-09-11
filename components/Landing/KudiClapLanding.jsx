import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../UI/Button";

const steps = [
  {
    title: "Sign up",
    description:
      "Enter your name, email, and mobile money number to create your KudiClap account.",
    preview: "signup",
  },
  {
    title: "Share",
    description:
      "Share your tipping link with your audience or let fans dial your personal USSD code.",
    preview: "share",
  },
  {
    title: "Get paid",
    description:
      "Fans choose how they want to pay, and your earnings appear in your KudiClap wallet.",
    preview: "wallet",
  },
];

function Brand({ compact = false }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF85] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]" aria-label="KudiClap home">
      <img src="/kudiclap-mark.png" alt="" className={compact ? "h-7 w-7" : "h-8 w-8"} />
      <span className={compact ? "text-base font-headline font-bold tracking-[-0.04em]" : "text-lg font-headline font-bold tracking-[-0.04em]"}>
        Kudi<span className="text-[#00FF85]">Clap</span>
      </span>
    </Link>
  );
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PaymentIcon({ type }) {
  const paths = {
    mobile: <><rect x="6" y="2.5" width="12" height="15" rx="2" /><path d="M10 14.5h4" /></>,
    card: <><rect x="2.5" y="4.5" width="19" height="13" rx="2" /><path d="M2.5 9h19M6 14h4" /></>,
    ussd: <><circle cx="12" cy="12" r="8.5" /><path d="M8.5 12h7M12 8.5v7" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#00FF85]"><path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#252525] bg-[#0e0e0e] px-5 py-8 sm:mt-12 sm:px-10 sm:py-12">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)] [background-size:32px_32px]" />
      <span className="relative inline-flex items-center gap-2 rounded-full border border-[#292929] bg-[#141414] px-3 py-1 text-[10px] font-button text-[#b0b0b0]"><span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />Incoming tip</span>
      <div className="relative mx-auto flex min-h-[245px] max-w-3xl items-center justify-center sm:min-h-[285px]">
        <div className="absolute left-[7%] top-[43%] z-10 w-[45%] max-w-[245px] -rotate-[8deg] rounded-2xl border border-[#ddd3e8] bg-[#efe6f6] p-4 text-[#111] shadow-2xl sm:p-5">
          <p className="text-[8px] font-button font-bold tracking-[0.16em] text-[#6c6473]">INCOMING TIP</p>
          <p className="mt-4 font-headline text-2xl font-bold sm:text-3xl">₦2,500</p>
          <p className="mt-3 font-mono text-[9px] text-[#625969]">USSD · *388*10492#</p>
        </div>
        <div className="absolute right-[8%] top-[24%] z-0 w-[48%] max-w-[290px] rotate-[2deg] rounded-2xl border border-[#2c2c2c] bg-[#161616] p-4 shadow-2xl sm:p-5">
          <p className="text-[8px] font-button font-bold tracking-[0.16em] text-[#00FF85]">WALLET BALANCE</p>
          <p className="mt-4 font-mono text-xl font-bold text-white sm:text-2xl">₦84,200</p>
          <div className="mt-5 flex justify-between text-[9px] text-[#777]"><span>Available</span><span>••••</span></div>
        </div>
        <div className="absolute bottom-[8%] left-[28%] z-20 w-[50%] max-w-[285px] rotate-[5deg] rounded-2xl bg-[#00df78] p-4 text-[#07180f] shadow-[0_18px_45px_rgba(0,255,133,0.16)] sm:p-5">
          <p className="text-[8px] font-button font-bold tracking-[0.16em]">KUDICLAP</p>
          <p className="mt-4 font-mono text-xl font-bold sm:text-2xl">₦500</p>
          <div className="mt-5 flex justify-between text-[9px]"><span>Mobile Money</span><span>Anonymous</span></div>
        </div>
      </div>
      <div className="relative flex justify-end gap-7 pt-3 text-right sm:gap-12"><div><strong className="block font-headline text-xl">0%</strong><span className="text-[10px] text-[#a1a1a1]">Platform fees</span></div><div><strong className="block font-headline text-xl">&lt;60s</strong><span className="text-[10px] text-[#a1a1a1]">To get paid</span></div></div>
    </div>
  );
}

function ProductCards() {
  return (
    <div className="relative mx-auto min-h-[260px] w-full max-w-md sm:min-h-[340px]" aria-label="KudiClap payment methods preview">
      <div className="absolute left-1 top-7 w-[58%] -rotate-[9deg] rounded-2xl border border-[#353535] bg-[#131313] p-5 shadow-2xl"><p className="text-[9px] font-button tracking-[0.14em] text-[#a5a5a5]">USSD CODE</p><p className="mt-8 font-mono text-lg font-bold sm:text-xl">*388*10492#</p><span className="mt-6 block text-[10px] text-[#767676]">Dial to support</span></div>
      <div className="absolute right-0 top-0 w-[62%] rotate-[7deg] rounded-2xl bg-[#f0cd18] p-5 text-[#171300] shadow-2xl"><p className="text-[9px] font-button tracking-[0.14em]">CARD / MOBILE MONEY</p><p className="mt-8 text-sm font-bold">VISA · MOBILE MONEY</p><span className="mt-6 block text-[10px]">Flexible checkout</span></div>
      <div className="absolute bottom-0 left-[20%] z-10 w-[61%] rotate-[4deg] rounded-2xl bg-[#00dc79] p-5 text-[#06170e] shadow-[0_18px_45px_rgba(0,255,133,0.15)]"><p className="text-[9px] font-button tracking-[0.14em]">TIPPING LINK</p><p className="mt-8 font-mono text-xs font-bold sm:text-sm">kudiclap.com/chioma</p><span className="mt-6 block text-[10px]">Share anywhere</span></div>
    </div>
  );
}

function StepPreview({ type }) {
  if (type === "share") return <div className="rounded-2xl border border-[#292929] bg-[#101010] p-6"><p className="text-xs text-[#a6a6a6]">Your KudiClap link</p><p className="mt-3 rounded-lg border border-[#2c2c2c] bg-[#151515] p-3 font-mono text-sm text-[#00FF85]">kudiclap.com/chioma</p><p className="mt-5 text-xs text-[#a6a6a6]">Personal USSD</p><p className="mt-3 font-mono text-2xl font-bold">*388*10492#</p></div>;
  if (type === "wallet") return <div className="rounded-2xl border border-[#292929] bg-[#101010] p-6"><p className="text-xs text-[#a6a6a6]">Wallet balance</p><p className="mt-2 font-mono text-4xl font-bold">₦84,200</p><div className="mt-8 rounded-xl bg-[#00FF85] px-4 py-3 text-center font-button text-sm font-bold text-black">Withdraw</div></div>;
  return <div className="rounded-2xl border border-[#292929] bg-[#101010] p-5"><h3 className="font-headline text-xl font-bold">Join KudiClap</h3><label className="mt-5 block text-[10px] text-[#a6a6a6]">Full name</label><div className="mt-1.5 rounded-lg border border-[#2b2b2b] bg-[#151515] px-3 py-2.5 text-xs text-[#727272]">Chioma Adaeze</div><label className="mt-4 block text-[10px] text-[#a6a6a6]">Mobile money number</label><div className="mt-1.5 rounded-lg border border-[#2b2b2b] bg-[#151515] px-3 py-2.5 text-xs text-[#727272]">08012345678</div><div className="mt-5 rounded-lg bg-[#00FF85] px-3 py-2.5 text-center font-button text-xs font-bold text-black">Get Your Tipping Link</div></div>;
}

export default function KudiClapLanding() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentStep = steps[activeStep];
  const goToSignup = () => router.push("/signup");
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white selection:bg-[#00FF85] selection:text-black">
      <header className="sticky top-0 z-50 border-b border-[#1d1d1d] bg-[#0A0A0A]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <Brand compact />
          <div className="hidden items-center gap-7 text-sm text-[#9a9a9a] md:flex"><a href="#features" className="transition-colors hover:text-white">Features</a><a href="#how-it-works" className="transition-colors hover:text-white">How It Works</a><a href="#why-kudiclap" className="transition-colors hover:text-white">Why KudiClap</a><a href="#creator-cta" className="transition-colors hover:text-white">Creators</a></div>
          <div className="hidden items-center gap-5 md:flex"><Button className="px-5 py-2 text-xs shadow-[0_0_18px_rgba(0,255,133,0.12)]" onClick={goToSignup}>Get Started</Button></div>
          <button type="button" className="rounded-md p-2 text-[#d5d5d5] focus:outline-none focus:ring-2 focus:ring-[#00FF85] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu"><span className="block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" /></button>
        </nav>
        {menuOpen && <div id="mobile-menu" className="border-t border-[#202020] px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm text-[#b0b0b0]"><a onClick={closeMenu} href="#features">Features</a><a onClick={closeMenu} href="#how-it-works">How It Works</a><a onClick={closeMenu} href="#why-kudiclap">Why KudiClap</a><a onClick={closeMenu} href="#creator-cta">Creators</a><Button className="mt-1 w-full text-sm" onClick={goToSignup}>Get Your Tipping Link</Button></div></div>}
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 text-center sm:pb-16 sm:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#121212] px-3 py-1.5 text-[11px] text-[#a7a7a7]"><span className="h-1.5 w-1.5 rounded-full bg-[#00FF85]" />Built for creators and their fans</span>
          <h1 className="mx-auto mt-5 max-w-3xl font-headline text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:mt-6 sm:text-6xl lg:text-7xl">Tip African creators.<br /><span className="text-[#00FF85]">Instantly.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#b0b0b0] sm:mt-6 sm:text-lg">Support your favorite African creators with a simple tipping link, USSD, or card and mobile money.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8"><Button className="shadow-[0_0_24px_rgba(0,255,133,0.16)]" onClick={goToSignup}>Get Your Tipping Link</Button><a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-6 py-3 font-button text-sm font-bold text-white transition-colors hover:border-[#4a4a4a] hover:bg-[#151515] focus:outline-none focus:ring-2 focus:ring-[#00FF85]">See How It Works <ArrowIcon /></a></div>
          <HeroVisual />
        </section>

        <section className="border-y border-[#1e1e1e] bg-[#0c0c0c] py-10"><div className="mx-auto max-w-6xl px-5 text-center lg:px-8"><h2 className="font-headline text-xl font-bold sm:text-2xl">Multiple ways to pay. <span className="text-[#00FF85]">One simple tip.</span></h2><div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-5">{[["mobile", "Mobile Money"], ["card", "Card"], ["ussd", "USSD"]].map(([type, label]) => <div key={type} className="flex items-center gap-2.5 rounded-full border border-[#272727] bg-[#111] px-4 py-2.5 text-sm text-[#c5c5c5] transition-colors hover:border-[#00FF85]/50"><span className="text-[#00FF85]"><PaymentIcon type={type} /></span>{label}</div>)}</div></div></section>

        <section id="features" className="mx-auto grid max-w-6xl gap-9 px-5 py-24 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8"><ProductCards /><div><p className="section-label">3 ways to get tipped</p><h2 className="mt-4 max-w-lg font-headline text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">One creator, <span className="text-[#00FF85]">three</span> ways for fans to pay.</h2><p className="mt-5 max-w-xl leading-7 text-[#b0b0b0]">Every creator gets a shareable tipping link, a personal USSD code, and access to card and mobile money payments.</p><div className="mt-7 space-y-5">{[["Shareable tipping link", "Share your link in your social profiles, messages, and bios."], ["Personal USSD code", "Fans can tip using your USSD code without needing an app or internet connection."], ["Card and mobile money", "Give fans more ways to support you, whether they are nearby or paying online."]].map(([title, copy]) => <div key={title} className="flex gap-3"><CheckIcon /><div><h3 className="font-button text-sm font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#a7a7a7]">{copy}</p></div></div>)}</div><Button className="mt-8" onClick={goToSignup}>Get Your Tipping Link</Button></div></section>

        <section id="how-it-works" className="border-y border-[#1e1e1e] bg-[#0c0c0c] py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="text-center"><p className="section-label">How it works</p><h2 className="mt-4 font-headline text-3xl font-bold tracking-[-0.04em] sm:text-4xl">From sign-up to your first tip in under a minute.</h2></div><div className="mt-9 flex justify-center gap-3" role="tablist" aria-label="How KudiClap works">{steps.map((step, index) => <button key={step.title} type="button" role="tab" aria-selected={activeStep === index} aria-controls="step-panel" id={`step-tab-${index}`} onClick={() => setActiveStep(index)} className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-button font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF85] ${activeStep === index ? "border-[#00FF85] bg-[#00FF85] text-black" : "border-[#303030] bg-[#111] text-[#969696] hover:border-[#676767]"}`}>{index + 1}</button>)}</div><div id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${activeStep}`} className="mt-7 grid gap-8 rounded-2xl border border-[#282828] bg-[#141414] p-6 transition-opacity duration-200 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm text-[#00FF85]">Step {activeStep + 1}</p><h3 className="mt-3 font-headline text-3xl font-bold">{currentStep.title}</h3><p className="mt-4 max-w-md leading-7 text-[#b0b0b0]">{currentStep.description}</p></div><StepPreview type={currentStep.preview} /></div></div></section>

        <section id="why-kudiclap" className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8"><div><p className="section-label">The reason</p><h2 className="mt-4 max-w-md font-headline text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Why creators and fans trust KudiClap</h2><p className="mt-5 max-w-lg leading-7 text-[#b0b0b0]">Built for the way people pay across Africa, with simple access to mobile money, cards, and USSD.</p></div><div className="divide-y divide-[#262626]">{[["0%", "Zero fees", "Creators keep what their fans send, with no KudiClap platform fee."], ["<60s", "Fast payouts", "Once a payment clears, earnings are available in the creator wallet."], ["3", "Ways to pay", "Fans can support creators through a tipping link, USSD, or supported card and mobile money checkout."]].map(([number, title, copy], index) => <div key={title} className="grid grid-cols-[32px_1fr] gap-x-4 py-6 first:pt-0 last:pb-0"><span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#303030] text-[10px] text-[#858585]">{index + 1}</span><div><p className="font-headline text-3xl font-bold">{number}</p><h3 className="mt-1 font-button text-sm font-bold text-[#00FF85]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#a7a7a7]">{copy}</p></div></div>)}</div></section>

        <section id="creator-cta" className="mx-auto max-w-6xl px-5 pb-24 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] border border-[#292929] bg-[#121212] px-6 py-10 sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:px-16"><div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#00FF85]/[0.07] blur-3xl" /><div className="relative"><p className="section-label">For creators</p><h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Create your tipping link.</h2><p className="mt-5 max-w-xl leading-7 text-[#b0b0b0]">Start accepting tips from your audience with a shareable link, personal USSD code, and flexible payment options.</p><ul className="mt-7 space-y-3 text-sm text-[#d4d4d4]"><li className="flex gap-3"><CheckIcon /><span><strong className="font-button">Personal tipping link</strong><span className="block pl-0.5 pt-1 text-[#9e9e9e]">Share it anywhere your audience finds you.</span></span></li><li className="flex gap-3"><CheckIcon /><span><strong className="font-button">Personal USSD code</strong><span className="block pl-0.5 pt-1 text-[#9e9e9e]">Give fans another simple way to support you.</span></span></li><li className="flex gap-3"><CheckIcon /><span><strong className="font-button">Multiple payment options</strong><span className="block pl-0.5 pt-1 text-[#9e9e9e]">Accept support through available KudiClap payment methods.</span></span></li></ul><Button className="mt-8" onClick={goToSignup}>Get Your Tipping Link</Button></div><div className="relative mt-10 rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-6 lg:mt-0"><p className="font-headline text-xl font-bold">Your KudiClap link</p><p className="mt-5 text-[10px] font-button tracking-[0.12em] text-[#969696]">TIPPING LINK</p><p className="mt-2 rounded-lg border border-[#292929] bg-[#151515] p-3 font-mono text-sm text-[#00FF85]">kudiclap.com/chioma</p><p className="mt-5 text-[10px] font-button tracking-[0.12em] text-[#969696]">USSD</p><p className="mt-2 font-mono text-2xl font-bold">*388*10492#</p><Button className="mt-7 w-full text-sm" onClick={goToSignup}>Get Your Tipping Link</Button></div></div></section>
      </main>

      <footer className="border-t border-[#1e1e1e]"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-9 text-sm text-[#858585] sm:flex-row lg:px-8"><Brand compact /><div className="flex gap-6" aria-label="KudiClap social channels"><span>Instagram</span><span>TikTok</span><span>X</span></div><p>© 2026 KudiClap.</p></div></footer>
    </div>
  );
}
