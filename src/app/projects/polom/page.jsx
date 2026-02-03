"use client";

import Link from "next/link";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

export default function PolomCaseStudy() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col gap-6">
          <span className="inline-block px-4 py-1.5 bg-[#147efb]/10 text-[#147efb] rounded-full text-sm font-semibold">
            Production Case Study
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            POLOM E-commerce Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            Multi-platform e-commerce system serving <strong>real users</strong>
            . I built and maintain four production apps: customer web/mobile,
            driver interface, admin dashboard, and branch manager console.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <Metric number="60%" label="fewer API calls" />
            <Metric number="40%" label="faster renders" />
            <Metric number="4" label="apps shipped" />
            <Metric number="20+" label="Maps screens" />
          </div>

          <div className="flex gap-3 pt-2">
            <PrimaryLink href="https://polomapp.rsvp/" label="Live Demo" />
            <OutlineLink href="/#polom-project" label="Back to Projects" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <Card>
          <h2 className="text-xl font-bold mb-2">Role & Scope</h2>
          <p className="text-gray-700">
            <strong>Frontend Engineer</strong> · Jan 2024–Present · Team of 5–8.
            Own web/mobile user interfaces, performance, data-layer strategy,
            Google Maps features, and shared component systems.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <PillList
            items={[
              "React",
              "Next.js",
              "React Native",
              "JavaScript",
              "Tailwind CSS",
              "TanStack Query",
              "Zustand",
              "Formik",
              "Google Maps SDK",
            ]}
          />
        </Card>

        <Card highlight>
          <h2 className="text-xl font-bold mb-2">Why it matters</h2>
          <p className="text-gray-700">
            Real customers, real transactions. Performance budgets, data
            correctness, and delivery accuracy directly impact conversion and
            customer support load.
          </p>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
        <div className="grid gap-6">
          <CSR title="State Management Migration" kpi="60% fewer API calls">
            <Item label="Challenge">
              150+ API calls per user session; no caching or dedupe.
            </Item>
            <Item label="Solution">
              Migrated to <strong>TanStack Query</strong> with a centralized
              cache, background refetch, and optimistic updates.
            </Item>
            <Item label="Result">
              Network chatter dropped, views feel instant, staleness handled
              safely.
            </Item>
          </CSR>

          <CSR title="Performance Optimization" kpi="3.2s → 1.9s TTI">
            <Item label="Challenge">
              Dashboard interaction was sluggish; heavy lists re-rendering.
            </Item>
            <Item label="Solution">
              <code>React.memo</code> on expensive lists, route code-splitting,
              and targeted <code>useMemo</code>/<code>useCallback</code>.
            </Item>
            <Item label="Result">
              ~40% faster loads; smoother scroll/interaction on low-end devices.
            </Item>
          </CSR>

          <CSR title="Shared Component Library" kpi="2,000+ LOC removed">
            <Item label="Challenge">
              4 apps with duplicate UI, diverging styles.
            </Item>
            <Item label="Solution">
              Built a Tailwind-based component library with variants and tokens.
            </Item>
            <Item label="Result">
              Consistent UX, faster features, easier defect fixes across apps.
            </Item>
          </CSR>

          <CSR title="Google Maps Integration" kpi="20+ Maps screens">
            <Item label="Challenge">
              Reliable address capture, routing, ETA, and delivery accuracy.
            </Item>
            <Item label="Solution">
              Integrated Autocomplete, Directions, Geocoding; fixed duplicate
              loader conflicts; debounced queries; defensive key scoping.
            </Item>
            <Item label="Result">
              Accurate ETAs, fewer delivery errors, smoother checkout flow.
            </Item>
          </CSR>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8">
        <CodeCard title="TanStack Query Defaults">
          {`const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});`}
        </CodeCard>

        {/* <CodeCard title="Memoized List Pattern">
          {`const OrderList = React.memo(function OrderList({ orders }) {
  return orders.map(o => <OrderItem key={o.id} order={o} />);
}, (prev, next) => prev.orders.length === next.orders.length);`}
        </CodeCard> */}

        <CodeCard title="Optimistic Update (orders)">
          {`const update = useMutation({
  mutationFn: updateOrder,
  onMutate: async (nextOrder) => {
    await qc.cancelQueries(['orders']);
    const prev = qc.getQueryData(['orders']);
    qc.setQueryData(['orders'], old =>
      old.map(o => o.id === nextOrder.id ? nextOrder : o)
    );
    return { prev };
  },
  onError: (_e, _vars, ctx) => qc.setQueryData(['orders'], ctx.prev),
});`}
        </CodeCard>

        <Card>
          <h3 className="text-lg font-bold mb-2">
            Security & Abuse Considerations
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              API usage guarded via React Query dedupe + server validation to
              prevent accidental floods.
            </li>
            <li>
              Google Maps keys restricted by domain/package; no client access to
              unrelated scopes.
            </li>
            <li>
              Input validation + debounced geocoding to avoid quota spikes.
            </li>
          </ul>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Impact</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li>4 production apps shipped and maintained</li>
          {/* <li>1,400+ businesses using the platform daily</li> */}

          <li>Passed Q & A review successfully</li>
          <li>~60% reduction in API calls across critical screens</li>
          <li>~40% improvement in load times</li>
          <li>2,000+ lines removed via component consolidation</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Learnings</h2>
        <ol className="list-decimal ml-5 text-gray-700 space-y-2">
          <li>
            State architecture beats scattered micro-optimizations, caching and
            dedupe pay compounding dividends.
          </li>
          <li>
            Measure before optimizing, Profiler surfaced the true hot paths.
          </li>
          <li>
            A shared library enforces UX quality and accelerates delivery.
          </li>
          <li>
            Real-time is brittle, fallbacks (polling, retries) keep UX stable.
          </li>
        </ol>

        <p className="mt-6 text-sm text-gray-500">
          Note: screenshots and deeper internals available on request; some
          details omitted for confidentiality.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-[#147efb] text-white rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold mb-3">Want more details?</h2>
          <p className="mb-6 opacity-90">
            Happy to walk through profiling results, component library
            structure, and Maps integration trade-offs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="mailto:atayeroclinton.ac@gmail.com"
              className="bg-white text-[#147efb] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>
            <Link
              href="/#polom-project"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="text-2xl font-extrabold text-[#147efb]">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Card({ children, highlight = false }) {
  return (
    <div
      className={
        "rounded-2xl p-6 border " +
        (highlight
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200")
      }
    >
      {children}
    </div>
  );
}

function PillList({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span
          key={i}
          className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function CSR({ title, kpi, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold">{title}</h3>
        {kpi && (
          <span className="text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded">
            {kpi}
          </span>
        )}
      </div>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Item({ label, children }) {
  return (
    <div className="text-gray-700">
      <span className="font-semibold">{label}: </span>
      <span>{children}</span>
    </div>
  );
}

function CodeCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-0 overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 text-sm font-semibold border-b border-gray-200">
        {title}
      </div>
      <pre className="p-4 text-sm bg-gray-900 text-gray-100 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function PrimaryLink({ href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-[#147efb] text-white px-5 py-3 font-semibold hover:bg-[#147efb]/90 transition shadow"
    >
      {label}
      <span aria-hidden>↗</span>
    </Link>
  );
}

function OutlineLink({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-3 font-semibold hover:border-[#147efb] hover:text-[#147efb] transition"
    >
      {label}
    </Link>
  );
}
