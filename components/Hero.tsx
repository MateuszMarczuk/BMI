"use client";

import { ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const benefits = [
    "Dostawa na całą Polskę wschodnią",
    "Profesjonalne doradztwo",
    "Konkurencyjne ceny",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Building2 size={20} />
              <span className="font-semibold">
                Profesjonalny wynajem szalunków
              </span>
            </div>

            <h1 className="heading-1 text-gray-900 mb-6">
              Nowoczesne{" "}
              <span className="text-primary">Szalunki Budowlane</span> dla
              Twojej Inwestycji
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Specjalizujemy się w wynajmie szalunków stropowych najwyższej
              jakości. Obsługujemy Warszawę, Lublin, Siedlce i całą Polskę
              wschodnią i centralną.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#kalkulator" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Oblicz koszt wynajmu</span>
                <ArrowRight size={20} />
              </a>
              <a href="#kontakt" className="btn-outline inline-flex items-center justify-center">
                Skontaktuj się z nami
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder for construction image */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 size={120} className="text-primary/40 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">
                      Profesjonalne szalunki<br />dla każdej budowy
                    </p>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Zrealizowanych projektów</div>
                </div>

                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-gray-600">Wsparcie techniczne</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
