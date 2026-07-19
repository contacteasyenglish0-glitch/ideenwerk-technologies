export default function Portfolio() {
  const projects = [
    {
      title: "Plateforme E-commerce Locale",
      description: "Développement d'une marketplace complète avec gestion des paiements Mobile Money (TMoney, Flooz) et suivi de livraison en temps réel.",
      tags: ["Next.js", "Node.js", "API Mobile Money"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Application de Gestion Agricole (AgriTech)",
      description: "Solution mobile hors-ligne pour les coopératives agricoles, permettant le suivi des récoltes, la gestion des stocks et la connexion aux acheteurs.",
      tags: ["React Native", "Firebase", "Offline-first"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Site Vitrine Corporate & CRM",
      description: "Refonte complète du site web d'un cabinet de conseil, couplée à un CRM interne sur mesure pour la gestion de la relation client.",
      tags: ["WordPress", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Réalisations</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des projets que nous avons livrés avec excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}