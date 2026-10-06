"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowDownLeft } from "lucide-react";
import { motion, useInView, animate, type Variants } from "framer-motion";

interface HeroProps {
  onPrimaryClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HeroSection({ onPrimaryClick }: HeroProps) {
  return (
    <div className="w-full h-auto lg:h-[calc(100vh-80px)] min-h-[600px] bg-[var(--color-background)] py-4 lg:py-6 dir-rtl text-right overflow-hidden flex flex-col justify-between">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 h-full flex flex-col justify-between gap-3 lg:gap-6">
        
        {/* ==========================================================================
            1. الجزء العلوي (أفقي دائماً flex-row على الموبايل واللابتوب بقمة واحدة)
           ========================================================================== */}
        <div className="flex flex-row items-start justify-between gap-2 sm:gap-6 lg:gap-8 shrink-0 w-full">
          
          {/* الجانب الأيمن: الشارة والعنوان الرئيسي (50% من المساحة) */}
          <div className="w-[48%] sm:w-1/2 space-y-1 sm:space-y-2">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-semibold tracking-wide text-orange-600 uppercase"
            >
              <span>// منصة مستقلة لتوثيق الشكاوى //</span>
            </motion.div>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-base sm:text-3xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight"
            >
              منصة حماية <br />
              المستهلك.
            </motion.h1>
          </div>

          {/* الجانب الأيسر: الوصف والأزرار على نفس السوية العلوية تماماً (50% من المساحة) */}
          <div className="w-[50%] sm:w-1/2 space-y-2 sm:space-y-3 pt-0.5">
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-neutral-600 text-[10px] sm:text-sm lg:text-base leading-snug sm:leading-relaxed"
            >
              منصة مستقلة وغير تابعة لأي جهة حكومية، متخصصة في حماية حقوق المستهلك وتوثيق البلاغات الرسمية ضد الشركات بطريقة منظمة وبأعلى درجات السرية.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-1.5 sm:gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-medium px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[9px] sm:text-sm transition-colors duration-200 shadow-md group"
              >
                <span>تقديم طلب توثيق</span>
                <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                  <ArrowDownLeft className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-white" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[9px] sm:text-sm font-semibold text-neutral-800 transition-colors duration-200"
              >
                دليل الإجراءات
              </motion.a>
            </motion.div>
          </div>

        </div>

        {/* ==========================================================================
            2. ديف الصورة المنفصل
           ========================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full flex-1 min-h-[160px] max-h-[360px] lg:max-h-[400px] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-neutral-100"
        >
          <img
            src="/hhj.jpg"
            alt="منصة حماية المستهلك"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* ==========================================================================
            3. قسم الإحصائيات والأرقام (ثابت بالأسفل)
           ========================================================================== */}
        <div className="shrink-0 pt-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-2 sm:mb-3"
          >
            <h3 className="text-xs sm:text-base font-bold text-neutral-900">
              الأرقام تتحدث عن نفسها
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 md:divide-x md:divide-x-reverse md:divide-neutral-200"
          >
            {/* بطاقة 1 */}
            <div className="text-center px-1 sm:px-2 space-y-0.5">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-orange-600 tracking-tight">
                <CountUp to={10000} prefix="+" duration={1.2} />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-neutral-500">
                بلاغ معالج بنجاح
              </p>
            </div>

            {/* بطاقة 2 */}
            <div className="text-center px-1 sm:px-2 space-y-0.5">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-orange-600 tracking-tight">
                <CountUp to={100} suffix="%" duration={1} />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-neutral-500">
                خدمة مجانية بالكامل
              </p>
            </div>

            {/* بطاقة 3 */}
            <div className="text-center px-1 sm:px-2 space-y-0.5">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-orange-600 tracking-tight">
                <CountUp to={24} suffix=" ساعة" duration={0.8} />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-neutral-500">
                سرعة المراجعة والتنفيذ
              </p>
            </div>

            {/* بطاقة 4 */}
            <div className="text-center px-1 sm:px-2 space-y-0.5">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-orange-600 tracking-tight">
                تأطير الشكوى
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-neutral-500">
                صياغة وتنظيم كامل
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}