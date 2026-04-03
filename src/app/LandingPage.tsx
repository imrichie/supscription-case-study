import { Link } from "react-router";
import { Github, CheckCircle2 } from "lucide-react";
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
            <Link
              to="/case-study"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Case Study
            </Link>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-lg"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(to right, rgba(255,45,107,0.5), rgba(26,0,80,0.5)) border-box",
              }}
            >
              Download — $4.99
            </a>
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
            All your subscriptions, in one place. Know what you're paying, when
            you're billed, and what to cancel. Yours forever.
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
              <h2 className="text-4xl font-bold mb-6">
                Feels like it belongs on your Mac
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Fast, focused, and native. Built for macOS from the ground up —
                no web wrappers, no bloat.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Opens instantly</div>
                    <div className="text-sm text-white/60">
                      No loading screens. It's just there.
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
                      Every screen, automatically.
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
                      Your data stays yours
                    </div>
                    <div className="text-sm text-white/60">
                      Nothing leaves your Mac. No accounts, no syncing.
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
                    <div className="font-medium mb-1">Organized your way</div>
                    <div className="text-sm text-white/60">
                      Group by category, sorted by what's due soonest.
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
                Log it in seconds, forget about it
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Name it, set the price and billing date, and you're done.
                Company logos pull in automatically. No manual entry, no hunting
                around.
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
                      Pulls company logos.
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
                      Monthly, yearly, or whatever schedule you need.
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

      {/* Download */}
      <section id="download" className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            One-time purchase. Yours forever.
          </h2>
          <div className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF2D6B] to-[#1A0050] bg-clip-text text-transparent">
            $4.99
          </div>
          <p className="text-xl text-white/60 mb-12">
            No subscription to track your subscriptions. Download from the Mac
            App Store.
          </p>
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
            <Link
              to="/privacy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">View code</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
