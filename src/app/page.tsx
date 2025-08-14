export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Můj Web
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Domů
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                O mně
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Dovednosti
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="py-20">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Ahoj, jsem
              <span className="text-blue-600 dark:text-blue-400"> Váš Název</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Web Developer a Designer se zaměřením na moderní technologie a uživatelský zážitek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                Kontaktujte mě
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                Zjistit více
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            O mně
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Jsem vášnivý web developer s více než X lety zkušeností v oblasti vývoje moderních webových aplikací. 
                Specializuji se na React, Next.js a další moderní technologie.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Miluji tvorbu čistého, efektivního kódu a uživatelsky přívětivých rozhraní. 
                Věřím, že dobrý design a funkcionalita jdou ruku v ruce.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Rychlé informace
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Lokace:</strong> Praha, Česká republika</li>
                <li><strong>Zkušenosti:</strong> X let</li>
                <li><strong>Zaměření:</strong> Frontend Development</li>
                <li><strong>Dostupnost:</strong> Otevřen novým projektům</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Dovednosti
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 / CSS3</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Nástroje
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Git / GitHub</li>
                <li>• Vercel / Netlify</li>
                <li>• Figma</li>
                <li>• VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Kontakt
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Máte projekt nebo jen chcete říct ahoj? Napište mi!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Email
                </h3>
                <a 
                  href="mailto:vas@email.cz" 
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  vas@email.cz
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Telefon
                </h3>
                <a 
                  href="tel:+420123456789" 
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  +420 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Váš Název. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}
