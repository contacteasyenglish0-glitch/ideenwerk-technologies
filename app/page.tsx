import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à digitaliser votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Que vous soyez au Togo, en Côte d'Ivoire, au Sénégal ou ailleurs en Afrique, 
            nous sommes là pour vous accompagner.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            Démarrer un Projet
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">
                Ideenwerk <span className="text-blue-500">Technologies</span>
              </h3>
              <p className="text-sm leading-relaxed">
                L'excellence digitale au service de l'Afrique. 
                Nous créons des solutions technologiques innovantes 
                pour les entreprises africaines. Basés au Togo, 
                nous intervenons sur tout le continent.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Accueil</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/pourquoi-nous" className="hover:text-white transition">Pourquoi nous</a></li>
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/about" className="hover:text-white transition">À propos</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📍 Lomé, Togo (Base opérationnelle)</li>
                <li>🌍 Intervention sur toute l'Afrique</li>
                <li>
                  📱 <a href="tel:+22896315029" className="hover:text-white transition">+228 96 31 50 29</a>
                </li>
                <li>
                  📱 <a href="tel:+22870888699" className="hover:text-white transition">+228 70 88 86 99</a>
                </li>
                <li>
                  💬 <a href="https://wa.me/22896315029" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp : +228 96 31 50 29</a>
                </li>
                <li>
                  ✉️ <a href="mailto:contact@ideenwerk-technologies.com" className="hover:text-white transition">contact@ideenwerk-technologies.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Ideenwerk Technologies. Tous droits réservés. | Fait avec passion pour l'Afrique 🌍</p>
          </div>
        </div>
      </footer>
    </main>
  );
}