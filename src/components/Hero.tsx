import React from 'react';
import Image from 'next/image'; // ZMIANA: Dodano import komponentu Image z Next.js
import { Instagram, Facebook, Youtube, ArrowRight, Play } from 'lucide-react';
import mosiaImage from '../assets/Mosia.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] lg:min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center py-12 lg:py-20 relative overflow-hidden">
      {/* ... (tło bez zmian) ... */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#wave1)"/><defs><linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/><stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05"/></linearGradient></defs></svg>
        <svg className="absolute bottom-0 right-0 w-full h-32 opacity-10 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#wave2)"/><defs><linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2563eb" stopOpacity="0.08"/><stop offset="100%" stopColor="#3b82f6" stopOpacity="0.04"/></linearGradient></defs></svg>
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-40 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-15 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg opacity-15 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-28 items-center">
          
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-poppins leading-tight">
                Odkryj swoją 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800"> Biotywację</span>
                <br />
                do sukcesu
              </h1>
              <p className="hidden lg:block text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Transformuj swoje życie poprzez naukowe podejście do motywacji i rozwoju osobistego. 
                Dołącz do tysięcy osób, które już zmieniły swoje życie.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#blog" className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 lg:py-5 rounded-full text-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Zacznij teraz
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#o-mnie" className="group bg-white text-gray-700 px-10 py-4 lg:py-5 rounded-full text-xl font-semibold border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Zobacz jak to działa
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse-slow"></div>
                
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl">
                  {/* ZMIANA: Znacznik <img> zamieniony na komponent <Image> */}
                  <Image 
                    src={mosiaImage}
                    alt="Motywacyjny coach" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="absolute top-12 right-0 w-12 h-12 lg:right-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float" style={{animationDelay: '0s'}}>
                    <Instagram className="h-7 w-7 lg:h-8 lg:w-8 text-pink-500" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 -left-4 w-12 h-12 lg:-left-8 lg:w-16 lg:h-16 transform -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float" style={{animationDelay: '2s'}}>
                    <Facebook className="h-7 w-7 lg:h-8 lg:w-8 text-blue-600" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-0 w-12 h-12 lg:bottom-12 lg:right-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float" style={{animationDelay: '4s'}}>
                    <Youtube className="h-7 w-7 lg:h-8 lg:w-8 text-red-500" />
                  </a>
                </div>
                
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-green-400 rounded-full animate-float opacity-80" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-1/4 -right-10 w-8 h-8 bg-purple-400 rounded-full animate-float opacity-80" style={{animationDelay: '5s'}}></div>
                <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-pink-400 rounded-full animate-float opacity-80" style={{animationDelay: '2.5s'}}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;