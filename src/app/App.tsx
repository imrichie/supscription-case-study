import { useEffect, useRef, useState } from "react";
import { Github, Menu, X } from "lucide-react";

// Import images
import mainLight from "../../images/main_light.png";
import mainDark from "../../images/main_dark.png";
import dashboardLight from "../../images/dashboard_light.png";
import cancelLight from "../../images/cancel_light.png";
import addNewLight from "../../images/addNew_light.png";
import eisenhowerMatrix from "../../images/Eisenhower-Matrix.png";
import higScreenshot from "../../images/HIG-screenshot.png";
import welcomeLight from "../../images/welcome_light.png";
import trelloBoard from "../../images/trello-board-1.png";
import trelloDetails from "../../images/trello-details-1.png";
import codeScreenshot from "../../images/code-screenshot.png";
import editingAppIcon from "../../images/editing-app-icon.png";
import swiftBirds from "../../images/swift-birds.png";
import prototypeScreen from "../../images/prototype.png";
import appLogo from "../../images/app-logo.png";

const navLabels: Record<string, string> = {
  overview: "Overview",
  build: "The Build",
  decisions: "Decisions",
  shipped: "What Shipped",
  next: "What's Next",
};

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={appLogo}
              alt="Supscription"
              style={{ height: "2rem", width: "auto" }}
            />
            <h1 className="text-xl font-semibold">
              Supscription
              <span className="text-white/40 font-light text-sm ml-2">
                | Case Study
              </span>
            </h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {Object.keys(navLabels).map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                  activeSection === id ? "text-[#FF2D6B]" : "text-white/70"
                }`}
              >
                {navLabels[id]}
              </button>
            ))}
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          </nav>

          {/* Mobile nav controls */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Github size={14} />
              <span className="text-sm">GitHub</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d1117]/95 px-8 py-4 flex flex-col gap-4">
            {Object.keys(navLabels).map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm text-left hover:text-[#FF2D6B] transition-colors ${
                  activeSection === id ? "text-[#FF2D6B]" : "text-white/70"
                }`}
              >
                {navLabels[id]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-8 pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1A0050] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF2D6B] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h2 className="text-7xl font-bold mb-6 leading-tight">
            Track what you pay for.
            <br />
            Nothing more.
          </h2>
          <p className="text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
            A native macOS subscription tracker built on Apple's frameworks. No
            bank linking. No accounts. Just your subscriptions, on your Mac.
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
              Swift
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
              macOS
            </span>
          </div>

          {/* App Store CTA */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-sm text-white/60 bg-white/5">
              <span className="text-base"></span>
              <span>Coming Soon to the Mac App Store</span>
            </div>
          </div>

          <div className="relative perspective-[2000px]">
            <div className="transform rotate-x-[2deg] rotate-y-[1deg] transition-transform duration-300 hover:rotate-x-[4deg] hover:rotate-y-[2deg]">
              <img
                src={mainLight}
                alt="Supscription App Main View"
                className="screenshot-frame w-full max-w-5xl mx-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-8 fade-in">
            <blockquote className="py-8 border-t border-b border-white/10">
              <p className="text-2xl leading-relaxed text-white/90">
                "The subscription tracking category had a clear execution gap.
                Every option was buried inside a finance suite or wanted bank
                credentials before showing anything useful.{" "}
                <span className="text-[#FF2D6B]">
                  Nobody was building the focused version.
                </span>
                "
              </p>
            </blockquote>
            <p className="text-lg leading-relaxed text-white/80">
              The subscription tracking category had a clear execution gap.
              Every option was buried inside a finance suite or wanted bank
              credentials before showing anything useful. Nobody was building
              the focused version — the one that just does the thing, on the
              platform, the way the platform expects.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              I'd felt this before with flight logbooks. I took private flying
              lessons and couldn't find a standalone logbook app that felt
              native. ForeFlight existed but it was a full suite. I just
              wanted the logbook.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              That pattern — a focused version of something that only exists
              inside something bigger — was the real reason to build
              Supscription.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#1A0050]/10 to-transparent">
        <div className="max-w-6xl mx-auto fade-in">
          <h3 className="text-5xl font-bold mb-8 text-center">
            Built on Apple's frameworks. Everything.
          </h3>
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            No third-party libraries. SwiftUI, SwiftData, UserNotifications,
            Swift Charts, URLSession — Apple's own tools cover everything this
            app needs. Using the platform's frameworks isn't a philosophy, it's
            just obvious if you understand the ecosystem. The byproduct is that
            the app behaves like a platform app because it actually is one.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">🐦</span>
              <span className="text-sm">Swift · SwiftUI · SwiftData</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">📊</span>
              <span className="text-sm">Swift Charts</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">🔔</span>
              <span className="text-sm">UserNotifications</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">🌐</span>
              <span className="text-sm">URLSession</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">📐</span>
              <span className="text-sm">Apple HIG</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-xl">🧩</span>
              <span className="text-sm">Modular Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Build Section */}
      <section id="build" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-left mb-4 fade-in">The Build</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
            {/* Screenshot left — natural aspect ratio locks the row height */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                aspectRatio: "2814 / 1854",
                boxShadow: "0 0 40px rgba(255,45,107,0.08), 0 32px 64px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={mainLight}
                alt="Supscription Main View"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            {/* Cards right — grid-rows-3 divides the image height into 3 equal slots */}
            <div className="grid grid-rows-3 gap-3">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="text-base font-semibold mb-1">Logo Fetching</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Pulling company logos by domain sounds simple. Edge cases make
                  it a real engineering problem — mismatched names, missing
                  assets, cache invalidation, graceful fallbacks that feel
                  intentional rather than broken.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden">
                <div className="text-2xl mb-2">🔔</div>
                <h4 className="text-base font-semibold mb-1">Notifications</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  UNUserNotificationCenter on macOS surfaces edge cases iOS
                  developers don't usually hit. Past-due dates, permission
                  states, two distinct notification types with separate
                  identifier namespaces so updating one never accidentally
                  removes the other.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden">
                <div className="text-2xl mb-2">✅</div>
                <h4 className="text-base font-semibold mb-1">Unit Tests</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  31 tests covering the SwiftData model layer, billing
                  calculations across all frequency types, and notification
                  scheduling edge cases. Found a real discrepancy during
                  pre-submission prep that had been in the codebase the whole
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decisions Section */}
      <section
        id="decisions"
        className="py-24 px-6 bg-gradient-to-b from-transparent via-[#FF2D6B]/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-left mb-4 fade-in">
            Decisions Worth Talking About
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
            {/* Cards left — grid-rows-3 divides the image height into 3 equal slots */}
            <div className="grid grid-rows-3 gap-3">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden hover:border-[#FF2D6B]/50 transition-colors">
                <h4 className="text-base font-semibold mb-1">
                  The Dashboard wasn't in scope
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  v1.0 was purely the core tracking loop. At some point the
                  question shifted from "does this work" to "does this have
                  enough value to ship publicly". The Dashboard earned its place
                  by answering that question.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A0050]/20 to-[#1A0050]/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden hover:border-[#1A0050]/50 transition-colors">
                <div className="text-2xl mb-2">✏️</div>
                <h4 className="text-base font-semibold mb-1">
                  Inline editing over a modal
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Every time I hit Edit and a sheet appeared presenting the same
                  information as a form, I felt the friction. Why leave the
                  screen you're already on? The fix was obvious once I named the
                  problem.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FF2D6B]/20 to-[#FF2D6B]/5 border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden hover:border-[#FF2D6B]/50 transition-colors">
                <div className="text-2xl mb-2">💾</div>
                <h4 className="text-base font-semibold mb-1">Local first</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  SwiftData, nothing leaving the device. iCloud sync is on the
                  roadmap. But it's not what the first release needed to prove.
                </p>
              </div>
            </div>

            {/* Screenshot right — natural aspect ratio locks the row height */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                aspectRatio: "2814 / 1854",
                boxShadow: "0 0 40px rgba(255,45,107,0.08), 0 32px 64px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={dashboardLight}
                alt="Dashboard"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-left mb-12 fade-in">
            How It Came Together
          </h3>

          {/* Timeline */}
          <div className="relative fade-in">
            {/* Vertical line — hidden on mobile */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#FF2D6B]/20"></div>

            <div className="space-y-20 md:pl-12">
              {/* Stage 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-[#FF2D6B]/20 text-[#FF2D6B] rounded-full text-sm mb-4">
                    Stage 1
                  </div>
                  <h4 className="text-2xl font-semibold mb-3">
                    Managed in Kanban
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base">
                    Every feature, bug, and polish item tracked with clarity.
                    Migrated to GitHub Issues and Projects for v2.0.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={trelloBoard}
                    alt="Trello Board"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Stage 2 — image left, text right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={eisenhowerMatrix}
                    alt="Eisenhower Matrix"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block px-4 py-1.5 bg-[#FF2D6B]/20 text-[#FF2D6B] rounded-full text-sm mb-4">
                    Stage 2
                  </div>
                  <h4 className="text-2xl font-semibold mb-3">
                    Feature prioritization
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base">
                    Used an Eisenhower Matrix to scope v1.0 and prevent
                    overbuilding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Shipped Section */}
      <section
        id="shipped"
        className="py-24 px-6 bg-gradient-to-b from-transparent via-[#1A0050]/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-left mb-4 fade-in">
            What Shipped
          </h3>

          {/* Full-width screenshot */}
          <div className="rounded-xl overflow-hidden mb-12 fade-in">
            <img
              src={dashboardLight}
              alt="Main View"
              className="screenshot-frame w-full"
              loading="lazy"
            />
          </div>

          {/* Clean feature list — no boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12 fade-in">
            {[
              "Three-panel NavigationSplitView",
              "Full-width Dashboard with Swift Charts",
              "To Cancel watchlist with urgency badges",
              "Inline editing in the detail view",
              "Drag and drop category reassignment",
              "Right-click context menus on categories",
              "Smart reminder date defaults",
              "Blurred logo atmosphere headers",
              "Brand colors from the app icon",
              "Full light and dark mode",
              "31 unit tests",
              "Submitted to Mac App Store",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 py-2 border-b border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D6B] flex-shrink-0"></span>
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Screenshot trio — equal sizing, no stagger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
            <img
              src={mainDark}
              alt="Dashboard Dark"
              className="screenshot-frame w-full"
              loading="lazy"
            />
            <img
              src={cancelLight}
              alt="To Cancel"
              className="screenshot-frame w-full"
              loading="lazy"
            />
            <img
              src={addNewLight}
              alt="Add New"
              className="screenshot-frame w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Dark Mode Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-in">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={mainDark}
              alt="Dark Mode"
              className="screenshot-frame w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent flex items-end justify-center pb-16">
              <p className="text-3xl font-semibold">
                Every screen. Light and dark. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section
        id="next"
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(26,0,80,0.6) 0%, rgba(13,17,23,0.95) 70%)",
        }}
      >
        <div className="max-w-6xl mx-auto fade-in">
          <h3 className="text-6xl font-bold mb-12 text-center">
            v2.0 — The Intelligence Layer
          </h3>
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
            The data model was kept local-first and clean for a reason.
            SwiftData maps directly to Core ML workflows.
          </p>
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            The plan for v2.0 is Foundation Models for on-device category
            suggestions and spending summaries, Core ML for anomaly detection
            and spending forecasts, and Apple Intelligence as those APIs mature.
            The goal isn't AI as a feature. It's AI that makes the data you've
            already entered more useful without asking you to do anything
            differently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1A0050]/30 to-[#1A0050]/10 border border-[#1A0050]/50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "linear-gradient(135deg, #FF2D6B, #1A0050)" }}
                >
                  🧠
                </div>
                <h4 className="text-xl font-semibold mb-2">Foundation Models</h4>
                <p className="text-white/70">
                  On-device category suggestions and spending summaries
                </p>
              </div>
              <span className="self-start mt-4 text-xs text-white/30 border border-white/10 rounded-full px-2 py-0.5">
                Planned
              </span>
            </div>

            <div className="bg-gradient-to-br from-[#FF2D6B]/30 to-[#FF2D6B]/10 border border-[#FF2D6B]/50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "linear-gradient(135deg, #1A0050, #FF2D6B)" }}
                >
                  📊
                </div>
                <h4 className="text-xl font-semibold mb-2">Core ML</h4>
                <p className="text-white/70">
                  Anomaly detection and spending forecasts
                </p>
              </div>
              <span className="self-start mt-4 text-xs text-white/30 border border-white/10 rounded-full px-2 py-0.5">
                Roadmap
              </span>
            </div>

            <div className="bg-gradient-to-br from-[#1A0050]/30 to-[#1A0050]/10 border border-[#1A0050]/50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,45,107,0.7), rgba(26,0,80,0.7))",
                  }}
                >
                  ✨
                </div>
                <h4 className="text-xl font-semibold mb-2">Apple Intelligence</h4>
                <p className="text-white/70">
                  As those APIs mature and become available
                </p>
              </div>
              <span className="self-start mt-4 text-xs text-white/30 border border-white/10 rounded-full px-2 py-0.5">
                Roadmap
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div className="font-semibold mb-1">Supscription</div>
            <div className="text-sm text-white/50">Built by Richie Flores</div>
          </div>
          <div className="text-center py-2">
            <div className="text-base text-white/70">
              A one-time purchase. No subscription to track your subscriptions.
            </div>
          </div>
          <div>
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }

        .rotate-x-2 {
          transform: rotateX(2deg);
        }

        .rotate-y-1 {
          transform: rotateY(1deg);
        }

        .screenshot-frame {
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 40px rgba(255, 45, 107, 0.08), 0 32px 64px rgba(0, 0, 0, 0.5);
          display: block;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
