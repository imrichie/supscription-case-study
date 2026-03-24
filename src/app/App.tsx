import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

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

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
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
            {/* Change 1 — header title with Case Study label */}
            <h1 className="text-xl font-semibold">
              Supscription
              <span className="text-white/40 font-light text-sm ml-2">
                | Case Study
              </span>
            </h1>
          </div>
          <nav className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("overview")}
              className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                activeSection === "overview"
                  ? "text-[#FF2D6B]"
                  : "text-white/70"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("build")}
              className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                activeSection === "build" ? "text-[#FF2D6B]" : "text-white/70"
              }`}
            >
              The Build
            </button>
            <button
              onClick={() => scrollToSection("decisions")}
              className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                activeSection === "decisions"
                  ? "text-[#FF2D6B]"
                  : "text-white/70"
              }`}
            >
              Decisions
            </button>
            <button
              onClick={() => scrollToSection("shipped")}
              className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                activeSection === "shipped" ? "text-[#FF2D6B]" : "text-white/70"
              }`}
            >
              What Shipped
            </button>
            <button
              onClick={() => scrollToSection("next")}
              className={`text-sm hover:text-[#FF2D6B] transition-colors ${
                activeSection === "next" ? "text-[#FF2D6B]" : "text-white/70"
              }`}
            >
              What's Next
            </button>
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
        </div>
      </header>

      {/* Hero Section — Change 2: pb-8 */}
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

          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
              Swift
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
              macOS
            </span>
          </div>

          <div className="relative perspective-[2000px]">
            <div className="transform rotate-x-[2deg] rotate-y-[1deg] transition-transform duration-300 hover:rotate-x-[4deg] hover:rotate-y-[2deg]">
              <img
                src={mainLight}
                alt="Supscription App Main View"
                className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl shadow-black/50"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section — Change 2: pt-8 */}
      <section id="overview" className="pt-8 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Pull Quote */}
          <div className="py-12 px-8 text-center border-t border-b border-white/10 mb-10 fade-in">
            <p className="text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto">
              "The subscription tracking category had a clear execution gap.
              Every option was buried inside a finance suite or wanted bank
              credentials before showing anything useful.{" "}
              <span className="text-[#FF2D6B]">
                Nobody was building the focused version.
              </span>
              "
            </p>
          </div>

          {/* Change 3 — responsive asymmetric bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch fade-in">
            <div className="md:col-span-1 lg:col-span-2 overflow-hidden rounded-xl border border-white/10">
              <img
                src={welcomeLight}
                alt="Supscription Welcome"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 bg-gradient-to-br from-[#1A0050]/20 to-[#FF2D6B]/10 border border-white/10 rounded-2xl p-8 flex flex-col justify-center space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                The subscription tracking category had a clear execution gap.
                Every option was buried inside a finance suite or wanted bank
                credentials before showing anything useful. Nobody was building
                the focused version — the one that just does the thing, on the
                platform, the way the platform expects.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                I'd felt this before with flight logbooks. I took private flying
                lessons and couldn't find a standalone logbook app that felt
                native. ForeFlight existed but it was a full suite. I just
                wanted the logbook.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                That pattern — a focused version of something that only exists
                inside something bigger — was the real reason to build
                Supscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-8 px-8 bg-gradient-to-b from-transparent via-[#1A0050]/10 to-transparent">
        <div className="max-w-[1200px] mx-auto fade-in">
          <h3 className="text-5xl font-bold mb-8 text-center">
            Built on Apple's frameworks. Everything.
          </h3>
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            No third-party libraries. SwiftUI, SwiftData, UserNotifications,
            Swift Charts, URLSession — Apple's own tools cover everything this
            app needs. Using the platform's frameworks isn't a philosophy, it's
            just obvious if you understand the ecosystem. The byproduct is that
            the app behaves like a platform app because it actually is one.
          </p>

          {/* Change 3 — responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <img
                src={swiftBirds}
                alt="Swift Birds"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <div className="text-sm text-white/70">
                Swift · SwiftUI · SwiftData
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <img
                src={higScreenshot}
                alt="Apple HIG"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <div className="text-sm text-white/70">
                Apple HIG — referenced on every decision
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <img
                src={codeScreenshot}
                alt="Code Screenshot"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <div className="text-sm text-white/70">
                Modular component architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Build Section */}
      <section id="build" className="py-8 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-6xl font-bold mb-10 fade-in">The Build</h3>

          {/* Change 3 — responsive grid-cols-5 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start fade-in">
            {/* Large Image */}
            <div className="lg:col-span-3 lg:sticky lg:top-24">
              <img
                src={mainLight}
                alt="Supscription Main View"
                className="w-full rounded-xl shadow-2xl border border-white/10"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-3xl mb-4">🎨</div>
                <h4 className="text-2xl font-semibold mb-4">Logo Fetching</h4>
                <p className="text-white/70 leading-relaxed">
                  Pulling company logos by domain sounds simple. Edge cases make
                  it a real engineering problem — mismatched names, missing
                  assets, cache invalidation, graceful fallbacks that feel
                  intentional rather than broken.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-3xl mb-4">🔔</div>
                <h4 className="text-2xl font-semibold mb-4">Notifications</h4>
                <p className="text-white/70 leading-relaxed">
                  UNUserNotificationCenter on macOS surfaces edge cases iOS
                  developers don't usually hit. Past-due dates, permission
                  states, two distinct notification types with separate
                  identifier namespaces so updating one never accidentally
                  removes the other.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-3xl mb-4">✅</div>
                <h4 className="text-2xl font-semibold mb-4">Unit Tests</h4>
                <p className="text-white/70 leading-relaxed">
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

      {/* Decisions Section - Bento Grid */}
      <section
        id="decisions"
        className="py-8 px-8 bg-gradient-to-b from-transparent via-[#FF2D6B]/5 to-transparent"
      >
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-6xl font-bold mb-10 text-center fade-in">
            Decisions Worth Talking About
          </h3>

          <div className="grid grid-cols-12 gap-6 fade-in">
            {/* Large card - Dashboard */}
            <div className="col-span-12 lg:col-span-8 row-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF2D6B]/50 transition-colors">
              <img
                src={dashboardLight}
                alt="Dashboard"
                className="w-full rounded-lg mb-6 border border-white/10"
                loading="lazy"
              />
              <h4 className="text-2xl font-semibold mb-4">
                The Dashboard wasn't in scope
              </h4>
              <p className="text-white/70 leading-relaxed">
                v1.0 was purely the core tracking loop. At some point the
                question shifted from "does this work" to "does this have enough
                value to ship publicly". The Dashboard earned its place by
                answering that question.
              </p>
            </div>

            {/* Medium card - Inline editing */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#1A0050]/20 to-[#1A0050]/5 border border-white/10 rounded-2xl p-8 hover:border-[#1A0050]/50 transition-colors">
              <div className="text-3xl mb-4">✏️</div>
              <h4 className="text-xl font-semibold mb-4">
                Inline editing over a modal
              </h4>
              <p className="text-white/70 leading-relaxed">
                Every time I hit Edit and a sheet appeared presenting the same
                information as a form, I felt the friction. Why leave the screen
                you're already on? The fix was obvious once I named the problem.
              </p>
            </div>

            {/* Small card - Local first */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#FF2D6B]/20 to-[#FF2D6B]/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF2D6B]/50 transition-colors">
              <div className="text-3xl mb-4">💾</div>
              <h4 className="text-xl font-semibold mb-4">Local first</h4>
              <p className="text-white/70 leading-relaxed">
                SwiftData, nothing leaving the device. iCloud sync is on the
                roadmap. But it's not what the first release needed to prove.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-6xl font-bold mb-10 text-center fade-in">
            How It Came Together
          </h3>

          <div className="space-y-16 fade-in">
            {/* Stage 1 — Change 3: responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-[#FF2D6B]/20 text-[#FF2D6B] rounded-full text-sm mb-6">
                  Stage 1
                </div>
                <h4 className="text-3xl font-semibold mb-4">
                  Managed in Kanban
                </h4>
                <p className="text-white/70 leading-relaxed text-lg">
                  Every feature, bug, and polish item tracked with clarity.
                  Migrated to GitHub Issues and Projects for v2.0.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 space-y-4">
                <img
                  src={trelloBoard}
                  alt="Trello Board"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
                <img
                  src={trelloDetails}
                  alt="Trello Details"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Stage 2 — Change 3: responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-[#FF2D6B]/20 text-[#FF2D6B] rounded-full text-sm mb-6">
                  Stage 2
                </div>
                <h4 className="text-3xl font-semibold mb-4">
                  Feature prioritization
                </h4>
                <p className="text-white/70 leading-relaxed text-lg">
                  Used an Eisenhower Matrix to scope v1.0 and prevent
                  overbuilding.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4">
                <img
                  src={eisenhowerMatrix}
                  alt="Eisenhower Matrix"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Shipped Section */}
      <section
        id="shipped"
        className="py-8 px-8 bg-gradient-to-b from-transparent via-[#1A0050]/10 to-transparent"
      >
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-6xl font-bold mb-10 text-center fade-in">
            What Shipped
          </h3>

          <div className="mb-10 fade-in">
            <img
              src={dashboardLight}
              alt="Main View"
              className="w-full rounded-xl border border-white/10 shadow-2xl mb-6"
              loading="lazy"
            />
            {/* Change 3 — responsive thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={mainDark}
                alt="Dashboard"
                className="w-full rounded-xl border border-white/10 shadow-xl"
                loading="lazy"
              />
              <img
                src={cancelLight}
                alt="To Cancel"
                className="w-full rounded-xl border border-white/10 shadow-xl"
                loading="lazy"
              />
              <img
                src={addNewLight}
                alt="Add New"
                className="w-full rounded-xl border border-white/10 shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Change 3 — responsive feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-in">
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Three-panel NavigationSplitView
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Full-width Dashboard with Swift Charts
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                To Cancel watchlist with urgency badges
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Inline editing in the detail view
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Drag and drop category reassignment
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Right-click context menus on categories
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Smart reminder date defaults
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Blurred logo atmosphere headers
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">
                Brand colors from the app icon
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">Full light and dark mode</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">31 unit tests</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <span className="text-white/90">Submitted to Mac App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Section */}
      <section className="py-8 px-8">
        <div className="max-w-[1400px] mx-auto fade-in">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={mainDark}
              alt="Dark Mode"
              className="w-full"
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
        className="py-8 px-8 bg-gradient-to-b from-transparent via-[#FF2D6B]/10 to-[#1A0050]/10"
      >
        <div className="max-w-[1200px] mx-auto fade-in">
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

          {/* Change 3 — responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1A0050]/30 to-[#1A0050]/10 border border-[#1A0050]/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-2xl font-semibold mb-4">Foundation Models</h4>
              <p className="text-white/70">
                On-device category suggestions and spending summaries
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF2D6B]/30 to-[#FF2D6B]/10 border border-[#FF2D6B]/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-2xl font-semibold mb-4">Core ML</h4>
              <p className="text-white/70">
                Anomaly detection and spending forecasts
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A0050]/30 to-[#1A0050]/10 border border-[#1A0050]/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-2xl font-semibold mb-4">
                Apple Intelligence
              </h4>
              <p className="text-white/70">
                As those APIs mature and become available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div>
            <div className="font-semibold mb-1">Supscription</div>
            <div className="text-sm text-white/50">Built by Richie Flores</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-white/50">
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
