"use client"

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "FAQ", href: "/faq" },
]

export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#9ec9f6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        
        {/* Lewa kolumna */}
        <div className="relative flex flex-col items-center justify-center px-6 sm:pb-32 lg:px-16 text-center pt-[5.8rem]">
          {/* Pasek nawigacyjny – absolutnie przyklejony do góry */}
          <nav className="absolute top-0 w-full flex justify-center mt-4">
            <ul className="flex gap-x-20">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-lg font-bold text-gray-900 hover:text-indigo-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tytuł i opis NeuroScope AI */}
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            NeuroScope AI
          </h1>
          <p className="mt-6 text-lg text-gray-900 sm:text-xl">
            NeuroScope AI is a cutting-edge application leveraging artificial intelligence 
            algorithms for brain tumor detection. By analyzing medical images – such as MRI scans – 
            with high precision, it helps physicians make faster and more accurate diagnoses.
          </p>
          
          <div className="mt-8 flex items-center gap-x-6">
            {/* Przycisk „Get started” – czarne tło, niebieski tekst */}
            <a
              href="#"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-[#9ec9f6] shadow-sm 
                         hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 
                         focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get started
            </a>

            {/* „Learn more” – pogrubiony */}
            <a 
              href="#" 
              className="text-base font-bold text-black"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Prawa kolumna (obraz) */}
        <div className="relative w-full h-full">
          <img
            alt="AI Brain Research"
            src="/ai-brain-research-huawei-artificial-intelligence.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
