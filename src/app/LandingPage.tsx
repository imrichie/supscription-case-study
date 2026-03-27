export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Nav */}
      <section className="min-h-16 flex items-center border-b border-white/10 px-6">
        <p className="text-white/40 text-sm">Nav</p>
      </section>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-white/5">
        <p className="text-white/40 text-sm">Hero</p>
      </section>

      {/* Feature 1 */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 border-b border-white/5">
        <p className="text-white/40 text-sm">Feature 1</p>
      </section>

      {/* Feature 2 */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 border-b border-white/5">
        <p className="text-white/40 text-sm">Feature 2</p>
      </section>

      {/* Feature 3 */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 border-b border-white/5">
        <p className="text-white/40 text-sm">Feature 3</p>
      </section>

      {/* Pricing */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 border-b border-white/5">
        <p className="text-white/40 text-sm">Pricing</p>
      </section>

      {/* Footer */}
      <section className="min-h-24 flex items-center px-6">
        <p className="text-white/40 text-sm">Footer</p>
      </section>
    </div>
  );
}
