"use client";

import React from "react";
import { ArrowDownLeft, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface CtaSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function CtaSection({ onPrimaryClick }: CtaSectionProps) {
  return (
    <section className="relative bg-[var(--color-background)] py-14 md:py-20 text-right dir-rtl overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-neutral-900 p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl border border-neutral-800"
        >
          {/* تأثير نمط خلفية منقط فاخر */}
          <div 
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" 
            aria-hidden="true"
          />
          
          {/* توهج برتقالي خفيف بالخلفية للتركيز */}
          <div 
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" 
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-600/15 blur-3xl pointer-events-none" 
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            
            {/* الشارة الرسمية */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              <span>// حماية حقوقك أمانتنا //</span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              لا تتنازل عن حقك.. وثّق شكواك الآن بأسلوب رسمّي ومعتمد
            </h2>

            {/* النص الفرعي */}
            <p className="text-xs sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
              خطوات بسيطة وسريعة لتقديم كافة التفاصيل والمستندات للحفاظ على حقوقك التجارية ومتابعتها بأعلى معايير السرية.
            </p>

            {/* الزر الرئيسي */}
            <div className="pt-3 flex justify-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group inline-flex items-center gap-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold pl-2 pr-6 py-2.5 sm:py-3 text-xs sm:text-base transition-all duration-200 shadow-xl shadow-orange-600/20"
              >
                <span>ابدأ تقديم الشكوى الآن</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                  <ArrowDownLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </span>
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}