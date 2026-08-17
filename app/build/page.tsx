import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Build Journal — Adarsh Subrahmannyan',
  description: 'A personal log by Adarsh Subrahmannyan — documenting the process of building ideas into software.',
};

export default function BuildPage() {
  return (
    <div className="bj-root">
      <div className="grain" />

      <header className="bj-header">
        <Link href="/" className="bj-back">← Portfolio</Link>
        <span className="bj-brand">AS<span>.</span></span>
      </header>

      <main className="bj-main">

        <section className="bj-hero">
          <p className="bj-label">Build Journal</p>
          <h1 className="bj-name">Adarsh Subrahmannyan</h1>
          <p className="bj-sub">
            A personal log — not a showcase.<br />
            What I&apos;m building, how I&apos;m building it, and everything in between.
          </p>
        </section>

        <div className="bj-divider" />

        <section className="bj-empty">
          <p className="bj-empty-label">// no entries yet</p>
          <p className="bj-empty-text">
            Something is in progress. I&apos;ll start writing here once there&apos;s something worth reading.
          </p>
        </section>

      </main>

      <footer className="bj-footer">
        <span>Adarsh Subrahmannyan · 2026</span>
        <Link href="/">Back to portfolio</Link>
      </footer>
    </div>
  );
}
