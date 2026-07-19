import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ==================== NAVIGATION ==================== */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Ideenwerk</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="#pourquoi-nous" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Pourquoi Nous</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">FAQ</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="accueil" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            L'Excellence Digitale en <span className="text-blue-300">Afrique</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Nous transformons vos idées en solutions technologiques performantes. 
            Sites web, applications mobiles et digitalisation pour entreprises ambitieuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Démarrer un projet
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Nos services
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions technologiques complètes pour propulser votre entreprise dans l'ère numérique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sites Web Professionnels</h3>
              <p className="text-gray-600">
                Sites vitrines, e-commerce ou plateformes web sur mesure. Design moderne, responsive et optimisé pour le référencement.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Applications Mobiles</h3>
              <p className="text-gray-600">
                Développement d'applications iOS et Android natives ou cross-platform. Expérience utilisateur fluide et performante.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Logiciels Sur Mesure</h3>
              <p className="text-gray-600">
                Solutions logicielles adaptées à vos processus métiers. Gestion de stock, facturation, CRM et outils internes.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digitalisation PME</h3>
              <p className="text-gray-600">
                Accompagnement complet dans votre transformation digitale. Audit, conseil et déploiement de solutions adaptées.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance & Sécurité</h3>
              <p className="text-gray-600">
                Support technique réactif, mises à jour régulières et sécurisation de vos infrastructures informatiques.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solutions Cloud</h3>
              <p className="text-gray-600">
                Hébergement sécurisé, migration vers le cloud et optimisation de vos ressources informatiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== POURQUOI NOUS ==================== */}
      <section id="pourquoi-nous" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Ideenwerk ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée à votre service pour des projets réussis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respect des Délais</h3>
              <p className="text-gray-600 text-sm">Livraison dans les temps, sans compromis sur la qualité.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Code de Qualité</h3>
              <p className="text-gray-600 text-sm">Standards professionnels, code propre et documenté.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Réactif</h3>
              <p className="text-gray-600 text-sm">Équipe basée à Lomé, disponible et à l'écoute.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prix Compétitifs</h3>
              <p className="text-gray-600 text-sm">Excellence technique à des tarifs adaptés au marché africain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS (Version Crédible) ==================== */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Engagement Qualité</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Disponible</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Afrique</div>
              <div className="text-blue-200">Zone d'Intervention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Sur Mesure</div>
              <div className="text-blue-200">Solutions Adaptées</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services.
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Quel est le délai de développement d'un site web ?
                <span className="text-blue-600">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Un site vitrine simple prend généralement entre 2 à 4 semaines. Pour des projets plus complexes (e-commerce, applications web), comptez 6 à 12 semaines selon vos besoins spécifiques.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Proposez-vous des forfaits de maintenance ?
                <span className="text-blue-600">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Oui, nous offrons des contrats de maintenance mensuels ou annuels incluant mises à jour de sécurité, sauvegardes régulières et support technique prioritaire.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Intervenez-vous en dehors du Togo ?
                <span className="text-blue-600">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Absolument ! Bien que basés à Lomé, nous travaillons avec des clients dans toute l'Afrique francophone et anglophone. Toutes nos prestations peuvent être réalisées à distance.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Quels sont vos moyens de paiement ?
                <span className="text-blue-600">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Nous acceptons les virements bancaires, Mobile Money (TMoney, Flooz), et les paiements par carte. Un acompte de 30% est demandé au démarrage du projet.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prêt à démarrer votre projet ? Discutons de vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">Boulevard du 30 Août<br />Lomé, Togo</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@ideenwerk-technologies.tech</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+228 96 31 50 29</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Décrivez votre projet..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1: Logo & Description */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Ideenwerk</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre partenaire de confiance pour la transformation digitale en Afrique. 
                Solutions web, mobile et logicielles sur mesure.
              </p>
            </div>

            {/* Colonne 2: Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#pourquoi-nous" className="text-gray-400 hover:text-white transition-colors">Pourquoi Nous</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Colonne 3: Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Boulevard du 30 Août</li>
                <li>Lomé, Togo</li>
                <li>+228 96 31 50 29</li>
                <li>contact@ideenwerk-technologies.tech</li>
              </ul>
            </div>
          </div>

          {/* Ligne du bas */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ideenwerk Technologies. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/mentions-legales" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              >
                Mentions Légales
              </Link>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}