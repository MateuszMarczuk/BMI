"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ile kosztuje wynajem szalunków budowlanych?",
      answer: `Cena wynajmu szalunków budowlanych zależy od kilku czynników: typu systemu (ramowy, tableowy, podpory), powierzchni do zaszalowania, okresu najmu oraz lokalizacji budowy. Wynajem szalunków stropowych kosztuje średnio od 1,80 zł do 3,50 zł za m² dziennie. Oferujemy atrakcyjne rabaty przy dłuższym okresie najmu: 5% przy najmie powyżej 7 dni, 10% przy najmie powyżej 14 dni oraz 15% przy najmie powyżej 30 dni. Wynajem szalunków Warszawa, wynajem szalunków Siedlce oraz wynajem szalunków Lublin dostępny jest w tych samych konkurencyjnych cenach. Dokładną wycenę przygotujemy po poznaniu szczegółów Twojego projektu - skontaktuj się z nami, aby otrzymać bezpłatną kalkulację kosztów.`,
    },
    {
      question: "Jakie rodzaje szalunków budowlanych oferujecie w wynajmie?",
      answer: `Nasza wypożyczalnia szalunków oferuje pełen asortyment sprzętu deskowaniowego. Wynajem szalunków stropowych obejmuje systemy ramowe (idealne do małych i średnich budów), systemy tableowe (dla większych powierzchni) oraz podpory telescopowe w różnych wysokościach. W planach mamy rozszerzenie oferty o wynajem szalunków ściennych (systemy wielkowymiarowe i modularne), wynajem szalunków słupowych (okrągłe i kwadratowe) oraz wynajem szalunków mostowych. Wszystkie szalunki do wynajęcia są regularnie serwisowane i spełniają najwyższe standardy jakości. Wynajem szalunków budowlanych obejmuje również pełen zakres akcesoriów: belki stropowe, łączniki, kliny, wsporniki oraz elementy montażowe.`,
    },
    {
      question: "Czy realizujecie wynajem szalunków z dostawą na budowę?",
      answer: `Tak, wynajem szalunków z dostawą to standard w naszej firmie. Obsługujemy całe województwo mazowieckie i lubelskie. Wynajem szalunków Warszawa, wynajem szalunków Siedlce, wynajem szalunków Lublin, wynajem szalunków Łuków oraz wynajem szalunków Mińsk Mazowiecki - we wszystkich tych lokalizacjach zapewniamy szybką i terminową dostawę na teren budowy. Dysponujemy własnym transportem, co gwarantuje elastyczność i punktualność. Wynajem szalunków mazowieckie obejmuje Warszawę i okolice (Pruszków, Piaseczno, Legionowo, Wołomin), Siedlce i powiat siedlecki, Mińsk Mazowiecki oraz inne miasta regionu. Wynajem szalunków lubelskie obejmuje Lublin, Puławy, Biała Podlaska, Chełm, Zamość oraz Łuków i okolice. Koszt dostawy ustalamy indywidualnie w zależności od odległości i ilości sprzętu.`,
    },
    {
      question: "Jak długo można wynająć szalunki budowlane?",
      answer: `Wynajem szalunków budowlanych dostępny jest na dowolny okres - od kilku dni do kilku miesięcy. Oferujemy elastyczne warunki najmu dostosowane do harmonogramu Twojej budowy. Minimalny okres wynajmu to 3 dni, jednak najczęściej klienci wynajmują szalunki na 14-30 dni. Przy dłuższym okresie najmu oferujemy atrakcyjne rabaty: 5% rabatu przy najmie powyżej tygodnia, 10% przy dwóch tygodniach i 15% przy najmie miesięcznym lub dłuższym. Wynajem szalunków stropowych na dłuższy okres jest bardzo popularny wśród firm budowlanych realizujących większe inwestycje. W razie potrzeby przedłużenia najmu, wystarczy kontakt z naszym biurem. Tanie szalunki wynajem - długoterminowa współpraca to gwarancja najlepszych cen.`,
    },
    {
      question: "Czy oferujecie pomoc techniczną przy montażu szalunków?",
      answer: `Tak, w ramach wynajmu szalunków budowlanych oferujemy profesjonalne doradztwo techniczne. Nasz doświadczony zespół pomoże w doborze odpowiedniego systemu szalunkowego do specyfiki Twojego projektu, przygotuje projekt rozmieszczenia szalunków oraz doradzi w kwestiach montażu. Na życzenie klienta możemy zapewnić również nadzór techniczny podczas montażu oraz szkolenie dla ekipy budowlanej. Wynajem szalunków stropowych obejmuje szczegółową instrukcję montażu oraz wsparcie telefoniczne w razie pytań. Nasi specjaliści mają wieloletnie doświadczenie w branży budowlanej i znają się na różnych typach konstrukcji. Wynajem szalunków systemowych z pełnym wsparciem technicznym to gwarancja bezpieczeństwa i efektywności prac budowlanych.`,
    },
    {
      question: "Gdzie oferujecie wynajem szalunków - jakie miasta obsługujecie?",
      answer: `Profesjonalny wynajem szalunków budowlanych realizujemy w całej Polsce wschodniej i centralnej. Główne obszary obsługi to: wynajem szalunków Warszawa i cała aglomeracja warszawska (Pruszków, Piaseczno, Legionowo, Wołomin, Marki, Ząbki), wynajem szalunków Siedlce i powiat siedlecki (Mordy, Kotuń, Zbuczyn, Skórzec), wynajem szalunków Lublin i aglomeracja lubelska (Świdnik, Puławy, Biała Podlaska, Chełm, Zamość), wynajem szalunków Łuków i powiat łukowski (Stoczek Łukowski, Radzyń Podlaski), oraz wynajem szalunków Mińsk Mazowiecki (Kałuszyn, Mrozy, Halinów). Obsługujemy całe województwo mazowieckie (wynajem szalunków mazowieckie) oraz województwo lubelskie (wynajem szalunków lubelskie). Szybka dostawa szalunków na teren budowy, konkurencyjne ceny, profesjonalna obsługa - to nasza specjalność.`,
    },
    {
      question: "Czy wynajem szalunków obejmuje również akcesoria montażowe?",
      answer: `Tak, wynajem szalunków budowlanych obejmuje kompletny zestaw akcesoriów niezbędnych do montażu i bezpiecznego użytkowania. W skład wynajmu wchodzą: podpory telescopowe (w różnych wysokościach), belki stropowe (stalowe i aluminiowe), głowice podpór, łączniki systemowe, kliny montażowe, wsporniki, kotwy, śruby oraz elementy zabezpieczające. Wynajem szalunków stropowych to zawsze kompletny system gotowy do montażu - nie musisz kupować żadnych dodatkowych elementów. Wszystkie akcesoria są regularnie kontrolowane i serwisowane, spełniają normy bezpieczeństwa. Wynajem deskowania obejmuje również profesjonalne doradztwo w doborze odpowiednich akcesoriów do specyfiki Twojego projektu. W razie potrzeby możemy dostarczyć dodatkowe elementy - skontaktuj się z nami, aby omówić szczegóły.`,
    },
    {
      question: "Jakie są warunki wynajmu szalunków - czy trzeba płacić kaucję?",
      answer: `Warunki wynajmu szalunków są proste i przejrzyste. Wymagamy wpłaty kaucji zwrotnej, której wysokość zależy od wartości wynajmowanego sprzętu - zazwyczaj 20-30% wartości. Kaucja jest zwracana w całości po zwrocie sprzętu w nienaruszonym stanie. Płatność za wynajem może być realizowana przelewem bankowym lub gotówką. Wystawiamy faktury VAT. Wynajem szalunków dla firm budowlanych możliwy jest również z odroczonym terminem płatności po pozytywnej weryfikacji. Do zawarcia umowy potrzebny jest dokument tożsamości (dla osób prywatnych) lub wpis do KRS/CEIDG (dla firm). Szczegółowe warunki wynajmu, cennik oraz informacje o promocjach i rabatach dostępne są w naszym biurze. Tanie szalunki wynajem to nie tylko niska cena, ale także elastyczne warunki współpracy dostosowane do potrzeb klienta.`,
    },
    {
      question: "Czy szalunki są w dobrym stanie technicznym?",
      answer: `Wszystkie szalunki do wynajęcia w naszej wypożyczalni są regularnie serwisowane i kontrolowane. Przed każdym najmem sprzęt przechodzi szczegółową inspekcję techniczną, podczas której sprawdzamy stan elementów nośnych, akcesoriów montażowych oraz zabezpieczeń. Wynajem szalunków budowlanych oznacza dla nas najwyższą jakość i bezpieczeństwo. Nasz park maszynowy składa się z nowoczesnych systemów szalunkowych renomowanych producentów. Wymieniamy zużyte elementy, dbamy o prawidłowe przechowywanie sprzętu, co przekłada się na jego długą żywotność i niezawodność. Wynajem szalunków stropowych to gwarancja profesjonalnego sprzętu, który nie zawiedzie na budowie. Wszystkie szalunki posiadają wymagane certyfikaty i atesty bezpieczeństwa. W razie jakichkolwiek problemów technicznych zapewniamy szybką wymianę sprzętu.`,
    },
    {
      question: "Jak zamówić wynajem szalunków budowlanych?",
      answer: `Zamówienie wynajmu szalunków jest proste i szybkie. Możesz skontaktować się z nami telefonicznie (+48 123 456 789), przez e-mail (kontakt@szalunkipro.pl) lub za pomocą formularza kontaktowego na stronie. Wystarczy podać podstawowe informacje: typ budowy, powierzchnię do zaszalowania, planowany okres wynajmu oraz lokalizację budowy. Na tej podstawie przygotujemy bezpłatną wycenę i pomożemy w doborze odpowiedniego sprzętu. Po akceptacji oferty ustalamy termin dostawy szalunków na budowę. Wynajem szalunków Warszawa, wynajem szalunków Siedlce, wynajem szalunków Lublin - obsługę zamówień prowadzimy w całym regionie. Nasz kalkulator kosztów online pozwala na szybką, orientacyjną wycenę. Dla stałych klientów oferujemy priorytetową obsługę i specjalne rabaty. Wynajem szalunków budowlanych jeszcze nigdy nie był tak prosty!`,
    },
    {
      question: "Czy oferujecie wynajem szalunków na weekend?",
      answer: `Tak, oferujemy elastyczny wynajem szalunków dostosowany do potrzeb klientów, w tym także najem weekendowy. Wynajem szalunków na weekend jest popularny wśród inwestorów prywatnych budujących domy we własnym zakresie. Minimalna doba wynajmu to 3 dni, więc wynajem piątek-niedziela jest jak najbardziej możliwy. Cena wynajmu na weekend ustalana jest indywidualnie - dla krótszych okresów oferujemy specjalne pakiety. Dostawa i odbiór sprzętu mogą być zrealizowane także w weekendy (za dodatkową opłatą). Wynajem szalunków stropowych na weekend to wygodne rozwiązanie dla budujących systemem gospodarczym. Zapewniamy pełne wsparcie techniczne również w soboty. Skontaktuj się z nami, aby ustalić szczegóły weekendowego wynajmu szalunków.`,
    },
    {
      question: "Czym różnią się systemy ramowe od systemów tableowych?",
      answer: `Systemy ramowe i tableowe to dwa główne typy szalunków stropowych, różniące się konstrukcją i zastosowaniem. Systemy ramowe składają się z metalowych ram (stojaków) oraz drewnianych lub stalowych belek. Są bardziej uniwersalne, łatwiejsze w montażu i idealne do małych oraz średnich powierzchni (domy jednorodzinne, małe budynki). Wynajem szalunków ramowych jest tańszy i bardziej popularny wśród inwestorów indywidualnych. Systemy tableowe wykorzystują wielkoformatowe panele (table), które pokrywają większe powierzchnie. Są szybsze w montażu przy dużych, powtarzalnych powierzchniach (budynki wielorodzinne, hale, obiekty komercyjne), ale wymagają większej przestrzeni do składowania i transportu. Wynajem szalunków tableowych polecany jest dla profesjonalnych firm budowlanych realizujących większe inwestycje. Nasi specjaliści pomogą dobrać odpowiedni system do Twojego projektu.`,
    },
    {
      question: "Czy oferujecie wynajem szalunków dla inwestorów indywidualnych?",
      answer: `Tak, wynajem szalunków budowlanych dostępny jest zarówno dla firm budowlanych, jak i inwestorów indywidualnych budujących domy we własnym zakresie. Rozumiemy, że budowa domu systemem gospodarczym wymaga dostępu do profesjonalnego sprzętu w przystępnej cenie. Dlatego oferujemy elastyczne warunki wynajmu także dla osób prywatnych. Wynajem szalunków stropowych dla inwestorów indywidualnych obejmuje pełne doradztwo techniczne - pomożemy dobrać odpowiedni sprzęt, wyjaśnimy zasady montażu, odpowiemy na wszystkie pytania. Tanie szalunki wynajem to możliwość zaoszczędzenia na budowie bez rezygnacji z jakości. Minimalny okres najmu to 3 dni, maksymalny - bez ograniczeń. Prowadzimy również szkolenia z montażu szalunków dla osób budujących po raz pierwszy. Wynajem deskowania dla budujących samodzielnie - skontaktuj się z nami, chętnie pomożemy!`,
    },
    {
      question: "Jak bezpiecznie użytkować wynajmowane szalunki?",
      answer: `Bezpieczeństwo użytkowania szalunków budowlanych jest najważniejsze. Przy wynajmie otrzymujesz szczegółową instrukcję montażu oraz kartę techniczną sprzętu. Podstawowe zasady bezpiecznego użytkowania: zawsze sprawdzaj stan techniczny elementów przed montażem, montuj szalunki zgodnie z instrukcją producenta, nie przekraczaj dopuszczalnych obciążeń (sprawdź w dokumentacji), używaj wszystkich elementów zabezpieczających, regularnie kontroluj stan konstrukcji podczas betonowania, demontuj szalunki dopiero po osiągnięciu przez beton odpowiedniej wytrzymałości. Wynajem szalunków stropowych obejmuje wsparcie techniczne - w razie wątpliwości zawsze możesz skonsultować się z naszymi specjalistami. Organizujemy również szkolenia z zakresu montażu i bezpiecznego użytkowania szalunków. Pamiętaj: profesjonalny sprzęt to podstawa, ale równie ważna jest wiedza i doświadczenie ekipy montażowej.`,
    },
    {
      question: "Kiedy można demontować szalunki po betonowaniu?",
      answer: `Czas, po którym można bezpiecznie demontować szalunki stropowe, zależy od kilku czynników: klasy betonu, temperatury otoczenia, grubości elementu betonowego oraz obciążenia konstrukcji. Generalnie przy temperaturze około 20°C i betonie klasy C20/25 można demontować szalunki po 21-28 dniach (dla stropów). W przypadku podpór pod stropami często zaleca się pozostawienie ich nawet do 56 dni. Ważne: przed demontażem beton powinien osiągnąć co najmniej 70% swojej docelowej wytrzymałości. Przy niższych temperaturach (jesień, zima) czas ten wydłuża się nawet dwukrotnie. Przy wyższych (lato, używanie przyspiesz) może być krótszy. Wynajem szalunków budowlanych na odpowiednio długi okres to kluczowa kwestia bezpieczeństwa. Nasi specjaliści pomogą określić optymalny czas demontażu w zależności od specyfiki Twojego projektu. W razie potrzeby przedłużenia wynajmu - wystarczy kontakt z naszym biurem.`,
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <HelpCircle size={20} />
              <span className="font-semibold">Często zadawane pytania</span>
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">
              Wszystko o Wynajmie Szalunków Budowlanych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na najczęściej zadawane pytania dotyczące wynajmu szalunków stropowych,
              ściennych i systemowych. Dowiedz się więcej o cenach, warunkach najmu i obszarach obsługi.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a href="#kontakt" className="btn-primary">
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
