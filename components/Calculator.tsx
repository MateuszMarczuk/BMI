"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Sparkles, Info } from "lucide-react";

export default function Calculator() {
  const [area, setArea] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [systemType, setSystemType] = useState<string>("ramowy");
  const [result, setResult] = useState<{
    total: number;
    daily: number;
    details: string;
  } | null>(null);

  const calculateRental = () => {
    const areaNum = parseFloat(area);
    const daysNum = parseInt(days);

    if (isNaN(areaNum) || isNaN(daysNum) || areaNum <= 0 || daysNum <= 0) {
      alert("Proszę wprowadzić poprawne wartości");
      return;
    }

    // Przykładowe stawki (do dostosowania)
    const rates: { [key: string]: number } = {
      ramowy: 2.5, // zł za m² dziennie
      tableowy: 3.2,
      podpory: 1.8,
    };

    const dailyRate = rates[systemType] || 2.5;
    const dailyCost = areaNum * dailyRate;
    const totalCost = dailyCost * daysNum;

    // Rabaty za dłuższy wynajem
    let discount = 0;
    if (daysNum >= 30) discount = 0.15;
    else if (daysNum >= 14) discount = 0.1;
    else if (daysNum >= 7) discount = 0.05;

    const finalTotal = totalCost * (1 - discount);

    setResult({
      total: finalTotal,
      daily: dailyCost,
      details: discount > 0 ? `Rabat ${discount * 100}% zastosowany` : "Brak rabatu",
    });
  };

  const getSystemName = (type: string) => {
    const names: { [key: string]: string } = {
      ramowy: "System Ramowy",
      tableowy: "System Tableowy",
      podpory: "Podpory Telescopowe",
    };
    return names[type] || type;
  };

  return (
    <section id="kalkulator" className="section-padding bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Sparkles size={20} />
                <span className="font-semibold">Kalkulator AI</span>
              </div>
              <h2 className="heading-2 text-gray-900 mb-4">
                Oblicz Koszt Wynajmu
              </h2>
              <p className="text-xl text-gray-600">
                Skorzystaj z naszego inteligentnego kalkulatora, aby szybko
                oszacować koszty wynajmu szalunków
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Powierzchnia */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Powierzchnia stropu (m²)
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="np. 150"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Okres wynajmu */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Okres wynajmu (dni)
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="np. 30"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Typ systemu */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Typ systemu szalunkowego
                </label>
                <select
                  value={systemType}
                  onChange={(e) => setSystemType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="ramowy">System Ramowy</option>
                  <option value="tableowy">System Tableowy</option>
                  <option value="podpory">Podpory Telescopowe</option>
                </select>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
              <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-blue-900">
                <strong>Wskazówka:</strong> Wynajem na dłuższy okres = większy
                rabat! Wynajem powyżej 7 dni: 5% rabatu, 14 dni: 10% rabatu, 30
                dni: 15% rabatu.
              </div>
            </div>

            {/* Przycisk oblicz */}
            <button
              onClick={calculateRental}
              className="w-full btn-primary flex items-center justify-center space-x-2 text-lg"
            >
              <CalcIcon size={22} />
              <span>Oblicz koszt wynajmu</span>
            </button>

            {/* Wyniki */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
              >
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-1">
                    Szacowany koszt wynajmu
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {result.total.toFixed(2)} zł
                  </div>
                  <div className="text-sm text-gray-600">{result.details}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-center border-t border-gray-300 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">Powierzchnia</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {area} m²
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Okres</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {days} dni
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">System</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {getSystemName(systemType)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#kontakt"
                    className="inline-block btn-secondary"
                  >
                    Zapytaj o szczegółową ofertę
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            * Podane ceny są orientacyjne. Ostateczna wycena zależy od
            szczegółów projektu i dostępności sprzętu.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
