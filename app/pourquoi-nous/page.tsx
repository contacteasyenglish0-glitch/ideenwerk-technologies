import Navbar from '@/components/Navbar';
import { 
  Zap, Shield, Users, Globe, Clock, Award, 
  CheckCircle, TrendingUp, Code2, Heart,
  Target, Eye, ArrowRight, Phone, Mail,
  Rocket, Sparkles, Star, ThumbsUp,
  Briefcase, Lightbulb, Handshake, BarChart3,
  Lock, HeadphonesIcon, Wrench, DollarSign
} from 'lucide-react';
import Link from 'next/link';

const advantages = [
  {
    icon: Globe,
    title: "Expertise 100% africaine",
    description: "Nous comprenons les réalités du continent : paiements Mobile Money, connexions intermittentes, besoins locaux. Nos solutions sont pensées pour l'Afrique, par des Africains.",
    color: "blue"
  },
  {
    icon: Code2,
    title: "Technologies de pointe",
    description: "Next.js, React, Node.js, IA... Nous utilisons les mêmes technologies que les grandes entreprises internationales, adaptées à votre budget.",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Livraison rapide",
    description: "Un site vitrine en 1-2 semaines, un MVP en 30 jours. Nous respectons les délais grâce à notre méthodologie agile et notre expérience.",
    color: "green"
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Code propre, design soigné, tests rigoureux. Nous ne livrons que des produits dont nous sommes fiers. Support technique inclus après livraison.",
    color: "red"
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié, des réunions régulières, une formation à l'utilisation. Nous sommes à vos côtés du début à la fin, et bien après.",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Nos solutions sont conçues pour générer des résultats concrets : plus de clients, moins de coûts, plus de productivité. Nous suivons les KPIs avec vous.",
    color: "cyan"
  }
];

const steps = [
  {
    number: "01",
    title: "Consultation gratuite",
    description: "Nous analysons vos besoins, votre marché et vos objectifs lors d'un appel de 30 minutes. C'est gratuit et sans engagement.",
    icon: Users
  },
  {
    number: "02",
    title: "Devis personnalisé",
    description: "Nous vous envoyons un devis détaillé avec calendrier, livrables et tarifs transparents. Pas de frais cachés, jamais.",
    icon: Target
  },
  {
    number: "03",
    title: "Développement agile",
    description: "Nous développons votre solution par sprints, avec des points réguliers pour valider l'avancement. Vous gardez le contrôle.",
    icon: Code2
  },
  {
    number: "04",
    title: "Livraison & formation",
    description: "Nous déployons votre projet, formons votre équipe et assurons un suivi post-lancement de 3 mois inclus.",
    icon: Rocket
  }
];

const testimonials = [
  {
    name: "Kofi Mensah",
    role: "Directeur, PME togolaise",
    quote: "Ideenwerk a transformé notre façon de travailler. Notre nouveau logiciel de gestion nous fait gagner 15h par semaine. L'équipe est professionnelle et à l'écoute.",
    rating: 5,
    project: "Logiciel de gestion PME"
  },
  {
    name: "Aminata Diallo",
    role: "Fondatrice de startup",
    quote: "Notre MVP a été livré en 30 jours comme promis. Nous avons pu lever des fonds grâce à ce prototype. Je recommande vivement Ideenwerk.",
    rating: 5,
    project: "MVP Startup"
  },
  {
    name: "Jean-Pierre Kouadio",
    role: "Propriétaire de boutique",
    quote: "Mon site web m'a permis de doubler mes ventes en 3 mois. Le design est magnifique et le site est très rapide. Merci Ideenwerk !",
    rating: 5,
    project: "Site e-commerce"
  }
];

const guarantees = [
  { icon: DollarSign, text: "Devis gratuit et sans engagement" },
  { icon: TrendingUp, text: "Paiement échelonné (40/30/30)" },
  { icon: Code2, text: "Code source livré en fin de projet" },
  { icon: HeadphonesIcon, text: "Support technique 3 mois inclus" },
  { icon: Lock, text: "Confidentialité garantie (NDA)" },
  { icon: ThumbsUp, text: "Satisfaction ou on recommence" }
];

const stats = [
  { value: "98%", label: "Clients satisfaits", icon: Star },
  { value: "30j", label: "Délai moyen MVP", icon: Clock },
  { value: "24h", label: "Temps de réponse", icon: HeadphonesIcon },
  { value: "15+", label: "Pays couverts", icon: Globe }
];

const comparisons = [
  { 
    feature: "Technologies modernes", 
    ideaswerk: true, 
    others: "Parfois" 
  },
  { 
    feature: "Compréhension du marché africain", 
    ideaswerk: true, 
    others: "Rarement" 
  },
  { 
    feature: "Paiement Mobile Money accepté", 
    ideaswerk: true, 
    others: "Non" 
  },
  { 
    feature: "Support en français local", 
    ideaswerk: true, 
    others: "Limité" 
  },
  { 
    feature: "Livraison en 30 jours", 
    ideaswerk: true, 
    others: "2-6 mois" 
  },
  { 
    feature: "Code source livré", 
    ideaswerk: true, 
    others: "Souvent non" 
  },
  { 
    feature: "Tarifs transparents", 
    ideaswerk: true, 
    others: "Frais cachés" 
  }
];

export default function PourquoiNousPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Pourquoi choisir Ideenwerk Technologies ?</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Le partenaire tech <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              de confiance en Afrique
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            6 raisons qui font de nous le choix idéal pour votre transformation digitale. 
            Plus qu'une agence, un partenaire de croissance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos 6 engagements</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ce qui nous différencie et ce que vous gagnez à travailler avec nous
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-${advantage.color}-100 text-${advantage.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${advantage.color}-600 group-hover:text-white transition-colors`}>
                  <advantage.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ideenwerk vs Les autres</h2>
            <p className="text-xl text-slate-600">La différence est claire</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-4 font-bold">
              <div>Critère</div>
              <div className="text-center text-blue-400">Ideenwerk</div>
              <div className="text-center text-slate-400">Les autres</div>
            </div>
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 border-b border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
              >
                <div className="font-medium text-slate-700">{item.feature}</div>
                <div className="text-center">
                  <CheckCircle className="w-5 h-5 text-green-500 inline" />
                </div>
                <div className="text-center text-slate-500 text-sm">{item.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre processus en 4 étapes</h2>
            <p className="text-xl text-slate-600">Simple, transparent et efficace</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.number}</div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <step.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-slate-600">La satisfaction de nos clients est notre meilleure publicité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 mt-1">Projet : {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos garanties</h2>
            <p className="text-xl text-slate-300">Votre tranquillité d'esprit est notre priorité</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <guarantee.icon className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 font-medium">{guarantee.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Africa Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Pourquoi une agence africaine ?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Le marché africain a des <strong>spécificités uniques</strong> : paiements Mobile Money (T-Money, Moov Money, Wave), connexions internet parfois instables, besoins locaux particuliers, et une culture d'achat différente.
                </p>
                <p>
                  Les agences étrangères ne comprennent pas ces réalités. Elles créent des sites beaux mais <strong>inefficaces sur le terrain</strong>.
                </p>
                <p>
                  Chez Ideenwerk Technologies, nous vivons ces réalités au quotidien. Nos solutions sont <strong>conçues pour fonctionner en Afrique</strong>, avec des africains, pour les africains.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Paiements Mobile Money</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Sites légers et rapides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Support en français local</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Prix adaptés au marché</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center">
                <Globe className="w-48 h-48 text-blue-400 opacity-50" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Partenaire local</p>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                  </div>
                </div>
              </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer l'aventure ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Rejoignez les entreprises africaines qui ont choisi Ideenwerk Technologies 
            pour leur transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/22896315029"
              target="_blank"
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              WhatsApp direct
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}