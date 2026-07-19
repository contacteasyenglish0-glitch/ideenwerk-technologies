export default function Team() {
  const team = [
    { name: "[Votre Nom]", role: "Fondateur & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Amina K.", role: "Lead Développeuse", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "David M.", role: "Designer UX/UI", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Notre Équipe</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Des experts passionnés qui donnent vie à vos projets digitaux.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-500 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}