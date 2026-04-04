import { CheckCircle2 } from "lucide-react";
import appLogo from "../../images/app-logo.png";
import mainLight from "../../images/main_light.png";
import dashboardLight from "../../images/dashboard_light.png";
import cancelLight from "../../images/cancel_light.png";
import addNewLight from "../../images/addNew_light.png";
import SiteFooter from "./components/SiteFooter.tsx";

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
          <nav className="flex items-center">
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
            All your subscriptions, in one place. Know what you&apos;re paying,
            when it renews, and what to cancel.
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
                Fast, focused, and native. Built for the Mac from the ground up
                — no web wrappers, no bloat.
              </p>
              <div className="space-y-4">
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
                    <div className="font-medium mb-1">Native Mac interface</div>
                    <div className="text-sm text-white/60">
                      Built to feel at home on macOS.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">No web wrapper</div>
                    <div className="text-sm text-white/60">
                      Fast, direct, and made for the desktop.
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
                Keep track of upcoming renewals, subscriptions to revisit, and
                what&apos;s worth canceling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Renewal reminders</div>
                    <div className="text-sm text-white/60">
                      See upcoming charges before they hit.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">To Cancel list</div>
                    <div className="text-sm text-white/60">
                      Keep track of subscriptions you may want to drop.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Due dates at a glance</div>
                    <div className="text-sm text-white/60">
                      Know what needs attention next.
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
                Easy to keep up to date
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Add subscriptions in a few seconds, keep them up to date, and
                quickly see what&apos;s worth canceling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Quick to add</div>
                    <div className="text-sm text-white/60">
                      Enter a subscription and move on.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Easy to use</div>
                    <div className="text-sm text-white/60">
                      Simple enough to keep current.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#FF2D6B] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium mb-1">Know what to cancel</div>
                    <div className="text-sm text-white/60">
                      See what&apos;s still worth paying for.
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

      <SiteFooter />
    </div>
  );
}
