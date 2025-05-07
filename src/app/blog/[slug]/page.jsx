import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";

export const metadata = {
  title: "Fixing Google Maps API Duplicate Loading Conflict",
  description:
    "How I resolved a conflict from loading Google Maps twice in a Next.js project.",
};

export default function Article() {
  return (
    <div className="w-full">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 py-10 ">
        <h1 className="text-xl font-semibold">
          Fixing Google Maps API Duplicate Loading Conflict
        </h1>
        <p className="text-sm text-gray-500 mb-5">
          Published on April 11, 2025
        </p>

        <p>
          During the development of the POLOM e-commerce platform, I integrated
          Google Places Autocomplete for the delivery address modal. I initially
          loaded the Google Maps JavaScript API in two places:
        </p>

        <ul>
          <li>
            In a <code>provider.tsx</code> for global script loading
          </li>
          <li>
            Inside a <code>useLoadGoogleMaps</code> hook within a shared
            component
          </li>
        </ul>

        <p>
          This redundancy caused a <strong>duplicate loading conflict</strong>.
          The Autocomplete and Directions APIs randomly failed due to race
          conditions or script collisions.
        </p>

        <h2 className="font-bold mt-5">🛠️ What I Did to Fix It</h2>

        <ol>
          <li>
            Removed the global script load in <code>provider.tsx</code>
          </li>
          <li>
            Centralized the logic inside <code>useLoadGoogleMaps</code> using
            dynamic loading
          </li>
          <li>
            Used <code>window.google?.maps</code> checks to ensure it's fully
            ready
          </li>
        </ol>

        <p>
          I also verified that my API key had the correct permissions and scoped
          the autocomplete binding to the correct input using{" "}
          <code>ref.current</code>.
        </p>

        <h2 className="font-bold mt-5">✅ Takeaway</h2>
        <p>
          Only load Google Maps once. If you're using it across components,
          abstract the script load into a hook or utility, and guard against
          loading it globally.
        </p>

        <h2 className="font-bold mt-5">🔐 Security Note</h2>
        <p>
          Restrict your API key by domain and services used (e.g., only Maps,
          Places, Directions). Avoid exposing full-access keys on the frontend.
        </p>
      </article>
      <Footer />
    </div>
  );
}
