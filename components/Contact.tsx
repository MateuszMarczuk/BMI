"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Tutaj dodasz integrację z API do wysyłki emaili
    console.log("Form data:", data);

    // Symulacja wysyłki
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+48 123 456 789",
      link: "tel:+48123456789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "kontakt@szalunkipro.pl",
      link: "mailto:kontakt@szalunkipro.pl",
    },
    {
      icon: MapPin,
      title: "Obszar działania",
      content: "Warszawa, Lublin, Siedlce i okolice",
      link: null,
    },
  ];

  return (
    <section id="kontakt" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">Skontaktuj się z nami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami - odpowiemy
              najszybciej jak to możliwe!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Godziny otwarcia</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span className="font-semibold">7:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="font-semibold">8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="font-semibold">Zamknięte</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm">
                  <strong>Wsparcie techniczne 24/7</strong>
                  <br />
                  Dla pilnych spraw dostępny całą dobę
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dziękujemy za kontakt!
                  </h3>
                  <p className="text-gray-600">
                    Wiadomość została wysłana. Skontaktujemy się wkrótce.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      {...register("name", { required: "To pole jest wymagane" })}
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Jan Kowalski"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email jest wymagany",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Nieprawidłowy adres email",
                          },
                        })}
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="jan@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        {...register("phone", {
                          required: "Telefon jest wymagany",
                        })}
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="+48 123 456 789"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Firma (opcjonalnie)
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Nazwa firmy"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Wiadomość jest wymagana",
                      })}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Opisz swoje potrzeby..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>Wyślij wiadomość</span>
                    <Send size={18} />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Pola wymagane
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
