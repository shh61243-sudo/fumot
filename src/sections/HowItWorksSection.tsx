"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, Building2, ShieldCheck } from "lucide-react";

export interface StepItem {
  n: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const steps: StepItem[] = [
  {
    n: "01",
    title: "تعبئة نموذج الشكوى",
    desc: "إدخال التفاصيل الأساسية والمشكلة وبيانات الشركة المعنية في دقائق.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    n: "02",
    title: "التدقيق المبدئي للطلب",
    desc: "يقوم الفريق بالتحقق من اكتمال البيانات والأوراق الثبوتية.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    n: "03",
    title: "إصدار رقم مرجعي ومخاطبة الجهة",
    desc: "تسجيل الشكوى رسمياً وإشعار الشركة بالمخالفة أو المشكلة.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    n: "04",
    title: "متابعة التسوية والحل",
    desc: "تلقي الإشعارات الفورية حول رد الشركة والحلول المقترحة.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="bg-neutral-50/60 py-16 md:py-24 text-neutral-900 border-y border-neutral-200/60 relative overflow-hidden"
    >
      {/* خلفية تجميلية بلمسة تدرج خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            العناوين الرئيسية
           ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center space-y-2"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100/60 px-3 py-1 rounded-full">
            خطوات عمل بسيطة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            آلية توثيق ومتابعة الشكاوى
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-medium leading-relaxed">
            آلية عمل شفافة تضمن متابعة حقك برقم مرجعي رسمي خطوة بخطوة.
          </p>
        </motion.div>

        {/* ==========================================
            شبكة الخطوات المتسلسلة
           ========================================== */}
        <div className="mt-12 md:mt-16 relative">
          
          {/* خط ربط أفقي ممتد على الشاشات الكبيرة (Desktop connector line) */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[2px] bg-gradient-to-l from-orange-200 via-neutral-200 to-orange-200 z-0" />

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((s, index) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* الجزء العلوي: الأيقونة والرقم */}
                <div className="flex items-center justify-between mb-4">
                  {/* شارة الأيقونة */}
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {s.icon}
                  </div>

                  {/* رقم الخطوة البارز */}
                  <span className="font-mono text-2xl sm:text-3xl font-black text-neutral-300 group-hover:text-orange-600/80 transition-colors duration-300">
                    {s.n}
                  </span>
                </div>

                {/* المحتوى النصي */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* شريط تحفيزي سفلي خفيف عند التمرير */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>الخطوة {s.n}</span>
                  <span>←</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}