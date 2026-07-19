export default function Team() {
  const team = [
    { 
      name: "Godfriend K. Agbevivi", 
      role: "Fondateur & CEO", 
      image: "/team/ceo.jpg" 
    },
    { 
      name: "Ariana Swift", 
      role: "Directrice Technique (CTO)", 
      image: "/team/cto.jpg" 
    },
    { 
      name: "Junior Gnom", 
      role: "Lead Développeuse", 
      image: "/team/lead-dev.jpg" 
    },
    { 
      name: "Nahhan Sweetlife", 
      role: "Designer UX/UI", 
      image: "/team/designer.jpg" 
    }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-500 transition-colors">
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