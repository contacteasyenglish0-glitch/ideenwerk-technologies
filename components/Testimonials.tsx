export default function Testimonials() {
  const testimonials = [
    {
      quote: "Une équipe réactive et professionnelle. Notre nouveau site a augmenté nos demandes de devis de 40% en seulement deux mois.",
      author: "Koffi A.",
      role: "Directeur Commercial, Lomé"
    },
    {
      quote: "Ideenwerk a parfaitement compris nos besoins spécifiques pour l'application mobile. Le respect des délais a été impressionnant.",
      author: "Amina D.",
      role: "Fondatrice de Startup, Abidjan"
    },
    {
      quote: "Le logiciel de gestion qu'ils ont développé pour nous a simplifié toute notre comptabilité. Un investissement qui vaut largement son prix.",
      author: "Jean-Marc B.",
      role: "Gérant de PME, Cotonou"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ce Que Disent Nos Clients</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
              <div className="text-blue-500 text-4xl absolute top-4 left-6">"</div>
              <p className="text-slate-600 italic mb-6 mt-4 relative z-10">{item.quote}</p>
              <div>
                <div className="font-bold text-slate-900">{item.author}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}