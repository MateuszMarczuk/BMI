"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Headphones,
  DollarSign,
  Wrench,
  TrendingUp,
  FileCheck,
} from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Terminowość",
      description:
        "Gwarantujemy dostawę i odbiór sprzętu zgodnie z ustalonym harmonogramem budowy.",
    },
    {
      icon: Headphones,
      title: "Wsparcie 24/7",
      description:
        "Nasz zespół techniczny jest dostępny przez całą dobę, aby pomóc w każdej sytuacji.",
    },
    {
      icon: DollarSign,
      title: "Konkurencyjne Ceny",
      description:
        "Oferujemy najlepsze stawki wynajmu przy zachowaniu najwyższej jakości sprzętu.",
    },
    {
      icon: Wrench,
      title: "Doradztwo Techniczne",
      description:
        "Pomożemy dobrać odpowiednie rozwiązania szalunkowe dla Twojego projektu.",
    },
    {
      icon: TrendingUp,
      title: "Nowoczesne Rozwiązania",
      description:
        "Inwestujemy w najnowocześniejszy sprzęt i technologie wspomagające budowę.",
    },
    {
      icon: FileCheck,
      title: "Pełna Dokumentacja",
      description:
        "Kompleksowa dokumentacja techniczna, certyfikaty i instrukcje montażu.",
    },
  ];

  return (
    <section id="dlaczego-my" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">Dlaczego my?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wybierając SzalunkiPro, wybierasz partnera, który dba o sukces
              Twojego projektu budowlanego. Oto co nas wyróżnia:
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon
                      className="text-primary group-hover:text-white transition-colors duration-300"
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Zrealizowanych projektów</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Zadowolonych klientów</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Dostępność wsparcia</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
