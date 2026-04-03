import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Github, ArrowLeft } from "lucide-react";
import appIcon from "../../images/app-logo.png";
import mainLight from "../../images/main_light.png";
import mainDark from "../../images/main_dark.png";
import dashboardLight from "../../images/dashboard_light.png";
import cancelLight from "../../images/cancel_light.png";
import addNewLight from "../../images/addNew_light.png";
import eisenhowerMatrix from "../../images/Eisenhower-Matrix.png";

export default function CaseStudy() {
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

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={appIcon}
              alt="Supscription"
              className="w-7 h-7 rounded-lg"
            />
            <h1 className="text-xl font-semibold">Supscription</h1>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to site
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
      </header>

      {/* Hero */}
      <section className="relative px-6 py-18 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1A0050] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF2D6B] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="text-sm text-white/50 mb-4">Product Case Study</div>
          <h2 className="text-6xl font-bold mb-8 leading-tight">
            Building a focused subscription tracker for macOS
          </h2>
          <div className="grid grid-cols-3 gap-8 text-sm mb-16">
            <div>
              <div className="text-white/50 mb-2">Role</div>
              <div>Product · Design · Engineering</div>
            </div>
            <div>
              <div className="text-white/50 mb-2">Platform</div>
              <div>macOS (Swift, SwiftUI, SwiftData)</div>
            </div>
            <div>
              <div className="text-white/50 mb-2">Timeline</div>
              <div>4 months → Launched March, 2026</div>
            </div>
          </div>

          <div className="relative">
            <img
              src={mainLight}
              alt="Supscription interface"
              className="w-full rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Problem Space */}
      <section className="px-6 py-6">
        <div className="max-w-[900px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-8">Problem Framing</h3>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Most subscription tracking tools are buried inside larger
              financial products—budgeting apps, banking dashboards, or full
              finance suites. That adds friction to a task that should be
              simple: knowing what you're paying for and when it renews.
            </p>
            <p>This app isolates that one job and does it well.</p>
            <p>
              The target user already knows their subscriptions. They don't need
              categorization, analytics, or financial advice. They need:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>a single place to view everything</li>
              <li>timely reminders before charges hit</li>
              <li>a way to flag subscriptions they're considering canceling</li>
            </ul>
            <p>
              Anything beyond that risks getting in the way of the core
              workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Product Decisions */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent via-[#1A0050]/5 to-transparent">
        <div className="max-w-[900px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-8">Product Decisions</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#FF2D6B]">
                Why minimal
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                The focus was getting the core loop right: log a subscription →
                know when it renews → act on it.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Everything else was intentionally deferred. Shipping a smaller,
                complete experience allowed me to validate whether the core
                workflow is valuable before expanding scope. Adding features too
                early increases complexity without proving demand.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#FF2D6B]">
                Why no accounts
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Adding authentication would introduce friction at the exact
                moment a user opens the app—increasing drop-off before they
                experience any value.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                There was no user benefit that justified that tradeoff. This
                wasn't a business decision, it was a UX decision: reduce
                time-to-value as much as possible. It likely limits monetization
                paths, but improving initial adoption was the higher priority.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#FF2D6B]">
                Why local-first
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Using SwiftData enabled a local-first architecture with no
                backend, no sync logic, and no external dependencies. This
                reduced infrastructure overhead, failure points, and
                time-to-ship.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                It also aligned with the product goal of simplicity—users don't
                need accounts, and their data stays on-device. iCloud sync is a
                natural extension, but only after validating that the core
                workflow is worth scaling.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#FF2D6B]">
                Why macOS first
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                macOS was a natural starting point given my background and the
                type of user I was targeting—users who are comfortable paying
                for focused, utility-driven apps.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                In hindsight, starting with iOS would likely have improved
                discoverability and reach. That's a tradeoff I understood more
                clearly after shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-16">Engineering Decisions</h3>

          {/* Feature 1 */}
          <div className="grid grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div className="text-sm text-[#FF2D6B] mb-4">
                01 — Architecture
              </div>
              <h4 className="text-3xl font-semibold mb-6">Apple frameworks</h4>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The app is built entirely with Apple-native frameworks: SwiftUI,
                SwiftData, Swift Charts, and UserNotifications. This reduced
                integration risk and long-term maintenance overhead.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Instead of building infrastructure, I could focus on product
                behavior and reliability using tools that are already
                well-supported and optimized for the platform.
              </p>
            </div>
            <img
              src={mainLight}
              alt="Three-panel interface"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-2 gap-16 items-start mb-24">
            <img
              src={dashboardLight}
              alt="Dashboard"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
            <div>
              <div className="text-sm text-[#FF2D6B] mb-4">
                02 — Data modeling
              </div>
              <h4 className="text-3xl font-semibold mb-6">
                Intentionally flat structure
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The data model is intentionally flat and maps directly to the
                user's mental model. billingDate drives urgency and sorting.
                billingFrequency drives recurring scheduling. remindToCancel and
                cancelReminderDate live on the subscription itself.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                This avoids unnecessary abstraction and keeps the system easy to
                reason about. Introducing additional entities at this stage
                would increase complexity without improving clarity or
                flexibility.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div className="text-sm text-[#FF2D6B] mb-4">
                03 — State management
              </div>
              <h4 className="text-3xl font-semibold mb-6">ViewModel pattern</h4>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Each view owns its state through a dedicated ViewModel. This
                isolates responsibilities, simplifies reasoning about state
                changes, and enables unit testing without requiring full UI
                rendering.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                It's a straightforward approach that scales well for the current
                scope without introducing architectural overhead.
              </p>
            </div>
            <img
              src={cancelLight}
              alt="To Cancel watchlist"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-2 gap-16 items-start">
            <img
              src={addNewLight}
              alt="Add subscription"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
            <div>
              <div className="text-sm text-[#FF2D6B] mb-4">
                04 — Edge case handling
              </div>
              <h4 className="text-3xl font-semibold mb-6">
                Notification scheduling
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Notification scheduling turned out to be more complex than
                expected. Early implementations caused billing reminders and
                cancellation reminders to overwrite each other due to shared
                identifiers.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                The fix was introducing identifier namespacing—billing reminders
                and cancellation reminders are scoped separately, so updates to
                one type never affect the other. This was a small but important
                reliability issue that required debugging and careful handling
                to resolve correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing and Tradeoffs */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent via-[#FF2D6B]/5 to-transparent">
        <div className="max-w-[1200px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-16">Testing and Tradeoffs</h3>

          <div className="space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <h4 className="text-2xl font-semibold mb-4">Unit testing</h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                There are 31 unit tests covering billing calculations across all
                frequency types, date edge cases, and notification scheduling.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                One of these tests caught a real scheduling bug that had existed
                for weeks and would have shipped unnoticed. That alone justified
                the investment in test coverage.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <h4 className="text-2xl font-semibold mb-4">
                Intentional exclusions
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Features like iCloud sync, CSV import, and iOS companion app
                were not omitted due to time or skill constraints—they were
                intentionally excluded to keep the initial version focused on
                validating the core workflow.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Every additional feature introduces more complexity, more
                surface area for bugs, and more assumptions about user behavior.
                The goal of v1 was to prove that the core interaction—tracking
                and acting on subscriptions—is valuable on its own.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <h4 className="text-2xl font-semibold mb-4">
                Scoping with an Eisenhower Matrix
              </h4>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <img
                  src={eisenhowerMatrix}
                  alt="Feature prioritization"
                  className="w-full rounded-lg border border-white/10"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg text-white/80 leading-relaxed">
                    I mapped every feature idea to urgency and importance.
                    Drag-and-drop, iCloud sync, CSV export, spending
                    forecasts—all got deferred.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mt-4">
                    The matrix kept me from overbuilding. If it wasn't urgent
                    and important for the first release, it went on the roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="px-6 py-16">
        <div className="max-w-[900px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-12">Technical implementation</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-[#FF2D6B] pl-6">
              <h4 className="text-xl font-semibold mb-3">SwiftUI</h4>
              <p className="text-white/80 leading-relaxed">
                Declarative UI, automatic state management, built-in
                accessibility. NavigationSplitView handled the three-panel
                layout. @State and @Binding managed component state. No UIKit
                bridging.
              </p>
            </div>

            <div className="border-l-2 border-[#FF2D6B] pl-6">
              <h4 className="text-xl font-semibold mb-3">SwiftData</h4>
              <p className="text-white/80 leading-relaxed">
                @Model macro for entities, @Query for fetching, relationships
                defined with properties. Persistence was automatic. Migration
                path built in for when iCloud sync gets added.
              </p>
            </div>

            <div className="border-l-2 border-[#FF2D6B] pl-6">
              <h4 className="text-xl font-semibold mb-3">Swift Charts</h4>
              <p className="text-white/80 leading-relaxed">
                Bar charts, line charts, summary statistics. Passed SwiftData
                query results directly. Charts updated reactively when data
                changed.
              </p>
            </div>

            <div className="border-l-2 border-[#FF2D6B] pl-6">
              <h4 className="text-xl font-semibold mb-3">UserNotifications</h4>
              <p className="text-white/80 leading-relaxed">
                UNUserNotificationCenter for scheduling reminders. Two
                notification types with separate identifier namespaces (upcoming
                renewals, past-due renewals). Edge case handling for permissions
                and past dates.
              </p>
            </div>

            <div className="border-l-2 border-[#FF2D6B] pl-6">
              <h4 className="text-xl font-semibold mb-3">URLSession</h4>
              <p className="text-white/80 leading-relaxed">
                Logo fetching from company domains. Clearbit API for fallback.
                Local caching to avoid repeated requests. Graceful degradation
                when logos aren't available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent via-[#1A0050]/5 to-transparent">
        <div className="max-w-[900px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-12">Reflection</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-[#FF2D6B]">
                The Dashboard wasn't part of the original plan
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                The initial scope focused entirely on the tracking loop. But at
                a certain point the question shifted from "Does this work?" to
                "Is this valuable enough to ship?"
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                The Dashboard answered that. It transformed a list of entries
                into something more meaningful by showing monthly spending and
                category breakdowns. That made the app feel useful beyond simple
                tracking.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4 text-[#FF2D6B]">
                What I would validate next
              </h4>
              <p className="text-lg text-white/80 leading-relaxed">
                Is whether the "To Cancel" watchlist reflects real user
                behavior, or whether it's an assumption I introduced. That
                distinction matters—features based on incorrect assumptions tend
                to go unused.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4 text-[#FF2D6B]">
                Building a focused product is harder than building a large one
              </h4>
              <p className="text-lg text-white/80 leading-relaxed">
                Every decision to exclude a feature requires confidence that
                what remains is sufficient. Shipping v1 proved that the core
                experience holds on its own—and clarified what should (and
                shouldn't) come next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-12">Outcome</h3>

          <div className="grid grid-cols-4 gap-6 mb-12">
            <img
              src={mainLight}
              alt="Main"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
            <img
              src={dashboardLight}
              alt="Dashboard"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
            <img
              src={cancelLight}
              alt="To Cancel"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
            <img
              src={addNewLight}
              alt="Add New"
              className="w-full rounded-xl border border-white/10 shadow-xl"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1A0050]/20 to-[#1A0050]/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-[#FF2D6B] mb-2">
                March, 2026
              </div>
              <div className="text-white/70">Launched on Mac App Store</div>
            </div>
            <div className="bg-gradient-to-br from-[#FF2D6B]/20 to-[#FF2D6B]/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-[#FF2D6B] mb-2">31</div>
              <div className="text-white/70">
                Unit tests covering core logic
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1A0050]/20 to-[#1A0050]/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-[#FF2D6B] mb-2">0</div>
              <div className="text-white/70">Third-party dependencies</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold mb-6">What shipped</h4>
            <div className="grid grid-cols-2 gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Full light and dark
                mode support
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Dashboard with Swift
                Charts
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> "To Cancel" watchlist
                with urgency badges
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Inline editing in
                detail view
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Drag-and-drop category
                management
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Right-click context
                menus
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Smart reminder
                notifications
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Automatic logo
                fetching
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF2D6B]">•</span> Local-first data
                storage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode */}
      <section className="px-6 py-6">
        <div className="max-w-[1200px] mx-auto fade-in">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={mainDark} alt="Dark mode" className="w-full" />
            <div className="absolute inset-8 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent flex items-end justify-center pb-12">
              <p className="text-2xl font-semibold">
                Full light and dark mode support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations and Future Thinking */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent via-[#FF2D6B]/5 to-transparent">
        <div className="max-w-[900px] mx-auto fade-in">
          <h3 className="text-4xl font-bold mb-12">
            Limitations and Future Thinking
          </h3>

          <div className="space-y-8 mb-12">
            <p className="text-lg text-white/80 leading-relaxed">
              The most obvious limitation is lack of cross-device access. iCloud
              sync is a natural solution, but only after confirming that users
              actually need it.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Expanding to iOS and iPad is the next logical step. SwiftUI allows
              reuse of business logic and data structures, though the UI will
              need to be rethought for each platform.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              A longer-term direction is reducing manual input by deriving more
              value from existing data—surfacing insights or patterns without
              requiring additional user effort. The goal isn't to add features,
              but to reduce friction in the existing workflow.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1A0050]/20 to-transparent border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="text-lg font-semibold mb-2">iCloud Sync</h4>
              <p className="text-sm text-white/70">
                Multi-device support with CloudKit
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF2D6B]/20 to-transparent border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg font-semibold mb-2">iOS & iPad</h4>
              <p className="text-sm text-white/70">
                Cross-platform expansion with shared logic
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A0050]/20 to-transparent border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-lg font-semibold mb-2">Smart Insights</h4>
              <p className="text-sm text-white/70">
                Reduce friction by surfacing patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div>
            <div className="font-semibold mb-1">Richie Flores</div>
            <div className="text-sm text-white/50">
              Product · Design · Engineering
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Back to site
            </Link>
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              View code
            </a>
          </div>
        </div>
      </footer>

      <style>{`
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
      `}</style>
    </div>
  );
}
