"use client";

import React from "react";
import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  ArrowUpLeft,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل والنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

export function CategoriesSection() {
  return (
    <section className="relative bg-[var(--color-background)] py-14 md:py-20 text-neutral-900 border-b border-neutral-100 dir-rtl text-right overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section / العنوان والوصف الرئيسي */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-10 md:mb-14">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3.5 py-1 text-xs font-semibold text-orange-700 border border-orange-200/50">
              // القطاعات المشمولة //
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-900">
              مجالات الشكاوى التجارية
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              نغطي مختلف القطاعات التجارية الخاصة لضمان توثيق صوتك وحماية حقوقك الشاملة وفق المعايير الرسمية.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-semibold text-neutral-400 bg-neutral-100 px-3 py-1.5 rounded-full">
              8 قطاعات رئيسية
            </span>
          </div>
        </div>

        {/* Cards Grid / شبكة البطاقات العصرية */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between rounded-[1.75rem] border border-neutral-200/80 bg-neutral-50/70 p-6 transition-all duration-300 hover:bg-white hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Header Card / الجزء العلوي من البطاقة (الأيقونة + السهم التفاعلي) */}
                <div className="flex items-center justify-between mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-neutral-800 shadow-sm border border-neutral-100 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600">
                    <c.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </div>

                  {/* سهم مؤشر ينشط عند الـ Hover */}
                  <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-neutral-100 group-hover:text-orange-600">
                    <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title & Description / العنوان والشرح */}
                <h3 className="text-base font-extrabold text-neutral-900 group-hover:text-orange-600 transition-colors duration-200">
                  {c.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-neutral-500 font-normal">
                  {c.desc}
                </p>
              </div>

              {/* خط ديكوري خطي أسفل كل بطاقة */}
              <div className="mt-6 pt-4 border-t border-neutral-200/50 flex items-center justify-between text-[11px] font-medium text-neutral-400">
                <span>تغطية شاملة</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-orange-500 transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}