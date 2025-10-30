"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

export default function Regions() {
  const regions = [
    {
      city: "Warszawa",
      province: "Mazowieckie",
      description: "Profesjonalny wynajem szalunków budowlanych w Warszawie i całym województwie mazowieckim. Oferujemy kompleksowy wynajem szalunków stropowych, ściennych i systemowych dla inwestycji w stolicy i okolicach.",
      longDescription: `Wynajem szalunków w Warszawie - SzalunkiPro to Twój niezawodny partner w wynajmie sprzętu budowlanego. Obsługujemy całe województwo mazowieckie, oferując szybką dostawę szalunków budowlanych na teren każdej budowy. Nasz wynajem szalunków stropowych Warszawa cieszy się dużym zainteresowaniem wśród wykonawców budowlanych realizujących inwestycje mieszkaniowe, biurowe i przemysłowe w stolicy.

Wynajem szalunków budowlanych Warszawa obejmuje systemy ramowe, tableowe oraz podpory telescopowe najwyższej jakości. Dysponujemy nowoczesnym parkiem maszynowym, który pozwala nam na realizację projektów o każdej skali - od małych budów jednorodzinnych po wielkie inwestycje komercyjne. Wynajem szalunków mazowieckie to nasza specjalność - działamy również w Pruszkowie, Piasecznie, Legionowie, Wołominie i innych miejscowościach wokół Warszawy.

Szalunki do wynajęcia w Warszawie dostępne są w atrakcyjnych cenach, z możliwością długoterminowego najmu z rabatem. Wypożyczalnia szalunków Warszawa SzalunkiPro gwarantuje profesjonalne doradztwo techniczne, pomoc w doborze odpowiedniego sprzętu oraz terminową dostawę i odbiór. Wynajem deskowania Warszawa obejmuje pełen zakres akcesoriów montażowych.`,
      areas: ["Warszawa centrum", "Pruszków", "Piaseczno", "Legionowo", "Wołomin", "Marki", "Ząbki", "Otwock"],
    },
    {
      city: "Siedlce",
      province: "Mazowieckie",
      description: "Wynajem szalunków w Siedlcach - obsługujemy całe miasto i powiat siedlecki. Szybka dostawa szalunków budowlanych, konkurencyjne ceny, profesjonalne doradztwo techniczne.",
      longDescription: `Wynajem szalunków Siedlce - jesteśmy lokalną firmą znającą potrzeby rynku budowlanego w regionie siedleckim. Nasza wypożyczalnia szalunków w Siedlcach oferuje pełen asortyment sprzętu deskowaniowego dla budownictwa mieszkaniowego, przemysłowego i infrastrukturalnego. Wynajem szalunków budowlanych Siedlce to nasza specjalizacja - dysponujemy magazynem sprzętu w mieście, co gwarantuje błyskawiczną dostawę na teren budowy.

Wynajem szalunków stropowych Siedlce cieszy się największym zainteresowaniem wśród lokalnych wykonawców. Oferujemy systemy ramowe idealne do budowy stropów w domach jednorodzinnych oraz zaawansowane systemy tableowe do większych inwestycji. Wynajem szalunków systemowych Siedlce obejmuje również podpory telescopowe, belki stropowe oraz kompletne zestawy akcesoriów.

Szalunki do wynajęcia Siedlce dostępne są z dostawą na teren całego powiatu siedleckiego, w tym do Mordy, Kotunia, Zbuczyna i Skórzca. Tanie szalunki wynajem Siedlce - oferujemy konkurencyjne ceny oraz rabaty dla stałych klientów i przy dłuższym okresie najmu. Wynajem deskowania Siedlce to kompleksowa usługa z montażem i doradztwem technicznym.`,
      areas: ["Siedlce centrum", "Mordy", "Kotuń", "Zbuczyn", "Skórzec", "Przesmyki", "Wodynie"],
    },
    {
      city: "Lublin",
      province: "Lubelskie",
      description: "Wynajem szalunków budowlanych w Lublinie i województwie lubelskim. Kompleksowa obsługa inwestycji budowlanych, szybka dostawa, najwyższa jakość sprzętu deskowaniowego.",
      longDescription: `Wynajem szalunków Lublin - profesjonalna obsługa inwestycji budowlanych w całym województwie lubelskim. SzalunkiPro to wypożyczalnia szalunków w Lublinie z wieloletnim doświadczeniem i szerokim asortymentem sprzętu. Wynajem szalunków budowlanych Lublin obejmuje systemy ramowe, tableowe, słupowe oraz specjalistyczne rozwiązania dla konstrukcji mostowych.

Wynajem szalunków stropowych Lublin to nasza główna specjalizacja - realizujemy projekty mieszkaniowe, komercyjne i przemysłowe na terenie całego miasta i aglomeracji lubelskiej. Wynajem szalunków lubelskie obejmuje również okoliczne miejscowości: Świdnik, Puławy, Biała Podlaska, Chełm, Zamość. Dysponujemy nowoczesnym parkiem maszynowym, który pozwala nam obsługiwać nawet najbardziej wymagające projekty.

Szalunki do wynajęcia Lublin - oferujemy pełen zakres sprzętu deskowaniowego wraz z doradztwem technicznym. Nasz wynajem szalunków systemowych Lublin cieszy się uznaniem wśród największych firm budowlanych w regionie. Wynajem podpór stropowych Lublin, wynajem belek stropowych oraz wynajem deskowań ściennych - wszystko w jednym miejscu. Konkurencyjne ceny, elastyczne warunki najmu, terminowa dostawa - to gwarancja sukcesu Twojej inwestycji.`,
      areas: ["Lublin centrum", "Świdnik", "Puławy", "Biała Podlaska", "Chełm", "Zamość", "Kraśnik"],
    },
    {
      city: "Łuków",
      province: "Lubelskie",
      description: "Wynajem szalunków w Łukowie - obsługa miasta i powiatu łukowskiego. Szybka dostawa sprzętu budowlanego, atrakcyjne ceny, profesjonalne wsparcie techniczne.",
      longDescription: `Wynajem szalunków Łuków - lokalna wypożyczalnia szalunków budowlanych obsługująca Łuków i okolice. Nasza firma specjalizuje się w wynajmie szalunków stropowych dla budownictwa mieszkaniowego i przemysłowego w powiecie łukowskim. Wynajem szalunków budowlanych Łuków to kompleksowa usługa obejmująca dostawę, montaż, doradztwo techniczne oraz odbiór sprzętu po zakończeniu prac.

Wynajem szalunków stropowych Łuków - oferujemy systemy ramowe idealne do małych i średnich budów oraz zaawansowane systemy tableowe dla większych inwestycji. Szalunki do wynajęcia Łuków dostępne są w szerokiej gamie rozmiarów i konfiguracji, co pozwala dopasować rozwiązanie do specyfiki każdego projektu. Wynajem deskowania Łuków obejmuje również akcesoria montażowe, podpory i belki.

Obsługujemy cały powiat łukowski, w tym Stoczek Łukowski, Trzebieszów, Radzyń Podlaski. Tanie szalunki wynajem Łuków - konkurencyjne ceny, rabaty przy dłuższym okresie najmu, elastyczne warunki współpracy. Wynajem szalunków lubelskie wschód - Łuków to idealna lokalizacja bazowa dla inwestycji w wschodniej części województwa.`,
      areas: ["Łuków centrum", "Stoczek Łukowski", "Trzebieszów", "Radzyń Podlaski", "Międzyrzec Podlaski"],
    },
    {
      city: "Mińsk Mazowiecki",
      province: "Mazowieckie",
      description: "Wynajem szalunków budowlanych w Mińsku Mazowieckim - obsługa miasta i okolic. Profesjonalny sprzęt, szybka dostawa, konkurencyjne ceny.",
      longDescription: `Wynajem szalunków Mińsk Mazowiecki - profesjonalna wypożyczalnia szalunków obsługująca miasto i powiat miński. Oferujemy kompleksowy wynajem szalunków budowlanych dla inwestycji mieszkaniowych, komercyjnych i infrastrukturalnych. Wynajem szalunków stropowych Mińsk Mazowiecki obejmuje systemy ramowe, tableowe oraz podpory telescopowe najwyższej jakości.

Szalunki do wynajęcia Mińsk Mazowiecki - szeroki asortyment sprzętu deskowaniowego dostępny od ręki. Wynajem szalunków mazowieckie wschód - obsługujemy Mińsk Mazowiecki, Kałuszyn, Mrozy, Halinów, Sulejówek i inne miejscowości w regionie. Nasza lokalizacja zapewnia szybką dostawę na budowy położone między Warszawą a Siedlcami.

Tanie szalunki wynajem Mińsk Mazowiecki - konkurencyjne ceny, elastyczne warunki najmu, rabaty dla stałych klientów. Wynajem deskowania Mińsk Mazowiecki to kompleksowa usługa z pełnym wsparciem technicznym i doradztwem w doborze odpowiedniego sprzętu.`,
      areas: ["Mińsk Mazowiecki", "Kałuszyn", "Mrozy", "Halinów", "Sulejówek", "Dębe Wielkie"],
    },
  ];

  return (
    <section id="obszary" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Obszary Obsługi - Wynajem Szalunków
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Profesjonalny wynajem szalunków budowlanych w całej Polsce wschodniej i centralnej.
              Obsługujemy Warszawę, Siedlce, Lublin, Łuków i wszystkie miasta w województwie mazowieckim i lubelskim.
              Szybka dostawa szalunków stropowych, ściennych i systemowych na teren każdej budowy.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Wynajem Szalunków {region.city}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {region.province}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-medium mb-4 leading-relaxed">
                  {region.description}
                </p>

                <div className="text-gray-600 leading-relaxed space-y-4">
                  {region.longDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Obsługiwane miejscowości:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {region.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-lg font-medium text-sm"
                    >
                      <CheckCircle2 size={16} />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#kontakt"
                  className="inline-flex items-center space-x-2 btn-primary"
                >
                  <span>Zapytaj o wynajem w {region.city}</span>
                  <CheckCircle2 size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-3 text-gray-900 mb-4 text-center">
              Szalunki Budowlane - Kompleksowa Obsługa
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Wynajem szalunków budowlanych</strong> w Polsce wschodniej i centralnej -
                SzalunkiPro to profesjonalna wypożyczalnia szalunków obsługująca województwo mazowieckie
                i lubelskie. Oferujemy <strong>wynajem szalunków stropowych</strong>, ściennych, słupowych
                oraz systemowych dla każdego typu inwestycji budowlanej.
              </p>
              <p>
                Nasz <strong>wynajem szalunków Warszawa</strong>, <strong>wynajem szalunków Siedlce</strong>,
                {" "}<strong>wynajem szalunków Lublin</strong> oraz <strong>wynajem szalunków Łuków</strong> to
                kompleksowe usługi obejmujące dostawę, montaż, doradztwo techniczne oraz odbiór sprzętu.
                Dysponujemy nowoczesnym parkiem maszynowym i doświadczonym zespołem specjalistów.
              </p>
              <p>
                <strong>Wynajem szalunków mazowieckie</strong> i <strong>wynajem szalunków lubelskie</strong> -
                obsługujemy wszystkie miasta i gminy w obu województwach. Szalunki do wynajęcia dostępne
                są w szerokiej gamie rozmiarów i konfiguracji. Oferujemy konkurencyjne ceny, elastyczne
                warunki najmu oraz rabaty przy długoterminowej współpracy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
