export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Qui Sommes-Nous ?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ideenwerk Technologies est un partenaire de confiance dédié à la transformation digitale des entreprises africaines.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">2023</div>
            <div className="text-slate-700 font-semibold">Année de Création</div>
            <p className="text-sm text-slate-500 mt-2">Une expertise jeune, dynamique et tournée vers l'innovation.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">Lomé</div>
            <div className="text-slate-700 font-semibold">Siège Social</div>
            <p className="text-sm text-slate-500 mt-2">Basés au Togo, avec une intervention sur toute l'Afrique.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">360°</div>
            <div className="text-slate-700 font-semibold">Nos Spécialités</div>
            <p className="text-sm text-slate-500 mt-2">Développement Web, Applications Mobiles, Logiciels & Cloud.</p>
          </div>
        </div>
      </div>
    </section>
  );
}