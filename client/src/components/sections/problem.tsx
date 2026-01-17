import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Reactive healthcare is too late.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Most health apps tell you what happened yesterday. VytalCare tells you what might happen tomorrow so you can change it today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
            {/* Old Way */}
            <motion.div 
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-8 bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">The Standard Way</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Wait for Symptoms</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Ignore subtle body signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Condition worsens unnoticed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Require urgent medical intervention</span>
                </li>
              </ul>
            </motion.div>

            {/* Vytal Way */}
            <motion.div 
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-teal-900/10 border-2 border-teal-500/20 relative z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-8 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">The VytalCare Way</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Act on Signals</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                 <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>AI detects micro-changes in vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Receive early guidance & alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Prevent issues before they start</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
