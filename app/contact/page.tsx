'use client';
import { useState, FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  CheckCircle, Globe, Users, ArrowRight, Loader2, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: [
      { label: "Principal", value: "+228 96 31 50 29", link: "tel:+22896315029" },
      { label: "Secondaire", value: "+228 70 88 86 99", link: "tel:+22870888699" }
    ],
    color: "blue"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: [
      { label: "Contact direct", value: "+228 96 31 50 29", link: "https://wa.me/22896315029?text=Bonjour%20Ideenwerk%20Technologies%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services." }
    ],
    color: "green",
    isWhatsApp: true
  },
  {
    icon: Mail,
    title: "Emails",
    details: [
      { label: "Contact général", value: "contact@ideenwerk-technologies.com", link: "mailto:contact@ideenwerk-technologies.com" },
      { label: "Support client", value: "support@ideenwerk-technologies.com", link: "mailto:support@ideenwerk-technologies.com" },
      { label: "Commercial", value: "sales@ideenwerk-technologies.com", link: "mailto:sales@ideenwerk-technologies.com" }
    ],
    color: "purple"
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: [
      { label: "Siège social", value: "Lomé, Togo", link: null },
      { label: "Zone d'intervention", value: "Toute l'Afrique", link: null }
    ],
    color: "orange"
  },
  {
    icon: Clock,
    title: "Horaires",
    details: [
      { label: "Lundi - Vendredi", value: "08:00 - 18:00", link: null },
      { label: "Samedi", value: "09:00 - 13:00", link: null },
      { label: "Dimanche", value: "Fermé", link: null }
    ],
    color: "slate"
  }
];

const emailAddresses = [
  { email: "contact@ideenwerk-technologies.com", role: "Contact officiel", description: "Pour toute question générale" },
  { email: "support@ideenwerk-technologies.com", role: "Support client", description: "Assistance technique et maintenance" },
  { email: "sales@ideenwerk-technologies.com", role: "Commercial", description: "Devis et propositions commerciales" },
  { email: "admin@ideenwerk-technologies.com", role: "Administration", description: "Gestion interne et partenariats" },
  { email: "ceo@ideenwerk-technologies.com", role: "Direction", description: "Contact direct avec la direction" }
];

// ✅ TA CLÉ API WEB3FORMS
const WEB3FORMS_KEY = "133c0f5b-ce94-457f-a765-5d6b3d451f77";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau message de ${formData.firstName} ${formData.lastName} - ${formData.service || 'Non spécifié'}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          replyto: formData.email,
          email: formData.email,
          phone: formData.phone || 'Non fourni',
          service: formData.service || 'Non spécifié',
          message: formData.message,
        })
      });

      const result = await response.json();
      console.log('Réponse Web3Forms:', result);

      if (result.success) {
        setStatus('success');
        setStatusMessage("Message envoyé avec succès ! Nous vous répondrons sous 24h.");
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setStatusMessage("Erreur de connexion. Contactez-nous par WhatsApp au +228 96 31 50 29.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Prêt à digitaliser votre entreprise ? Notre équipe est là pour vous accompagner.
            Choisissez le canal qui vous convient le mieux.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="https://wa.me/22896315029?text=Bonjour%20Ideenwerk%20Technologies%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">WhatsApp Direct</h3>
              <p className="text-green-100 mb-4">Réponse instantanée</p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>+228 96 31 50 29</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="tel:+22896315029"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200"
            >
              <Phone className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Appelez-nous</h3>
              <p className="text-slate-600 mb-4">Lun-Ven : 08:00 - 18:00</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span>+228 96 31 50 29</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="mailto:contact@ideenwerk-technologies.com"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200"
            >
              <Mail className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Envoyez un email</h3>
              <p className="text-slate-600 mb-4">Réponse sous 24h</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                <span>contact@ideenwerk-technologies.com</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-slate-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Message envoyé !</p>
                    <p className="text-sm text-green-700">{statusMessage}</p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Erreur</p>
                    <p className="text-sm text-red-700">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-slate-50"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-slate-50"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-slate-50"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-slate-50"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-slate-50 bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="Site Web Vitrine">Site Web Vitrine</option>
                    <option value="Application Web">Application Web</option>
                    <option value="Application Mobile">Application Mobile</option>
                    <option value="Digitalisation PME">Digitalisation PME</option>
                    <option value="Développement MVP">Développement MVP</option>
                    <option value="Maintenance & Sécurité">Maintenance & Sécurité</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none disabled:bg-slate-50"
                    placeholder="Décrivez votre projet ou votre question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Nos coordonnées
              </h2>

              {contactInfo.map((info, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${info.color}-100 text-${info.color}-600 rounded-xl flex items-center justify-center shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-3">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            {detail.link ? (
                              <Link 
                                href={detail.link}
                                target={info.isWhatsApp ? "_blank" : undefined}
                                rel={info.isWhatsApp ? "noopener noreferrer" : undefined}
                                className="text-slate-600 hover:text-blue-600 transition"
                              >
                                <span className="text-sm text-slate-500">{detail.label} : </span>
                                <span className="font-medium">{detail.value}</span>
                              </Link>
                            ) : (
                              <div>
                                <span className="text-sm text-slate-500">{detail.label} : </span>
                                <span className="font-medium text-slate-900">{detail.value}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Addresses Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos adresses email</h2>
            <p className="text-xl text-slate-300">Contactez le bon service directement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailAddresses.map((item, index) => (
              <Link
                key={index}
                href={`mailto:${item.email}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all"
              >
                <Mail className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{item.role}</h3>
                <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                <p className="text-blue-400 font-medium text-sm break-all">{item.email}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-slate-600">Des engagements concrets pour votre succès</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Réponse rapide</h3>
              <p className="text-slate-600">Nous répondons à toutes vos demandes sous 24h maximum.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Devis gratuit</h3>
              <p className="text-slate-600">Consultation et devis personnalisés sans aucun engagement.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expertise africaine</h3>
              <p className="text-slate-600">Une équipe qui comprend les réalités du continent.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}