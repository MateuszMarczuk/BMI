"use client";

import { motion } from "framer-motion";
import { Box, Building, Columns, Construction, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Box,
      title: "Szalunki Stropowe",
      description:
        "Nowoczesne systemy szalunków stropowych - nasza główna specjalizacja. Idealne do stropów monolitycznych w budownictwie mieszkaniowym i komercyjnym.",
      features: [
        "Systemy ramowe",
        "Systemy tableowe",
        "Podpory telescopowe",
        "Belki stropowe",
      ],
      available: true,
      badge: "Dostępne teraz",
    },
    {
      icon: Building,
      title: "Szalunki Ścienne",
      description:
        "Profesjonalne systemy do wykonywania ścian betonowych. Wkrótce w naszej ofercie - przygotowujemy się do rozszerzenia usług.",
      features: [
        "Szalunki wielkowymiarowe",
        "Systemy modularne",
        "Szalunki specjalne",
        "Akcesoria montażowe",
      ],
      available: false,
      badge: "Wkrótce",
    },
    {
      icon: Columns,
      title: "Szalunki do Słupów",
      description:
        "Specjalistyczne rozwiązania do wykonywania słupów o różnych przekrojach. Planowane rozszerzenie naszej oferty.",
      features: [
        "Szalunki okrągłe",
        "Szalunki kwadratowe",
        "Systemy regulowane",
        "Łączniki i akcesoria",
      ],
      available: false,
      badge: "Planowane",
    },
    {
      icon: Construction,
      title: "Szalunki Mostowe",
      description:
        "Zaawansowane systemy szalunkowe do konstrukcji mostowych i wiaduktów. W przygotowaniu dla większych projektów infrastrukturalnych.",
      features: [
        "Wózki podszalunkowe",
        "Szalunki deskowań",
        "Systemy nośne",
        "Doradztwo techniczne",
      ],
      available: false,
      badge: "W przygotowaniu",
    },
  ];

  return (
    <section id="uslugi" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">Nasze Usługi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy kompleksowy wynajem szalunków budowlanych. Rozpoczynamy
              od szalunków stropowych, a w najbliższych miesiącach planujemy
              dynamiczne rozszerzenie oferty.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  !service.available ? "opacity-90" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      service.available
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="heading-3 text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.available ? (
                  <a
                    href="#kontakt"
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    <span>Zapytaj o ofertę</span>
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <div className="text-gray-500 font-medium">
                    Bądź na bieżąco - wkrótce dostępne
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
