"use client";
import { motion } from "framer-motion";

const metrics = [
  { number: "3+", label: "Years Shipping Frontend", icon: "🚀" },
  { number: "20+", label: "Production Features Deployed", icon: "✅" },
  { number: "4", label: "Live Projects in Portfolio", icon: "🎯" },
  { number: "Top 5", label: "Zuri Bootcamp (132 teams)", icon: "🏆" },
];

export default function Results() {
  return (
    <section className="w-full flex flex-col items-center gap-5 bg-gradient-to-r from-[#147efb]/5 to-blue-50 py-16 px-6">
      <h2 className="w-fit text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-6">
        Track Record
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all"
          >
            <div className="text-4xl mb-3">{m.icon}</div>
            <div className="text-3xl font-extrabold text-[#147efb] mb-2">
              {m.number}
            </div>
            <div className="text-sm text-gray-600 font-medium">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
