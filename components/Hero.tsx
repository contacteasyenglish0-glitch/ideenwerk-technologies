'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe2, CheckCircle2, Play } from 'lucide-react';
import Link from 'next/link';

const quickStats = [
  { value: "120+", label: "Projets livrés" },
  { value: "15+", label: "Pays couverts" },
  { value: "98%", label: "Satisfaction" },
  { value: "30j", label: "MVP livré" }
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
                           linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>
      
      {/* Blue Glow Effects */}
      <div className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-blue-400/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-cyan-400/15 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-200 shadow-lg shadow-blue-500/10 mb-8"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              L'usine à idées pour l'Afrique digitale
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
          >
            Transformez vos idées <br className="hidden md:block" />
            en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">réalités digitales</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Ideenwerk Technologies conçoit des plateformes web performantes, 
            des applications mobiles innovantes et des logiciels sur mesure 
            qui propulsent les entreprises africaines vers le sommet.
          </motion.p>

          {/* Features rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Livraison rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Expertise africaine</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link 
              href="/services" 
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="group bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 duration-300"
            >
              <Play className="w-4 h-4 fill-current" />
              Démarrer un projet
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {quickStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trusted by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-200"
          >
            <p className="text-sm text-slate-500 mb-6">
              Ils nous font confiance à travers toute l'Afrique
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-slate-400 font-bold text-lg">🇹🇬 Togo</div>
              <div className="text-slate-400 font-bold text-lg">🇧🇯 Bénin</div>
              <div className="text-slate-400 font-bold text-lg">🇸🇳 Sénégal</div>
              <div className="text-slate-400 font-bold text-lg">🇨🇮 Côte d'Ivoire</div>
              <div className="text-slate-400 font-bold text-lg">🇨🇲 Cameroun</div>
              <div className="text-slate-400 font-bold text-lg">🇬🇭 Ghana</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}