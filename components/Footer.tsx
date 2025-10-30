"use client";

import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#o-nas", label: "O nas" },
    { href: "#uslugi", label: "Usługi" },
    { href: "#kalkulator", label: "Kalkulator" },
    { href: "#dlaczego-my", label: "Dlaczego my" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const services = [
    "Szalunki stropowe",
    "Szalunki ścienne (wkrótce)",
    "Szalunki do słupów (wkrótce)",
    "Szalunki mostowe (planowane)",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  SzalunkiPro
                </span>
                <span className="text-xs text-gray-400">
                  Profesjonalny wynajem
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Nowoczesne rozwiązania szalunkowe dla branży budowlanej. Obsługujemy
              Warszawę, Lublin, Siedlce i całą Polskę wschodnią.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nasze usługi</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <a
                    href="tel:+48123456789"
                    className="hover:text-primary transition-colors"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <a
                    href="mailto:kontakt@szalunkipro.pl"
                    className="hover:text-primary transition-colors"
                  >
                    kontakt@szalunkipro.pl
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  Warszawa, Lublin, Siedlce
                  <br />
                  Polska Wschodnia
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SzalunkiPro. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
