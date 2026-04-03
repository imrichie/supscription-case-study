import { Link } from "react-router";
import { Shield, Lock, Cloud, Server, Trash2, Mail } from "lucide-react";
import appLogo from "../../images/app-logo.png";
import SiteFooter from "./components/SiteFooter.tsx";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={appLogo}
              alt="Supscription"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-semibold">Supscription</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Back to site
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1A0050] to-[#FF2D6B] rounded-2xl mb-6">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/50">Effective Date: March 2026</p>
        </div>

        <div className="bg-gradient-to-br from-[#1A0050]/20 to-[#FF2D6B]/10 border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <Lock size={24} className="text-[#FF2D6B]" />
            The Short Version
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Supscription does not collect, store, or share any personal data.
            Everything you enter into the app stays on your device.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Server size={24} className="text-[#FF2D6B]" />
              What We Don&apos;t Collect
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Supscription does not collect any personal information. There are
              no accounts, no sign-ins, no analytics, and no data sent to any
              server. Your subscription data never leaves your Mac.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Lock size={24} className="text-[#FF2D6B]" />
              What the App Does
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Supscription stores your subscription data locally on your device
              using Apple&apos;s SwiftData framework. The only network request
              the app makes is fetching company logos by domain name from a
              third-party logo service. No personal information is included in
              these requests.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Cloud size={24} className="text-[#FF2D6B]" />
              iCloud Sync
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Supscription offers optional iCloud sync to keep your
              subscriptions up to date across all your Apple devices signed into
              the same iCloud account.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0d1117] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 text-lg">
                  What syncs
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Subscription names, prices, billing dates, billing frequency,
                  categories, and any other subscription details you enter into
                  the app.
                </p>
              </div>

              <div className="bg-[#0d1117] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 text-lg">
                  Where your data lives
                </h3>
                <p className="text-white/70 leading-relaxed">
                  All synced data is stored in your personal iCloud account
                  using Apple&apos;s CloudKit service. Your data is never stored
                  on our servers.
                </p>
              </div>

              <div className="bg-[#0d1117] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 text-lg">
                  iCloud is optional
                </h3>
                <p className="text-white/70 leading-relaxed">
                  You can disable iCloud sync at any time in the app&apos;s
                  Settings. When disabled, your subscriptions are stored locally
                  on your device only.
                </p>
              </div>

              <div className="bg-[#0d1117] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 text-lg">
                  Apple&apos;s privacy practices
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Data synced via iCloud is subject to Apple&apos;s Privacy
                  Policy at{" "}
                  <a
                    href="https://www.apple.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF2D6B] hover:underline"
                  >
                    apple.com/privacy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Server size={24} className="text-[#FF2D6B]" />
              Third-Party Services
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Supscription uses{" "}
              <a
                href="https://img.logo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF2D6B] hover:underline font-medium"
              >
                img.logo.dev
              </a>{" "}
              to fetch company logos based on domain names you enter. Only the
              domain name is sent, not personal information, subscription data,
              or device identifiers.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Trash2 size={24} className="text-[#FF2D6B]" />
              Data Retention
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              All data is stored locally on your Mac. Deleting the app removes
              all associated data.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FF2D6B]/10 to-transparent border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Mail size={24} className="text-[#FF2D6B]" />
              Contact
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              If you have any questions about this privacy policy, reach out at{" "}
              <a
                href="mailto:rfloresc@icloud.com"
                className="text-[#FF2D6B] hover:underline font-medium"
              >
                rfloresc@icloud.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
