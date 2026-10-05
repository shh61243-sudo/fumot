"use client";

import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HelpCircle, ChevronDown, ArrowDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

export const faqPreview: FaqItem[] = [
  {
    q: "كيف تعمل منصة حماية المستهلك لتقديم الشكاوى؟",
    a: "تتيح لك المنصة تقديم بيانات شكواك والوثائق الداعمة بسهولة. يقوم فريقنا بمراجعتها، توثيقها برقم مرجعي، ثم مخاطبة الشركة المعنية لمتابعة التوصل إلى حل إيجابي.",
  },
  {
    q: "هل خدمة تقديم الشكوى مجانية للمستهلكين في الإمارات؟",
    a: "نعم، خدمة توثيق وتقديم ومتابعة الشكاوى مجانية بالكامل لجميع المستهلكين والمتعاملين داخل دولة الإمارات العربية المتحدة.",
  },
  {
    q: "ما الدور الذي تقوم به المنصة لحل المشكلة مع الشركة؟",
    a: "نقوم بتوثيق الشكوى قانونياً، إصدار الرقم المرجعي، ومخاطبة إدارة المنشأة التجارية للوصول إلى تسوية عادلة تحمي حقوق المستهلك وفق الأنظمة المتبعة.",
  },
];

export function FaqSection() {
  // فتح السؤال الأول تلقائياً
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[var(--color-background)] py-14 md:py-20 text-neutral-900 border-b border-neutral-100 dir-rtl text-right overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* الجانب الأيمن: العنوان والوصف والزر */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3.5 py-1 text-xs font-semibold text-orange-700 border border-orange-200/50">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>// الأسئلة الشائعة //</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              استفسارات يتكرر <br className="hidden sm:inline" />
              طرحها باستمرار
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              إليك إجابات لأبرز الأسئلة المتعلقة بتقديم وتوثيق الشكاوى التجارية للمستهلكين داخل الإمارات.
            </p>

            <div className="pt-2">
              <Link
                to="/faq"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 hover:bg-black text-white font-medium pl-2 pr-5 py-2 text-xs sm:text-sm transition-all duration-200 shadow-md active:scale-95"
              >
                <span>عرض جميع الأسئلة</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                  <ArrowDownLeft className="h-3.5 w-3.5 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* الجانب الأيسر: قائمة الأسئلة التفاعلية (Accordion) */}
          <div className="lg:col-span-8 space-y-3">
            {faqPreview.map((f, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-[1.5rem] border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-orange-500/40 shadow-lg shadow-orange-500/5"
                      : "bg-neutral-50/80 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                  }`}
                >
                  {/* زر السؤال */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right font-extrabold text-neutral-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span className={isOpen ? "text-orange-600 transition-colors" : ""}>
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-600 text-white border-orange-600 rotate-180"
                          : "bg-white text-neutral-500 border-neutral-200"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {/* الإجابة المنسدلة */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-neutral-600 border-t border-neutral-100 pt-3">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}