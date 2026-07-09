import Navbar from '@/components/Navbar';
import { 
  Globe, Server, Smartphone, Database, Rocket, Shield, 
  CheckCircle2, ArrowRight, Code2, Cloud, BarChart3,
  Zap, Users, Clock, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: "Sites Web Vitrine",
    subtitle: "Présentez votre marque avec élégance",
    description: "Des sites web modernes, rapides et optimisés pour le SEO qui captivent vos visiteurs et génèrent des leads qualifiés.",
    features: [
      "Design responsive (mobile, tablette, desktop)",
      "Optimisation SEO avancée",
      "Intégration réseaux sociaux",
      "Formulaire de contact personnalisé",
      "Hébergement sécurisé inclus",
      "Formation à l'utilisation"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    idealFor: "PME, restaurants, écoles, professionnels indépendants",
    price: "À partir de 300 000 FCFA",
    color: "blue"
  },
  {
    icon: Server,
    title: "Applications Web",
    subtitle: "Plateformes puissantes et scalables",
    description: "Des applications web robustes construites avec les technologies les plus modernes pour automatiser vos processus métier.",
    features: [
      "Architecture moderne et scalable",
      "Base de données optimisée",
      "API RESTful sécurisée",
      "Tableau de bord admin intuitif",
      "Authentification multi-niveaux",
      "Sauvegarde automatique"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    idealFor: "Startups, grandes entreprises, plateformes SaaS",
    price: "Sur devis",
    color: "purple"
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    subtitle: "Touchez vos clients partout",
    description: "Des applications iOS et Android natives ou cross-platform pour offrir une expérience mobile exceptionnelle à vos utilisateurs.",
    features: [
      "Compatible iOS et Android",
      "Notifications push",
      "Mode hors-ligne",
      "Intégration paiement mobile",
      "Géolocalisation",
      "Publication sur App Store/Play Store"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Expo"],
    idealFor: "E-commerce, services de livraison, réseaux sociaux",
    price: "Sur devis",
    color: "green"
  },
  {
    icon: Database,
    title: "Digitalisation PME",
    subtitle: "Modernisez votre gestion",
    description: "Des logiciels sur mesure pour gérer vos stocks, factures, employés et clients de manière efficace et adaptée au contexte africain.",
    features: [
      "Gestion de stocks en temps réel",
      "Facturation électronique",
      "Suivi des paiements Mobile Money",
      "Gestion des employés et paie",
      "Rapports et statistiques",
      "Export comptable"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "T-Money API"],
    idealFor: "Commerces, grossistes, distributeurs, PME",
    price: "À partir de 500 000 FCFA",
    color: "orange"
  },
  {
    icon: Rocket,
    title: "Développement MVP",
    subtitle: "De l'idée au prototype en 30 jours",
    description: "Nous transformons votre idée de startup en un produit minimum viable (MVP) fonctionnel pour tester rapidement votre marché.",
    features: [
      "Atelier de définition du produit",
      "Design UX/UI rapide",
      "Développement agile en sprints",
      "Tests utilisateurs",
      "Itérations rapides",
      "Préparation au lancement"
    ],
    technologies: ["Next.js", "React", "Supabase", "Vercel"],
    idealFor: "Entrepreneurs, startups, innovateurs",
    price: "Forfait 30 jours",
    color: "red"
  },
  {
    icon: Shield,
    title: "Maintenance & Sécurité",
    subtitle: "Protection et support 24/7",
    description: "Gardez votre site et vos applications sécurisés, à jour et performants avec notre service de maintenance continue.",
    features: [
      "Mises à jour de sécurité régulières",
      "Sauvegardes automatiques",
      "Monitoring 24/7",
      "Support technique réactif",
      "Optimisation des performances",
      "Rapports mensuels"
    ],
    technologies: ["Monitoring", "Backup", "SSL", "CDN"],
    idealFor: "Toutes entreprises avec présence digitale",
    price: "À partir de 50 000 FCFA/mois",
    color: "slate"
  }
];

const process = [
  {
    step: "01",
    title: "Découverte",
    description: "Nous analysons vos besoins, votre marché et vos objectifs lors d'un appel de consultation gratuit.",
    icon: Users
  },
  {
    step: "02",
    title: "Conception",
    description: "Nous créons des maquettes et prototypes pour visualiser votre projet avant le développement.",
    icon: Code2
  },
  {
    step: "03",
    title: "Développement",
    description: "Notre équipe développe votre solution avec les technologies les plus modernes et performantes.",
    icon: Zap
  },
  {
    step: "04",
    title: "Lancement",
    description: "Nous déployons votre projet, formons votre équipe et assurons un suivi post-lancement.",
    icon: Rocket
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions digitales complètes pour accompagner votre entreprise 
            à chaque étape de sa transformation numérique avec Ideenwerk Technologies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Contenu */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-${service.color}-100 text-${service.color}-600 rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                      <p className="text-slate-500">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                      Ce qui est inclus :
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                      Technologies utilisées :
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For & Price */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Users className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Idéal pour :</p>
                        <p className="text-slate-900 font-medium">{service.idealFor}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Investissement :</p>
                        <p className="text-slate-900 font-bold text-lg">{service.price}</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                  >
                    Demander un devis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Visuel (Placeholder) */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-square bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 rounded-3xl flex items-center justify-center`}>
                    <service.icon className={`w-32 h-32 text-${service.color}-400 opacity-50`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Processus</h2>
            <p className="text-xl text-slate-300">Une méthodologie éprouvée par Ideenwerk Technologies pour garantir le succès de votre projet</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.step}</div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <step.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez Ideenwerk Technologies pour une consultation gratuite et un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/pourquoi-nous" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Pourquoi nous choisir
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}