import { Link } from "react-router";
import { Download, Github, CheckCircle2 } from "lucide-react";
import appLogo from "../../images/app-logo.png";
import mainLight from "../../images/main_light.png";
import dashboardLight from "../../images/dashboard_light.png";
import cancelLight from "../../images/cancel_light.png";
import addNewLight from "../../images/addNew_light.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/supscription/id6760910809";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={appLogo}
              alt="Supscription"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-semibold">Supscription</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
            {/* <a
              href="#download"
              className="px-4 py-2 bg-gradient-to-r from-[#1A0050] to-[#FF2D6B] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </a> */}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Track subscriptions.
            <br />
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#1A0050] bg-clip-text text-transparent">
              Nothing else.
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Native macOS app built with Swift and SwiftUI. No bank linking, no
            accounts, no cloud sync. Just your subscriptions, locally tracked.
          </p>
          <div className="flex justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Main App Preview */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A0050]/20 to-[#FF2D6B]/20 blur-3xl"></div>
            <img
              src={mainLight}
              alt="Supscription main interface"
              className="relative w-full rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Feature 1 — Built the Apple way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built the Apple way</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                SwiftUI. SwiftData. Swift Charts. Zero third-party dependencies.
                Just Apple's frameworks doing what they do best.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">
                      Local-first architecture
                    </div>
                    <div className="text-sm text-white/60">
                      Your data stays on your Mac. Period.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Native performance</div>
                    <div className="text-sm text-white/60">
                      Instant launch. No loading screens.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Light and dark mode</div>
                    <div className="text-sm text-white/60">
                      Every screen. No exceptions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={dashboardLight}
                alt="Dashboard view"
                className="w-full rounded-xl border border-white/10 shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2 — Know what's coming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <div className="md:order-2">
              <h2 className="text-4xl font-bold mb-6">Know what's coming</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Smart reminders. Renewal tracking. A dedicated "To Cancel"
                watchlist for subscriptions you're ready to drop.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">
                      Intelligent notifications
                    </div>
                    <div className="text-sm text-white/60">
                      Get reminded before renewals hit.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Urgency badges</div>
                    <div className="text-sm text-white/60">
                      See what needs attention first.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">
                      Category organization
                    </div>
                    <div className="text-sm text-white/60">
                      Drag and drop to organize your way.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <img
                src={cancelLight}
                alt="To Cancel watchlist"
                className="w-full rounded-xl border border-white/10 shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3 — Add anything in seconds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Add anything in seconds
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Clean, focused forms. Smart date defaults. Automatic logo
                fetching. Just the information you actually need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Logo detection</div>
                    <div className="text-sm text-white/60">
                      Pulls company logos automatically.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Inline editing</div>
                    <div className="text-sm text-white/60">
                      Update details without leaving the view.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Custom frequencies</div>
                    <div className="text-sm text-white/60">
                      Monthly, yearly, or your own schedule.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={addNewLight}
                alt="Add subscription"
                className="w-full rounded-xl border border-white/10 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent via-[#1A0050]/5 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Built with Apple's frameworks
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            SwiftUI for interface. SwiftData for persistence. Swift Charts for
            analytics. UserNotifications for reminders. Zero dependencies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Swift */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
              <img
                src="https://cdn.simpleicons.org/swift"
                alt="Swift"
                className="w-10 h-10 mb-3"
              />
              <div className="font-medium">Swift</div>
            </div>
            {/* SwiftUI — Apple's blue diamond-grid icon */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mb-3"
              >
                <rect width="40" height="40" rx="9" fill="url(#swiftui-grad)" />
                <path
                  d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 2.4c5.301 0 9.6 4.299 9.6 9.6s-4.299 9.6-9.6 9.6S10.4 25.301 10.4 20s4.299-9.6 9.6-9.6z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M20 13.6a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 2.4a4 4 0 110 8 4 4 0 010-8z"
                  fill="white"
                  fillOpacity="0.7"
                />
                <circle cx="20" cy="20" r="2" fill="white" />
                <defs>
                  <linearGradient
                    id="swiftui-grad"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                  >
                    <stop stopColor="#1A8FE3" />
                    <stop offset="1" stopColor="#0F62CB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-medium">SwiftUI</div>
            </div>
            {/* SwiftData — teal database icon */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mb-3"
              >
                <rect
                  width="40"
                  height="40"
                  rx="9"
                  fill="url(#swiftdata-grad)"
                />
                <ellipse
                  cx="20"
                  cy="14"
                  rx="9"
                  ry="4"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M11 14v6c0 2.209 4.03 4 9 4s9-1.791 9-4v-6c0 2.209-4.03 4-9 4s-9-1.791-9-4z"
                  fill="white"
                  fillOpacity="0.7"
                />
                <path
                  d="M11 20v6c0 2.209 4.03 4 9 4s9-1.791 9-4v-6c0 2.209-4.03 4-9 4s-9-1.791-9-4z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <defs>
                  <linearGradient
                    id="swiftdata-grad"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                  >
                    <stop stopColor="#00B9A8" />
                    <stop offset="1" stopColor="#00897B" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-medium">SwiftData</div>
            </div>
            {/* Swift Charts — blue bar chart icon */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mb-3"
              >
                <rect width="40" height="40" rx="9" fill="url(#charts-grad)" />
                <rect
                  x="9"
                  y="22"
                  width="5"
                  height="10"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.5"
                />
                <rect
                  x="17.5"
                  y="15"
                  width="5"
                  height="17"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.75"
                />
                <rect
                  x="26"
                  y="9"
                  width="5"
                  height="23"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.95"
                />
                <defs>
                  <linearGradient
                    id="charts-grad"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                  >
                    <stop stopColor="#3B9EFF" />
                    <stop offset="1" stopColor="#0A6EDC" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-medium">Swift Charts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            One-time purchase. Yours forever.
          </h2>
          <p className="text-xl text-white/60 mb-12">
            No subscription to track your subscriptions. Download from the Mac
            App Store.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0d1117] rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            <Download size={24} />
            Download for macOS
          </a>
          <div className="mt-8 text-sm text-white/50">
            Requires macOS 15.1 or later
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={appLogo}
              alt="Supscription"
              className="w-6 h-6 rounded-lg"
            />
            <div>
              <div className="text-sm font-medium">Supscription</div>
              <div className="text-xs text-white/50">
                Built by Ricardo Flores
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/case-study"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Case Study
            </Link>
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
