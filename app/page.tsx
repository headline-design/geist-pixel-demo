import { HeroSection } from "@/components/demo/hero-section"
import { VariantShowcase } from "@/components/demo/variant-showcase"
import { StatusDashboard } from "@/components/demo/status-dashboard"
import { CountdownBanner } from "@/components/demo/countdown-banner"
import { GamingScoreboard } from "@/components/demo/gaming-scoreboard"
import { RetroTerminal } from "@/components/demo/retro-terminal"
import { FontMixing } from "@/components/demo/font-mixing"
import { SizeScale } from "@/components/demo/size-scale"
import { InstallSection } from "@/components/demo/install-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <VariantShowcase />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <SizeScale />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <StatusDashboard />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <CountdownBanner />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <GamingScoreboard />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <RetroTerminal />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <FontMixing />

      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-border" />
      </div>

      <InstallSection />

      <footer className="py-12 text-center text-muted-foreground text-xs font-mono">
        <p>
          Geist Pixel — 5 variants / 480 glyphs / 32 languages / 7 stylistic sets
        </p>
        <p className="mt-1 font-[family-name:var(--font-geist-pixel-square)] text-sm text-foreground">
          Built by Vercel
        </p>
      </footer>
    </main>
  )
}
