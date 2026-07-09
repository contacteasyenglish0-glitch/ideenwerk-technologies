'use client';
import { motion } from 'framer-motion';
import { 
  Globe, Server, Smartphone, Database, Rocket, Shield, 
  Cloud, BarChart3, ArrowRight, CheckCircle2, Sparkles,
  Zap, Lock, TrendingUp, Users
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { 
    icon: Globe, 
    title: "Sites Web Vitrine", 
    subtitle: "Présentez votre marque avec élégance",
    desc: "Des sites web modernes, rapides et optimisés pour le SEO qui captivent vos visiteurs et génèrent des leads qualifiés. Design responsive garanti.",
    features: ["Design responsive", "SEO avancé", "Hébergement sécurisé", "Formation incluse"],
    price: "À partir de 300 000 FCFA",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Server, 
    title: "Applications Web", 
    subtitle: "Plateformes puissantes et scalables",
    desc: "Des applications web robustes construites avec les technologies les plus modernes pour automatiser vos processus métier et booster votre productivité.",
    features: ["Architecture scalable", "API RESTful", "Dashboard admin", "Sauvegardes auto"],
    price: "Sur devis",
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: Smartphone, 
    title: "Applications Mobiles", 
    subtitle: "Touchez vos clients partout",
    desc: "Apps iOS et Android natives ou cross-platform pour offrir une expérience mobile exceptionnelle. Intégration Mobile Money incluse.",
    features: ["iOS & Android", "Paiement mobile", "Mode hors-ligne", "Push notifications"],
    price: "Sur devis",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: Database, 
    title: "Digitalisation PME", 
    subtitle: "Modernisez votre gestion",
    desc: "Logiciels sur mesure pour gérer vos stocks, factures, employés et clients de manière efficace et adaptée au contexte africain.",
    features: ["Gestion de stocks", "Facturation", "Mobile Money", "Rapports & stats"],
    price: "À partir de 500 000 FCFA",
    color: "orange",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    icon: Rocket, 
    title: "Développement MVP", 
    subtitle: "De l'idée au prototype en 30 jours",
    desc: "Nous transformons votre idée de startup africaine en un produit minimum viable fonctionnel pour tester rapidement votre marché et lever des fonds.",
    features: ["Atelier produit", "Design UX/UI", "Développement agile", "Tests utilisateurs"],
    price: "Forfait 30 jours",
    color: "red",
    gradient: "from-red-500 to-rose-500"
  },
  { 
    icon: Shield, 
    title: "Maintenance & Sécurité", 
    subtitle: "Protection et support 24/7",
    desc: "Gardez votre site et vos applications sécurisés, à jour et performants avec notre service de maintenance continue et notre support réactif.",
    features: ["Mises à jour sécurité", "Sauvegardes", "Monitoring 24/7", "Support réactif"],
    price: "À partir de 50 000 FCFA/mois",
    color: "slate",
    gradient: "from-slate-600 to-slate-800"
  },
  { 
    icon: Cloud, 
    title: "Solutions Cloud", 
    subtitle: "Infrastructure scalable et sécurisée",
    desc: "Hébergement sécurisé et scalable pour vos applications et données. Performance optimale en Afrique grâce à notre réseau CDN.",
    features: ["Hébergement cloud", "CDN Afrique", "SSL gratuit", "Monitoring"],
    price: "Sur devis",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500"
  },
  { 
    icon: BarChart3, 
    title: "Transformation Digitale", 
    subtitle: "Accompagnement stratégique",
    desc: "Accompagnement stratégique pour digitaliser votre entreprise étape par étape. Audit, stratégie, formation et mise en œuvre.",
    features: ["Audit digital", "Stratégie", "Formation équipes", "Suivi & KPIs"],
    price: "Sur devis",
    color: "indigo",
    gradient: "from-indigo-500 to-purple-500"
  },
];

const benefits = [
  { icon: Zap, title: "Livraison rapide", desc: "MVP en 30 jours, site vitrine en 1-2 semaines" },
  { icon: Lock, title: "Code sécurisé", desc: "Bonnes pratiques, tests rigoureux, audits" },
  { icon: TrendingUp, title: "ROI mesurable", desc: "Solutions conçues pour générer des résultats" },
  { icon: Users, title: "Support dédié", desc: "Un interlocuteur unique tout au long du projet" }
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Nos expertises</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Des solutions digitales <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              complètes et sur mesure
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une équipe full-stack maîtrisant l'ensemble de la chaîne de production digitale 
            pour accompagner les entreprises africaines dans leur transformation numérique.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-3">{service.subtitle}</p>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                {service.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Investissement</p>
                  <p className="text-sm font-bold text-slate-900">{service.price}</p>
                </div>
                <Link 
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi choisir Ideenwerk ?
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                4 engagements qui font la différence à chaque projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Un projet en tête ?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et obtenez un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://wa.me/22896315029"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              WhatsApp direct
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}