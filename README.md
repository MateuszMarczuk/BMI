# SzalunkiPro - Profesjonalna Strona Wynajmu Szalunków Budowlanych

Nowoczesna, responsywna strona internetowa dla firmy wynajmującej szalunki budowlane. Stworzona z wykorzystaniem najnowszych technologii webowych.

## 🚀 Technologie

- **Next.js 14** - Najnowsza wersja frameworka React z App Router
- **TypeScript** - Typowane JavaScript dla większej pewności kodu
- **Tailwind CSS** - Nowoczesny framework CSS dla responsywnego designu
- **Framer Motion** - Płynne animacje i przejścia
- **React Hook Form** - Zaawansowana walidacja formularzy
- **Lucide React** - Profesjonalne ikony

## 📋 Funkcje

### ✅ Gotowe funkcjonalności

- **Responsywny design** - Idealne działanie na wszystkich urządzeniach
- **Hero Section** - Atrakcyjna sekcja powitalna z CTA
- **O Nas** - Prezentacja firmy i jej wartości
- **Usługi** - Szczegółowy przegląd oferowanych szalunków
- **Kalkulator AI** - Inteligentny kalkulator kosztów wynajmu z rabatem za dłuższy okres
- **Dlaczego My** - Wyróżniki firmy i korzyści
- **Formularz Kontaktowy** - Walidowany formularz z React Hook Form
- **SEO Optimization** - Pełne metadane dla wyszukiwarek
- **Smooth Scrolling** - Płynne przewijanie między sekcjami
- **Animacje** - Profesjonalne animacje przy scrollowaniu

### 🎨 Design

- Minimalistyczny, nowoczesny styl inspirowany Apple i Tesla
- Kolory branżowe: pomarańczowy (energia) + niebieski (zaufanie)
- Duża czytelność i przyjazny UX
- Mobilne menu hamburgerowe
- Sticky navigation z efektem tła przy scrollowaniu

## 🛠️ Instalacja i Uruchomienie

### Wymagania
- Node.js 18+
- npm lub yarn

### Kroki

1. **Instalacja zależności**
```bash
npm install
```

2. **Uruchomienie serwera deweloperskiego**
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

3. **Build produkcyjny**
```bash
npm run build
npm start
```

## 📁 Struktura Projektu

```
.
├── app/
│   ├── layout.tsx          # Główny layout z SEO metadata
│   ├── page.tsx            # Strona główna
│   └── globals.css         # Globalne style CSS
├── components/
│   ├── Navbar.tsx          # Nawigacja z sticky header
│   ├── Hero.tsx            # Sekcja powitalna
│   ├── About.tsx           # O firmie
│   ├── Services.tsx        # Usługi
│   ├── Calculator.tsx      # Kalkulator wynajmu AI
│   ├── WhyUs.tsx           # Dlaczego my
│   ├── Contact.tsx         # Formularz kontaktowy
│   └── Footer.tsx          # Stopka
├── public/                 # Pliki statyczne (obrazy, logo, etc.)
├── tailwind.config.ts      # Konfiguracja Tailwind
├── next.config.mjs         # Konfiguracja Next.js
└── package.json            # Zależności projektu
```

## 🎯 Personalizacja

### Zmiana treści

Wszystkie treści znajdują się bezpośrednio w komponentach. Główne miejsca do edycji:

- **Nazwa firmy**: Zamień "SzalunkiPro" na swoją nazwę w:
  - `app/layout.tsx` (SEO metadata)
  - `components/Navbar.tsx`
  - `components/Footer.tsx`

- **Dane kontaktowe**: Edytuj w `components/Contact.tsx` i `components/Footer.tsx`:
  - Telefon
  - Email
  - Godziny otwarcia

- **Obszar działania**: Zaktualizuj lokalizacje w:
  - `components/Hero.tsx`
  - `components/About.tsx`
  - `components/Footer.tsx`

### Zmiana kolorów

Kolory są zdefiniowane w `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B35",    // Pomarańczowy
    dark: "#E5551C",
    light: "#FF8555",
  },
  secondary: {
    DEFAULT: "#1E3A8A",    // Niebieski
    dark: "#1E40AF",
    light: "#3B82F6",
  },
}
```

### Kalkulator wynajmu

Stawki i rabaty skonfigurujesz w `components/Calculator.tsx`:

```typescript
const rates = {
  ramowy: 2.5,     // zł za m² dziennie
  tableowy: 3.2,
  podpory: 1.8,
};

// Rabaty
if (daysNum >= 30) discount = 0.15;      // 15% za 30+ dni
else if (daysNum >= 14) discount = 0.1;  // 10% za 14+ dni
else if (daysNum >= 7) discount = 0.05;  // 5% za 7+ dni
```

## 🖼️ Dodawanie Obrazów

Dodaj profesjonalne zdjęcia szalunków:

1. Umieść obrazy w folderze `public/`
2. Zamień placeholder w `components/Hero.tsx`:

```tsx
<Image
  src="/hero-image.jpg"
  alt="Szalunki budowlane"
  fill
  className="object-cover"
/>
```

3. Dodaj galerie w sekcji Services lub stwórz nową sekcję Gallery

## 📧 Integracja Formularza Kontaktowego

Obecnie formularz jest frontend-only. Aby wysyłał maile:

### Opcja 1: Email.js (najłatwiejsze)
```bash
npm install @emailjs/browser
```

### Opcja 2: API Route Next.js + Nodemailer
Stwórz `app/api/contact/route.ts`

### Opcja 3: Zewnętrzna usługa (Formspree, SendGrid)

## 🚀 Wdrożenie (Deployment)

### Vercel (zalecane, darmowe dla hobby)

1. Wypushuj kod na GitHub
2. Zarejestruj się na [Vercel](https://vercel.com)
3. Importuj repozytorium
4. Deploy! (automatyczne)

### Inne opcje:
- **Netlify** - podobnie jak Vercel
- **VPS/Serwer dedykowany** - wymagane uruchomienie Node.js

## 🔍 SEO

Strona zawiera:
- ✅ Zoptymalizowane meta tagi
- ✅ Open Graph dla social media
- ✅ Semantyczny HTML
- ✅ Responsive design (Google Mobile-First)
- ✅ Szybkie ładowanie

### Dalsze kroki SEO:
1. Dodaj Google Analytics
2. Zarejestruj w Google Search Console
3. Stwórz sitemap.xml (Next.js automatycznie)
4. Dodaj plik robots.txt
5. Stwórz blog dla content marketingu

## 📱 Responsywność

Strona jest w pełni responsywna:
- 📱 Mobile: 320px - 767px
- 📱 Tablet: 768px - 1023px
- 💻 Desktop: 1024px+

## 🎨 Rozszerzenia na Przyszłość

### Planowane funkcjonalności:

1. **Panel Administracyjny**
   - Zarządzanie cenami
   - Historia wynajmów
   - Kalendarz dostępności

2. **System Rezerwacji Online**
   - Kalendarz dostępności
   - Płatności online
   - Automatyczne faktury

3. **Chatbot AI**
   - Integracja z OpenAI
   - 24/7 wsparcie klienta
   - Rekomendacje produktów

4. **Blog/Aktualności**
   - Content marketing
   - Poradniki budowlane
   - Case studies

5. **Galeria Projektów**
   - Portfolio realizacji
   - Zdjęcia przed/po
   - Opinie klientów

6. **Wersje językowe**
   - Angielski
   - Niemiecki
   - Ukraiński

## 🤝 Wsparcie

W razie pytań lub problemów:
- Sprawdź dokumentację Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## 📄 Licencja

Projekt stworzony dla firmy SzalunkiPro. Wszystkie prawa zastrzeżone.

---

**Powodzenia z Twoim biznesem! 🚀**
