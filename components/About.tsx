"use client";

import { motion } from "framer-motion";
import { Award, Users, Truck, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Doświadczenie",
      description: "Lata doświadczenia w branży budowlanej i wynajmie szalunków",
    },
    {
      icon: Users,
      title: "Profesjonalizm",
      description: "Wykwalifikowany zespół doradców technicznych",
    },
    {
      icon: Truck,
      title: "Szybka dostawa",
      description: "Sprawna logistyka i terminowa dostawa na teren budowy",
    },
    {
      icon: Shield,
      title: "Gwarancja jakości",
      description: "Tylko najwyższej jakości, regularnie serwisowany sprzęt",
    },
  ];

  return (
    <section id="o-nas" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">Kim jesteśmy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy dynamicznie rozwijającą się firmą specjalizującą się w
              profesjonalnym wynajmie szalunków budowlanych. Nasza misja to
              dostarczanie najwyższej jakości rozwiązań dla branży budowlanej.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-3 text-gray-900 mb-4">
              Obsługujemy całą Polskę wschodnią i centralną
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Naszym głównym obszarem działania są województwa: mazowieckie,
              lubelskie oraz okolice Siedlec. Dzięki sprawnej logistyce
              zapewniamy terminową dostawę i odbiór sprzętu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-primary">
              <span>🏙️ Warszawa</span>
              <span>🏛️ Lublin</span>
              <span>🏘️ Siedlce</span>
              <span>➕ i więcej</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
