import { motion } from "framer-motion";

export function HealthRings() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Glow Center */}
      <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Outer Ring - Activity/Movement */}
      <svg className="absolute w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-200 dark:text-slate-800 opacity-20" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient1)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.75 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          style={{ pathLength: 0.75 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Middle Ring - Vitals/Sleep */}
      <svg className="absolute w-[80%] h-[80%] rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" className="text-slate-200 dark:text-slate-800 opacity-20" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient2)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.85 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner Ring - Cognitive/Stress */}
      <svg className="absolute w-[60%] h-[60%] rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" className="text-slate-200 dark:text-slate-800 opacity-20" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient3)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.6 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1.1 }}
        />
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99F6E4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Score/AI Status */}
      <motion.div 
        className="absolute w-[35%] h-[35%] bg-white dark:bg-slate-900 rounded-full shadow-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <div className="text-3xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">92</div>
        <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Vytal Score</div>
        
        {/* Floating AI Status Indicator */}
        <div className="absolute -top-2 right-2 flex items-center gap-1 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-full">
           <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
           <span>Live</span>
        </div>
      </motion.div>
      
      {/* Floating Insights Cards (Decorative) */}
      <motion.div 
        className="absolute -right-10 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 hidden md:block"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-teal-500" />
           <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Sleep optimal</span>
        </div>
      </motion.div>
      
       <motion.div 
        className="absolute -left-4 bottom-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 hidden md:block"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-orange-400" />
           <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Hydration low</span>
        </div>
      </motion.div>
    </div>
  );
}
