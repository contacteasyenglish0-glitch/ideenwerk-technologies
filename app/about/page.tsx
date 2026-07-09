import Navbar from '@/components/Navbar';
import { 
  Target, Eye, Heart, Users, Globe, Zap, Award, 
  TrendingUp, Code2, Lightbulb, Shield, Coffee,
  MapPin, Calendar, Mail, Phone, CheckCircle,
  Star, Rocket, Sparkles, ArrowRight, Quote
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous ne faisons aucun compromis sur la qualité. Chaque ligne de code, chaque pixel de design, chaque interaction utilisateur doit être parfait. Notre standard, c'est l'excellence."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Nous aimons profondément ce que nous faisons. Cette passion se traduit par un engagement total, des heures de travail acharné et une fierté immense à chaque livraison."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons main dans la main avec nos clients. Votre succès est notre succès. Nous croyons que les meilleurs projets naissent d'un partenariat authentique."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la technologie pour créer des solutions uniques et avant-gardistes. L'innovation n'est pas un mot chez nous, c'est notre ADN."
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "La transparence et l'honnêteté sont au cœur de notre relation client. Pas de surprises, pas de frais cachés, que des résultats concrets et mesurables."
  },
  {
    icon: Globe,
    title: "Impact africain",
    description: "Nous créons des solutions pensées pour l'Afrique, par des Africains qui comprennent les réalités du continent. Notre mission : contribuer au développement digital de l'Afrique."
  }
];

const team = [
  {
    name: "Godfriend K. Agbevivi",
    role: "Fondateur & CEO",
    bio: "Visionnaire passionné par la technologie et l'entrepreneuriat, il a fondé Ideenwerk Technologies avec la conviction que le digital peut transformer l'Afrique. Il pilote la stratégie globale et le développement commercial avec une énergie contagieuse.",
    image: "/team/ceo.jpg",
    social: {
      linkedin: "#",
      email: "ceo@ideenwerk-technologies.com"
    }
  },
  {
    name: "Ariana Swift",
    role: "Directrice Technique (CTO)",
    bio: "Experte en architecture logicielle et en développement full-stack avec une maîtrise exceptionnelle des technologies modernes. Elle supervise toute la stratégie technique, choisit les meilleures solutions et garantit la robustesse de nos produits.",
    image: "/team/cto.jpg",
    social: {
      linkedin: "#",
      email: "tech@ideenwerk-technologies.com"
    }
  },
  {
    name: "Junior Gnom",
    role: "Lead Developer",
    bio: "Expert full-stack avec une maîtrise parfaite de React, Node.js et des architectures cloud. Il supervise le développement de tous nos projets, forme les développeurs juniors et garantit la qualité technique irréprochable de nos livrables.",
    image: "/team/lead-dev.jpg",
    social: {
      linkedin: "#",
      email: "dev@ideenwerk-technologies.com"
    }
  },
  {
    name: "Nahhan Sweetlife",
    role: "Lead UI/UX Designer",
    bio: "Créative visionnaire et passionnée par l'expérience utilisateur, elle conçoit des interfaces intuitives et magnifiques. Elle s'assure que chaque produit Ideenwerk offre une expérience fluide, moderne et mémorable.",
    image: "/team/designer.jpg",
    social: {
      linkedin: "#",
      email: "design@ideenwerk-technologies.com"
    }
  }
];

const stats = [
  { icon: Users, value: "50+", label: "Clients satisfaits", color: "blue" },
  { icon: Code2, value: "120+", label: "Projets réalisés", color: "green" },
  { icon: Award, value: "5", label: "Années d'expertise", color: "purple" },
  { icon: Globe, value: "15+", label: "Pays couverts", color: "orange" }
];

const timeline = [
  {
    year: "2021",
    title: "Création d'Ideenwerk",
    description: "Fondation de l'agence à Lomé avec une vision claire : digitaliser l'Afrique. Premiers projets pilotes avec des PME locales."
  },
  {
    year: "2022",
    title: "Expansion régionale",
    description: "Premiers clients au Bénin et au Togo. Équipe qui passe de 2 à 6 personnes. Lancement de notre premier produit SaaS."
  },
  {
    year: "2023",
    title: "Croissance accélérée",
    description: "Expansion au Sénégal et en Côte d'Ivoire. Plus de 50 projets livrés. Reconnaissance comme agence digitale de référence au Togo."
  },
  {
    year: "2024",
    title: "Leader panafricain",
    description: "Présence dans 15+ pays africains. Équipe de 12 experts. Lancement de solutions innovantes pour le marché africain."
  },
  {
    year: "2025",
    title: "Innovation continue",
    description: "Intégration de l'IA dans nos solutions. Partenariats stratégiques avec des acteurs majeurs du continent. Objectif : 200+ clients."
  }
];

const testimonials = [
  {
    name: "Kofi Mensah",
    role: "Directeur Général, PME togolaise",
    quote: "Ideenwerk a complètement transformé notre façon de travailler. Leur logiciel de gestion nous fait gagner 15h par semaine. L'équipe est professionnelle, à l'écoute et comprend vraiment les réalités africaines.",
    rating: 5,
    project: "Logiciel de gestion sur mesure"
  },
  {
    name: "Aminata Diallo",
    role: "Fondatrice, Startup fintech",
    quote: "Notre MVP a été livré en exactement 30 jours comme promis. La qualité du code et du design est exceptionnelle. Nous avons pu lever des fonds grâce à ce prototype. Je recommande Ideenwerk sans hésitation.",
    rating: 5,
    project: "MVP Application mobile"
  },
  {
    name: "Jean-Pierre Kouadio",
    role: "Propriétaire, Chaîne de boutiques",
    quote: "Mon site e-commerce m'a permis de doubler mes ventes en 3 mois. Le design est magnifique, le site est ultra-rapide même en 3G, et l'intégration Mobile Money fonctionne parfaitement. Merci Ideenwerk !",
    rating: 5,
    project: "Site e-commerce complet"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>L'usine à idées pour l'Afrique digitale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            À propos d'Ideenwerk<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Technologies
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Une agence digitale passionnée qui transforme les entreprises africaines 
            grâce à des solutions technologiques innovantes, adaptées aux réalités du continent.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow hover:-translate-y-1 duration-300">
                <div className={`w-14 h-14 bg-${stat.color}-100 text-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4" />
                <span>Notre histoire</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Nés d'une vision,<br />
                <span className="text-blue-600">portés par la passion</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Ideenwerk Technologies est née d'une conviction profonde : <strong className="text-slate-900">l'Afrique mérite des solutions digitales conçues pour elle, par elle</strong>.
                </p>
                <p>
                  Fondée au Togo en 2021, notre agence a rapidement compris que les entreprises africaines avaient des besoins spécifiques : paiements Mobile Money, connexions internet intermittentes, budgets adaptés, et une compréhension culturelle du marché.
                </p>
                <p>
                  Là où les agences internationales proposaient des solutions génériques, nous avons choisi de créer des produits <strong className="text-slate-900">pensés pour le terrain africain</strong>. Des solutions qui fonctionnent vraiment, pas seulement sur le papier.
                </p>
                <p>
                  Aujourd'hui, nous intervenons dans <strong className="text-slate-900">plus de 15 pays africains</strong>, accompagnant des startups innovantes, des PME en croissance et des grandes entreprises dans leur transformation digitale. Chaque projet est une nouvelle aventure, chaque client devient un partenaire.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Basés à Lomé, Togo</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Actifs depuis 2021</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>15+ pays couverts</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <Globe className="w-48 h-48 text-blue-400 opacity-50 relative z-10" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Croissance annuelle</p>
                    <p className="text-2xl font-bold text-slate-900">+150%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Satisfaction client</p>
                    <p className="text-2xl font-bold text-slate-900">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Notre parcours</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              De la création à aujourd'hui, chaque étape nous a rapprochés de notre vision
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center z-10 shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Notre Mission</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                Rendre la technologie <strong>accessible, utile et adaptée</strong> pour toutes les entreprises africaines. Nous croyons que le digital est un levier puissant de développement économique et social pour le continent. Chaque solution que nous créons doit avoir un <strong>impact mesurable</strong> sur la vie des Africains.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Notre Vision</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                Devenir le <strong>partenaire technologique de référence en Afrique</strong>, reconnu pour notre excellence, notre innovation et notre impact positif sur l'économie et la société africaines. Nous voulons prouver que l'Afrique peut créer des solutions digitales de classe mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes non-négociables qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe d'Experts</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Des passionnés qui mettent leur talent et leur énergie au service de votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-2 duration-300">
                <div className="aspect-square rounded-2xl mb-6 overflow-hidden bg-slate-800 shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.social.linkedin && member.social.linkedin !== "#" && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <span className="text-sm font-bold">in</span>
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-slate-600">La satisfaction de nos clients est notre plus belle récompense</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 mb-1">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">Projet : {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-slate-600">Les raisons qui font d'Ideenwerk le partenaire idéal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Expertise locale</h3>
              <p className="text-slate-600 leading-relaxed">Nous comprenons les défis et opportunités du marché africain. Nos solutions sont pensées pour fonctionner sur le terrain.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Technologies modernes</h3>
              <p className="text-slate-600 leading-relaxed">Nous utilisons les dernières technologies (Next.js, React, Node.js) pour des solutions performantes et durables.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Accompagnement personnalisé</h3>
              <p className="text-slate-600 leading-relaxed">Un suivi dédié du début à la fin de votre projet, et bien après. Nous sommes votre partenaire, pas juste un prestataire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prêt à écrire la prochaine<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              page de votre succès ?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Discutons de votre projet et voyons comment Ideenwerk Technologies peut vous aider 
            à atteindre vos objectifs. La consultation est gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/22896315029"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              WhatsApp direct
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}