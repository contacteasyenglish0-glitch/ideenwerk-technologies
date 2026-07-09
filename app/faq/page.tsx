'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, ChevronDown, Phone, Mail, ArrowRight,
  Globe, Server, Smartphone, Database, CreditCard, Clock,
  Shield, Code, Palette, TrendingUp, Users, CheckCircle,
  HelpCircle, Zap, Lock, HeadphonesIcon, FileText
} from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    id: 'general',
    title: 'Questions générales',
    icon: MessageCircle,
    color: 'blue',
    questions: [
      {
        question: "Qu'est-ce que Ideenwerk Technologies ?",
        answer: "Ideenwerk Technologies est une agence digitale basée au Togo, spécialisée dans la création de sites web, d'applications mobiles, de logiciels sur mesure et la transformation digitale des entreprises africaines. Notre nom signifie 'Usine à Idées' en allemand, reflétant notre approche innovante. Nous intervenons sur tout le continent africain."
      },
      {
        question: "Où êtes-vous situés ?",
        answer: "Notre siège est à Lomé, au Togo. Cependant, nous travaillons principalement à distance avec des clients dans toute l'Afrique de l'Ouest et au-delà : Sénégal, Côte d'Ivoire, Bénin, Cameroun, Burkina Faso, Mali, Ghana, Nigeria, etc. Notre modèle de travail à distance nous permet d'intervenir rapidement partout."
      },
      {
        question: "Quels sont vos horaires d'ouverture ?",
        answer: "Nous sommes ouverts du lundi au vendredi de 08h00 à 18h00, et le samedi de 09h00 à 13h00. Nous sommes fermés le dimanche. Cependant, notre chatbot IA est disponible 24h/24 et 7j/7 pour répondre à vos questions urgentes. Pour les clients en maintenance, nous offrons un support technique réactif."
      },
      {
        question: "Comment puis-je vous contacter ?",
        answer: "Vous avez plusieurs options :\n• Téléphone : +228 96 31 50 29 ou +228 70 88 86 99\n• WhatsApp : +228 96 31 50 29 (réponse rapide garantie)\n• Email : contact@ideenwerk-technologies.com\n• Formulaire de contact sur notre site\n• Chatbot IA disponible 24/7 sur le site\nNous répondons généralement sous 24h ouvrées."
      },
      {
        question: "Travaillez-vous uniquement avec des entreprises africaines ?",
        answer: "Notre expertise est focalisée sur le marché africain, mais nous acceptons des projets internationaux. Notre compréhension des réalités africaines (paiements Mobile Money, contraintes de connexion, besoins locaux) est notre force principale. Nous travaillons aussi bien avec des startups locales qu'avec des entreprises internationales souhaitant s'implanter en Afrique."
      }
    ]
  },
  {
    id: 'services',
    title: 'Nos services',
    icon: Globe,
    color: 'green',
    questions: [
      {
        question: "Quels services proposez-vous exactement ?",
        answer: "Nous offrons une gamme complète de services digitaux :\n• Sites web vitrine et e-commerce\n• Applications web sur mesure (SaaS, plateformes)\n• Applications mobiles iOS et Android\n• Logiciels de gestion pour PME (stocks, facturation, RH)\n• Développement de MVP pour startups\n• Solutions cloud et hébergement\n• Maintenance et support technique\n• Transformation digitale et conseil\n• Design UI/UX\n• Intégration de paiements Mobile Money"
      },
      {
        question: "Combien coûte un site web vitrine ?",
        answer: "Nos sites web vitrine commencent à partir de 300 000 FCFA. Le prix exact dépend de plusieurs facteurs :\n• Nombre de pages\n• Complexité du design\n• Fonctionnalités spécifiques (formulaire, blog, multilingue)\n• Intégrations (réseaux sociaux, Google Maps, WhatsApp)\n• Contenu (si vous avez déjà les textes et images)\n\nChaque projet est unique. Contactez-nous pour un devis gratuit et personnalisé sans engagement."
      },
      {
        question: "Combien de temps prend la création d'un site web ?",
        answer: "Les délais varient selon la complexité :\n• Site vitrine simple (3-5 pages) : 1 à 2 semaines\n• Site vitrine complexe : 2 à 4 semaines\n• Site e-commerce : 4 à 8 semaines\n• Application web sur mesure : 1 à 3 mois\n• MVP de startup : 30 jours (forfait dédié)\n\nNous établissons un calendrier précis avant de commencer et nous tenons nos délais. Notre méthodologie agile nous permet d'être rapides sans compromettre la qualité."
      },
      {
        question: "Proposez-vous la maintenance après livraison ?",
        answer: "Oui, absolument ! Nous proposons des forfaits de maintenance mensuels à partir de 50 000 FCFA/mois incluant :\n• Mises à jour de sécurité régulières\n• Sauvegardes automatiques quotidiennes\n• Monitoring 24/7 de la disponibilité\n• Support technique réactif\n• Optimisation des performances\n• Rapports mensuels d'activité\n\nLe premier mois de maintenance est offert pour tous nos projets. Les 3 premiers mois sont inclus pour les projets MVP."
      },
      {
        question: "Pouvez-vous créer un site e-commerce avec paiement Mobile Money ?",
        answer: "Oui, c'est l'une de nos spécialités ! Nous intégrons tous les moyens de paiement mobiles populaires en Afrique :\n• T-Money (Togo)\n• Moov Money (Togo, Bénin, Burkina)\n• Wave (Sénégal, Côte d'Ivoire)\n• Orange Money (Afrique de l'Ouest et Centrale)\n• MTN Mobile Money\n• PayPal et cartes bancaires (pour l'international)\n\nNous créons des boutiques en ligne complètes avec gestion des stocks, suivi des commandes, et notifications automatiques."
      },
      {
        question: "Développez-vous des applications mobiles natives ou hybrides ?",
        answer: "Nous utilisons principalement React Native et Flutter, qui sont des technologies cross-platform (hybrides). Cela nous permet de :\n• Développer une seule fois pour iOS et Android\n• Réduire les coûts de 30 à 40%\n• Livrer plus rapidement\n• Maintenir plus facilement\n\nCependant, pour des besoins très spécifiques (performances extrêmes, fonctionnalités hardware avancées), nous pouvons développer des applications natives (Swift pour iOS, Kotlin pour Android)."
      }
    ]
  },
  {
    id: 'technique',
    title: 'Aspects techniques',
    icon: Code,
    color: 'purple',
    questions: [
      {
        question: "Quelles technologies utilisez-vous ?",
        answer: "Nous utilisons les technologies les plus modernes et performantes :\n\nFrontend : Next.js, React, TypeScript, Tailwind CSS\nBackend : Node.js, Express, Python (Django/FastAPI)\nBases de données : PostgreSQL, MongoDB, MySQL, Supabase\nMobile : React Native, Flutter\nCloud : Vercel, AWS, Google Cloud, Firebase\nCMS : Strapi, WordPress (sur demande)\n\nNous choisissons les technologies en fonction de vos besoins spécifiques, de votre budget et des compétences de votre équipe interne."
      },
      {
        question: "Mon site sera-t-il compatible mobile ?",
        answer: "Oui, 100% ! Tous nos sites sont 'responsive design', c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans : smartphones, tablettes et ordinateurs. C'est inclus de base dans tous nos forfaits, car en Afrique, plus de 70% du trafic internet vient du mobile. Nous testons systématiquement sur différents appareils avant la livraison."
      },
      {
        question: "Proposez-vous l'hébergement de mon site ?",
        answer: "Oui, nous pouvons gérer l'hébergement de votre site sur des serveurs performants et sécurisés :\n• Vercel (pour les sites Next.js)\n• AWS (Amazon Web Services)\n• Google Cloud Platform\n• Serveurs dédiés (pour les gros projets)\n\nNos hébergements incluent :\n✓ Certificat SSL gratuit (HTTPS sécurisé)\n✓ Sauvegardes automatiques quotidiennes\n✓ Monitoring 24/7\n✓ CDN pour une vitesse optimale en Afrique\n✓ Support technique\n\nPrix : à partir de 15 000 FCFA/mois selon les besoins."
      },
      {
        question: "Puis-je modifier mon site moi-même après livraison ?",
        answer: "Oui, plusieurs options sont possibles :\n\n1. **Sites avec CMS** (WordPress, Strapi) : Vous avez un panneau d'administration intuitif pour modifier textes, images, ajouter des articles de blog, etc. Nous vous formons à l'utilisation.\n\n2. **Sites sur mesure** : Nous pouvons créer un panneau d'administration personnalisé selon vos besoins spécifiques.\n\n3. **Modifications par nos soins** : Si vous préférez nous confier les modifications, nous facturons à l'heure (25 000 FCFA/heure) ou via un forfait de maintenance mensuel.\n\nNous vous conseillons la meilleure option selon vos compétences techniques et votre temps disponible."
      },
      {
        question: "Mon site sera-t-il rapide même avec une connexion lente ?",
        answer: "Absolument ! Nous optimisons systématiquement les performances pour le marché africain :\n• Compression des images (format WebP)\n• Minification du code CSS et JavaScript\n• Mise en cache intelligente\n• Utilisation de CDN (Content Delivery Network)\n• Chargement différé (lazy loading)\n• Réduction du nombre de requêtes\n\nObjectif : temps de chargement inférieur à 3 secondes même en 3G. Nous utilisons Google PageSpeed Insights et visons un score supérieur à 90/100."
      },
      {
        question: "Le site sera-t-il sécurisé ?",
        answer: "La sécurité est notre priorité. Tous nos sites incluent :\n✓ Certificat SSL/HTTPS (chiffrement des données)\n✓ Protection contre les attaques XSS et CSRF\n✓ Validation et nettoyage des données entrantes\n✓ Mises à jour de sécurité automatiques\n✓ Sauvegardes régulières\n✓ Protection anti-spam pour les formulaires\n✓ Authentification sécurisée (pour les sites avec login)\n\nPour les sites e-commerce ou manipulant des données sensibles, nous ajoutons des couches de sécurité supplémentaires (2FA, chiffrement des données, audit de sécurité)."
      },
      {
        question: "Puis-je avoir un nom de domaine personnalisé ?",
        answer: "Oui, bien sûr ! Nous vous aidons à choisir et enregistrer votre nom de domaine :\n• .com (international)\n• .tg (Togo)\n• .sn (Sénégal)\n• .ci (Côte d'Ivoire)\n• .africa (panafricain)\n• Et bien d'autres extensions\n\nPrix d'enregistrement : à partir de 10 000 FCFA/an pour un .com, 25 000 FCFA/an pour un .tg\n\nNous pouvons aussi transférer un domaine que vous possédez déjà."
      }
    ]
  },
  {
    id: 'paiement',
    title: 'Paiement et devis',
    icon: CreditCard,
    color: 'orange',
    questions: [
      {
        question: "Comment se passe le paiement ?",
        answer: "Nous proposons un système de paiement échelonné pour faciliter la trésorerie :\n\n**Pour les projets standards :**\n• 40% à la signature du devis (démarrage)\n• 30% à mi-parcours (validation maquette/développement)\n• 30% à la livraison (mise en ligne)\n\n**Pour les petits projets (< 500 000 FCFA) :**\n• 50% au démarrage\n• 50% à la livraison\n\n**Pour la maintenance :**\n• Paiement mensuel ou trimestriel\n• Facture envoyée en début de période\n\nNous envoyons une facture professionnelle pour chaque paiement."
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons plusieurs moyens de paiement adaptés au contexte africain :\n\n✓ **Mobile Money** :\n  - T-Money (Togo)\n  - Moov Money (Togo, Bénin)\n  - Wave (Sénégal, Côte d'Ivoire)\n  - Orange Money\n  - MTN Mobile Money\n\n✓ **Virement bancaire** (UBA, Ecobank, BICIS, etc.)\n\n✓ **Espèces** (pour les clients à Lomé)\n\n✓ **PayPal** (pour les clients internationaux)\n\n✓ **Cartes bancaires** (via Stripe ou PayPal)\n\nTous nos paiements sont sécurisés et traçables."
      },
      {
        question: "Le devis est-il vraiment gratuit ?",
        answer: "Oui, 100% gratuit et sans engagement ! Le processus est le suivant :\n\n1. Vous nous contactez (téléphone, WhatsApp, email, formulaire)\n2. Nous programmons un appel de 30 minutes pour comprendre votre projet\n3. Nous analysons vos besoins et vous posons des questions techniques\n4. Sous 48h, nous vous envoyons un devis détaillé comprenant :\n   - Description précise des livrables\n   - Calendrier de réalisation\n   - Détail des coûts\n   - Conditions de paiement\n   - Garanties\n\nVous êtes libre d'accepter ou de refuser sans aucune obligation."
      },
      {
        question: "Proposez-vous des facilités de paiement pour les gros projets ?",
        answer: "Oui, pour les projets importants (supérieurs à 2 millions FCFA), nous pouvons adapter les modalités de paiement :\n\n• Échelonnement sur 6 à 12 mois\n• Paiement mensuel pendant le développement\n• Mise en place de contrats de location-vente\n\nNous étudions chaque demande au cas par cas. L'objectif est de rendre nos services accessibles aux PME africaines tout en garantissant notre viabilité économique.\n\nN'hésitez pas à nous faire part de vos contraintes budgétaires."
      },
      {
        question: "Y a-t-il des frais cachés ?",
        answer: "Non, absolument pas ! Chez Ideenwerk Technologies, nous croyons en la transparence totale :\n\n✓ Le devis détaille TOUS les coûts\n✓ Pas de frais de dossier cachés\n✓ Pas de frais de maintenance obligatoires (sauf si vous les choisissez)\n✓ L'hébergement et le nom de domaine sont optionnels (vous pouvez les gérer vous-même)\n\nLes seuls coûts récurrents sont :\n• Nom de domaine : 10 000 à 25 000 FCFA/an (si vous passez par nous)\n• Hébergement : 15 000 à 50 000 FCFA/mois (optionnel)\n• Maintenance : 50 000 FCFA/mois minimum (optionnel mais recommandé)\n\nTout est clairement indiqué dans le devis avant signature."
      }
    ]
  },
  {
    id: 'support',
    title: 'Support et maintenance',
    icon: HeadphonesIcon,
    color: 'red',
    questions: [
      {
        question: "Que se passe-t-il si mon site tombe en panne ?",
        answer: "Selon votre forfait de maintenance :\n\n**Forfait de base (50 000 FCFA/mois) :**\n• Intervention sous 24h ouvrées\n• Diagnostic et résolution du problème\n• Notification par email\n\n**Forfait premium (100 000 FCFA/mois) :**\n• Intervention sous 4h (même le week-end)\n• Support téléphonique prioritaire\n• Monitoring proactif (nous détectons les problèmes avant vous)\n\n**Sans maintenance :**\n• Intervention facturée à l'heure (25 000 FCFA/heure)\n• Délai selon disponibilité\n\nConseil : 95% de nos clients souscrivent à un forfait de maintenance pour la tranquillité d'esprit."
      },
      {
        question: "Puis-je avoir un support technique par téléphone ?",
        answer: "Oui, mais cela dépend du type de contrat :\n\n✓ **Clients en maintenance premium** : Support téléphonique prioritaire inclus\n✓ **Clients en maintenance de base** : Support téléphonique sur rendez-vous\n✓ **Clients sans maintenance** : Support téléphonique facturé (15 000 FCFA/appel)\n\nPour les questions rapides, nous privilégions WhatsApp (+228 96 31 50 29) ou l'email (support@ideenwerk-technologies.com) qui sont plus efficaces et traçables."
      },
      {
        question: "Formez-vous notre équipe à l'utilisation du site ?",
        answer: "Oui, la formation est incluse dans tous nos projets ! Selon la complexité :\n\n**Sites simples (vitrine) :**\n• Session de formation de 2h (en présentiel ou visio)\n• Documentation écrite (PDF)\n• Vidéos tutoriels\n• Support pendant 1 mois après livraison\n\n**Sites complexes (e-commerce, CMS personnalisé) :**\n• Formation de 4 à 8h selon les besoins\n• Documentation complète\n• Vidéos personnalisées\n• Support pendant 3 mois\n• Possibilité de former plusieurs personnes de votre équipe\n\nNous adaptons la formation à votre niveau technique. Pas besoin d'être un expert en informatique !"
      },
      {
        question: "Que se passe-t-il si je veux ajouter des fonctionnalités après ?",
        answer: "Aucun problème ! Les sites web évoluent avec votre business. Deux options :\n\n**Option 1 : Forfait d'évolution**\nNous estimons le temps nécessaire et vous envoyons un devis pour les nouvelles fonctionnalités. Délai : généralement 1 à 2 semaines.\n\n**Option 2 : Forfait de maintenance évolutive**\nPour les clients qui ont beaucoup de modifications régulières, nous proposons un forfait mensuel incluant un certain nombre d'heures de développement (ex: 10h/mois pour 200 000 FCFA).\n\nTarif horaire : 25 000 FCFA/heure\n\nNous conservons une documentation technique de votre projet, donc même si vous revenez vers nous 6 mois après, nous pouvons reprendre le développement facilement."
      }
    ]
  },
  {
    id: 'confidentialite',
    title: 'Confidentialité et propriété',
    icon: Lock,
    color: 'slate',
    questions: [
      {
        question: "Qui possède le code source du site ?",
        answer: "VOUS êtes le propriétaire du code source ! Dès que vous avez payé l'intégralité du projet, nous vous transférons :\n\n✓ Tous les fichiers sources du site\n✓ L'accès au dépôt de code (GitHub/GitLab)\n✓ La documentation technique\n✓ Les accès à la base de données\n\nNous ne gardons aucun droit sur votre site. Vous êtes libre de :\n• Le modifier vous-même\n• Faire appel à un autre développeur\n• Le vendre ou le transférer\n• Le dupliquer\n\nLa seule chose que nous demandons : un accord de confidentialité réciproque pour protéger vos idées et notre savoir-faire."
      },
      {
        question: "Signez-vous un accord de confidentialité (NDA) ?",
        answer: "Oui, absolument ! Nous comprenons que vos idées et vos données sont précieuses. Nous signons systématiquement :\n\n✓ Un NDA (Non-Disclosure Agreement) avant même de discuter de votre projet\n✓ Un contrat de prestation de services détaillé\n✓ Une clause de confidentialité dans tous nos contrats\n\nNous nous engageons à :\n• Ne pas divulguer vos informations à des tiers\n• Ne pas réutiliser vos idées pour d'autres clients\n• Sécuriser vos données (serveurs sécurisés, accès restreints)\n• Détruire les données sensibles après la fin du projet (sur demande)\n\nVotre confidentialité est notre priorité absolue."
      },
      {
        question: "Mes données clients sont-elles sécurisées ?",
        answer: "Oui, nous prenons la protection des données très au sérieux, surtout avec la loi sur la protection des données personnelles au Togo et en Afrique :\n\nMesures techniques :\n✓ Chiffrement HTTPS de toutes les communications\n✓ Chiffrement des mots de passe dans la base de données\n✓ Accès sécurisé (authentification forte)\n✓ Sauvegardes régulières et sécurisées\n✓ Protection contre les injections SQL et attaques XSS\n\nMesures organisationnelles :\n✓ Accès restreint à l'équipe autorisée\n✓ Journalisation des accès (qui fait quoi)\n✓ Politique de mots de passe forts\n✓ Formation de notre équipe à la sécurité\n\nPour les sites manipulant des données sensibles (santé, finance), nous pouvons mettre en place des mesures supplémentaires (chiffrement de bout en bout, audit de sécurité, certification)."
      }
    ]
  }
];

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const activeCategoryData = faqCategories.find(cat => cat.id === activeCategory);
  const activeQuestions = activeCategoryData?.questions || [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-96 bg-blue-400/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Centre d'aide Ideenwerk Technologies</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
          >
            Questions Fréquentes
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
          >
            Trouvez rapidement les réponses à vos questions sur nos services, 
            nos tarifs et notre fonctionnement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 text-sm"
          >
            <Link href="https://wa.me/22896315029" target="_blank" className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium bg-green-50 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              WhatsApp : +228 96 31 50 29
            </Link>
            <Link href="mailto:contact@ideenwerk-technologies.com" className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              contact@ideenwerk-technologies.com
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-40 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? `bg-${category.color}-600 text-white shadow-lg shadow-${category.color}-500/30`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                <div className={`w-12 h-12 bg-${activeCategoryData?.color || 'blue'}-100 text-${activeCategoryData?.color || 'blue'}-600 rounded-xl flex items-center justify-center`}>
                  {activeCategoryData && <activeCategoryData.icon className="w-6 h-6" />}
                </div>
                {activeCategoryData?.title}
              </h2>
              <p className="text-slate-600">{activeQuestions.length} questions</p>
            </div>

            {activeQuestions.map((faq, index) => {
              const faqId = `${activeCategory}-${index}`;
              const isOpen = openQuestion === faqId;

              return (
                <motion.div
                  key={faqId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleQuestion(faqId)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-semibold text-slate-900 pr-4 text-left">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Réponse sous 24h</h3>
              <p className="text-slate-600">Nous répondons à toutes vos questions dans les 24 heures ouvrées</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Devis gratuit</h3>
              <p className="text-slate-600">Consultation et devis personnalisés sans aucun engagement</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Expert local</h3>
              <p className="text-slate-600">Une équipe qui comprend les réalités du marché africain</p>
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
            Vous ne trouvez pas la réponse ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons 
            personnellement sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/22896315029"
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              WhatsApp direct
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}