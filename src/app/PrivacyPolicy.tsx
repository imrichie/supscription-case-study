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

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] h-[16rem] bg-[#1A0050]/10 blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-20">
          <section className="mb-12 md:mb-14">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF2D6B]/12 text-[#FF2D6B]">
                <Shield size={16} />
              </span>
              Privacy and data handling
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-white/50">
              Effective Date: March 2026
            </p>
          </section>

          <section className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#1A0050]/14 via-white/[0.03] to-[#FF2D6B]/8 p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF2D6B]/12 text-[#FF2D6B]">
                <Lock size={20} />
              </span>
              The Short Version
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Supscription does not collect or share your personal data. Your
              data stays on your device unless you enable optional iCloud sync.
            </p>
          </section>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] divide-y divide-white/8 overflow-hidden">
            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Server size={20} />
                </span>
                What We Don&apos;t Collect
              </h2>
              <p className="text-lg text-white/78 leading-relaxed">
                Supscription does not collect personal information. There are
                no accounts, no sign-ins, no analytics, and no data stored on
                our servers.
              </p>
            </section>

            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Lock size={20} />
                </span>
                What the App Does
              </h2>
              <p className="text-lg text-white/78 leading-relaxed">
                Supscription stores your subscription data locally on your
                device using Apple&apos;s SwiftData framework. If you enable
                iCloud sync, your data is also stored in your personal iCloud
                account. The app also fetches company logos by domain name from
                a third-party logo service. No personal information is included
                in those requests.
              </p>
            </section>

            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Cloud size={20} />
                </span>
                iCloud Sync
              </h2>
              <p className="text-lg text-white/78 leading-relaxed mb-6">
                Supscription offers optional iCloud sync to keep your
                subscriptions up to date across your Apple devices signed into
                the same iCloud account.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#0d1117]/90 p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    What syncs
                  </h3>
                  <p className="text-white/68 leading-relaxed">
                    Subscription names, prices, billing dates, billing
                    frequency, categories, and any other subscription details
                    you enter into the app.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117]/90 p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Where your data lives
                  </h3>
                  <p className="text-white/68 leading-relaxed">
                    Synced data is stored in your personal iCloud account using
                    Apple&apos;s CloudKit service. Your data is not stored on
                    our servers.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117]/90 p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    iCloud is optional
                  </h3>
                  <p className="text-white/68 leading-relaxed">
                    You can turn off iCloud sync at any time in the app&apos;s
                    Settings. When it&apos;s off, your subscriptions stay on
                    your device only.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117]/90 p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Apple&apos;s privacy practices
                  </h3>
                  <p className="text-white/68 leading-relaxed">
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
            </section>

            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Server size={20} />
                </span>
                Third-Party Services
              </h2>
              <p className="text-lg text-white/78 leading-relaxed">
                Supscription uses{" "}
                <a
                  href="https://img.logo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF2D6B] hover:underline font-medium"
                >
                  img.logo.dev
                </a>{" "}
                to fetch company logos based on domain names you enter. Only
                the domain name is sent. No personal information, subscription
                data, or device identifiers are included.
              </p>
            </section>

            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Trash2 size={20} />
                </span>
                Data Retention
              </h2>
              <p className="text-lg text-white/78 leading-relaxed">
                Data stored on your device is removed when you delete the app.
                If iCloud sync is enabled, synced data remains in your iCloud
                account until it is removed there.
              </p>
            </section>

            <section className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-[#FF2D6B]">
                  <Mail size={20} />
                </span>
                Contact
              </h2>
              <p className="text-lg text-white/78 leading-relaxed">
                If you have any questions about this privacy policy, reach out
                at{" "}
                <a
                  href="mailto:rfloresc@icloud.com"
                  className="text-[#FF2D6B] hover:underline font-medium"
                >
                  rfloresc@icloud.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10 text-center text-sm text-white/45">
            Supscription is built by Ricardo Flores
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
