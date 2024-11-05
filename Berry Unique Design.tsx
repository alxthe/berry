import { useState } from 'react';
import { Phone, Heart, Shield, MessageCircle, ArrowRight, Star, Brain, Check, Clock } from 'lucide-react';

const BerryWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pageStyle = {
    background: 'radial-gradient(circle at 50% -20%, rgba(255, 192, 203, 0.2) 0%, rgba(255, 192, 203, 0.1) 30%, rgba(255, 255, 255, 0) 70%)',
  };

  return (
    <div className="min-h-screen bg-white font-['Montserrat']" style={pageStyle}>
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 border-b border-pink-100/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-extrabold text-pink-600 tracking-tight cursor-pointer" 
              onClick={() => setCurrentPage('home')}
            >
              berry
            </div>
            <div className="flex items-center space-x-10">
              <button 
                className={`${currentPage === 'about' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600 font-medium transition-colors`}
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
              <button 
                className={`${currentPage === 'personas' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600 font-medium transition-colors`}
                onClick={() => setCurrentPage('personas')}
              >
                Personas
              </button>
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-10">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'personas' && <PersonasPage />}
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="space-y-32">
    {/* Hero Section */}
    <section className="relative max-w-3xl mx-auto px-6 pt-20 text-center">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-1/4 w-48 h-48 bg-pink-200/20 rounded-full blur-2xl -z-10" />
      
      <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Your AI companion for
        <span className="text-pink-600"> mental wellness</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
        Meet Berry — a caring voice available 24/7, helping you stay accountable and supported on your mental health journey.
      </p>
      <button className="bg-pink-600 text-white px-10 py-4 rounded-full hover:bg-pink-700 transition-colors font-medium inline-flex items-center group">
        Begin Your Journey
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>

    {/* Features Grid */}
    <section className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-2 gap-8">
        {[
          {
            icon: <Phone className="h-8 w-8" />,
            title: "24/7 Support",
            description: "Always here to listen, whenever you need someone to talk to."
          },
          {
            icon: <Heart className="h-8 w-8" />,
            title: "Unique Personas",
            description: "Choose from our caring AI companions, each with their own style."
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Private & Secure",
            description: "Your conversations are completely protected."
          },
          {
            icon: <MessageCircle className="h-8 w-8" />,
            title: "Daily Check-ins",
            description: "Stay accountable with regular support and guidance."
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="group p-8 rounded-2xl bg-white border border-pink-100/50 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100"
          >
            <div className="text-pink-600 mb-6 group-hover:scale-110 transform transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="space-y-32">
    {/* Mission Section */}
    <section className="relative max-w-3xl mx-auto px-6 pt-20 text-center">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -z-10" />
      
      <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Our <span className="text-pink-600">Mission</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
        We're revolutionizing mental health support by making it more accessible, personal, and effective through the power of AI companionship.
      </p>
    </section>

    {/* How It Works */}
    <section className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-2 gap-8">
        {[
          {
            icon: <Heart className="h-8 w-8" />,
            title: "Choose Your Companion",
            description: "Select from our diverse range of AI personas, each designed to match different personality types and needs."
          },
          {
            icon: <Phone className="h-8 w-8" />,
            title: "Connect Through Voice",
            description: "Simply call your Berry companion through our secure phone line whenever you need support."
          },
          {
            icon: <Star className="h-8 w-8" />,
            title: "Build a Relationship",
            description: "Your Berry companion learns and adapts to provide more personalized support over time."
          },
          {
            icon: <Check className="h-8 w-8" />,
            title: "Stay Accountable",
            description: "Regular check-ins and progress tracking help you maintain your mental wellness journey."
          }
        ].map((step, index) => (
          <div 
            key={index}
            className="group p-8 rounded-2xl bg-white border border-pink-100/50 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100"
          >
            <div className="text-pink-600 mb-6 group-hover:scale-110 transform transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PersonasPage = () => (
  <div className="space-y-32">
    {/* Personas Intro */}
    <section className="relative max-w-3xl mx-auto px-6 pt-20 text-center">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -z-10" />
      
      <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Meet Your <span className="text-pink-600">Companions</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
        Each Berry persona has its own unique personality and approach to support. Find the perfect match for your journey.
      </p>
    </section>

    {/* Personas Grid */}
    <section className="max-w-4xl mx-auto px-6">
      <div className="space-y-8">
        {[
          {
            name: "Bleu",
            personality: "Calming & Nurturing",
            description: "Provides a gentle, supportive presence with a focus on emotional comfort and mindfulness.",
            strengths: ["Emotional support", "Mindfulness", "Stress relief"]
          },
          {
            name: "Razz",
            personality: "Energetic & Motivating",
            description: "Brings enthusiasm and energy to every conversation, helping you stay focused on your goals.",
            strengths: ["Goal setting", "Motivation", "Action planning"]
          },
          {
            name: "Goji",
            personality: "Wise & Insightful",
            description: "Offers thoughtful perspectives and deep insights, helping you explore your thoughts and feelings.",
            strengths: ["Deep reflection", "Problem solving", "Personal growth"]
          },
          {
            name: "Goose",
            personality: "Playful & Encouraging",
            description: "Brings joy and lightness to your journey, using humor and playfulness to help you navigate challenges.",
            strengths: ["Mood lifting", "Stress relief", "Positive reframing"]
          }
        ].map((persona, index) => (
          <div 
            key={index}
            className="group p-8 rounded-2xl bg-white border border-pink-100/50 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{persona.name}</h3>
                <div className="text-pink-600 mb-4">{persona.personality}</div>
                <p className="text-gray-600 mb-4">{persona.description}</p>
                <div className="flex flex-wrap gap-2">
                  {persona.strengths.map((strength, idx) => (
                    <span key={idx} className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default BerryWebsite;
