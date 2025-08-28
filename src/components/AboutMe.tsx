import React from 'react';
import Image from 'next/image'; // ZMIANA: Dodano import komponentu Image z Next.js

// Tła
import mosiaBackground from '../assets/Mosia2.png';
import tlo1 from '../assets/tlo1.png'; 
// Zdjęcia profilowe
import mosiaImage3 from '../assets/Mosia3.png';
// Inne
import podpisImage from '../assets/podpis.png';
// Ikony
import { Leaf, ArrowRight, Award, BookOpen, Heart } from 'lucide-react';

const AboutMe = () => {
  // ZMIANA: Dodano .src do obrazków w tłach, aby Next.js podał poprawny link
  const desktopStyle = { backgroundImage: `url(${mosiaBackground.src})` };
  const mobileStyle = { backgroundImage: `url(${tlo1.src})` };

  return (
    <section id="o-mnie">
      
      {/* ======================================================================= */}
      {/* =======================   1. UKŁAD MOBILNY   ======================== */}
      {/* ======================================================================= */}
      <div 
        style={mobileStyle}
        className="lg:hidden w-full bg-cover bg-center flex flex-col items-center justify-center p-4 sm:p-6 text-center pb-16 pt-2.5"
      >
        <div className="relative w-80 h-80 mt-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse-slow"></div>
          
          <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl bg-white">
            {/* ZMIANA: Znacznik <img> zamieniony na komponent <Image> */}
            <Image 
              src={mosiaImage3} 
              alt="Monika - Biotywacja" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0">
            <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
              <Award className="h-7 w-7 text-yellow-500" />
            </div>
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
              <BookOpen className="h-7 w-7 text-green-500" />
            </div>
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '4s'}}>
              <Heart className="h-7 w-7 text-red-500" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full max-w-2xl
          bg-stone-50/90 backdrop-blur-sm 
          p-6 rounded-2xl shadow-2xl 
          border border-white/20
          text-stone-800 font-poppins
        ">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Biotywacja</span>
              <span className="block text-gray-900 text-2xl mt-1"> - więcej niż nauka</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed mb-5 text-left">
            Tworzę przestrzeń dla nauczycieli i uczniów, którzy chcą uczyć i uczyć się z sensem. Głęboko wierzę, że edukacja zaczyna się od człowieka. Od jego ambicji, marzeń, emocji, zmęczenia i miejsca, w którym aktualnie się znajduje. Wiem, że nie zawsze chodzi o oceny, programy i testy. Czasem chodzi o to, żeby ktoś powiedział “Rozumiem Cię i wiem, że dasz radę!”.
          </p>
          <p className="text-base leading-relaxed font-semibold mb-4 text-left">
            Biotywacja to miejsce, w którym znajdziesz:
          </p>
          <ul className="space-y-3 mb-5 text-left">
            <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>gotowe pomoce naukowe</strong> - żebyś mógł się skupić na tym co najważniejsze</span></li>
            <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>pomysły na lekcje</strong> - inspirujące, angażujące, ułatwiające zapamiętanie</span></li>
            <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>tipy do nauki</strong> - dla wszystkich i tych, którzy chcą się intensywnie rozwijać, ale i dla tych, który na jakimś etapie utknęli</span></li>
            <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>porady i inspiracje</strong> - z mojego doświadczenia i od ludzi, którzy czują podobnie.</span></li>
          </ul>
          <p className="text-base leading-relaxed mb-6 text-left">
            Jestem nauczycielką, która wie, że motywacja nie bierze się z presji, tylko ze zrozumienia.
          </p>
          <p className="text-lg text-right italic text-stone-700">Pozdrawiam serdecznie</p>
          <div className="flex justify-end mt-2">
              {/* ZMIANA: Znacznik <img> zamieniony na komponent <Image> */}
              <Image src={podpisImage} alt="Podpis Moniki" className="w-40 h-auto" />
          </div>
          <div className="mt-8 flex justify-center">
              <a href="#blog" className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-full text-base font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Zobacz mojego bloga
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* =======================  2. UKŁAD DESKTOPOWY  ======================= */}
      {/* ======================================================================= */}
      <div 
        style={desktopStyle}
        className="hidden w-full min-h-[calc(100vh-4rem)] bg-cover bg-center lg:bg-[25%_50%] bg-no-repeat lg:flex items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-center">
            <div className="hidden lg:block lg:col-span-3"></div>
            <div className="lg:col-span-5 relative lg:left-[7%]
              bg-stone-50/90 backdrop-blur-sm 
              p-6 rounded-2xl shadow-2xl 
              border border-white/20
              text-stone-800 font-poppins
            ">
              <div className="mb-6 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Biotywacja</span>
                  <span className="text-gray-900 text-2xl lg:text-3xl"> - więcej niż nauka</span>
                </h2>
              </div>
              <p className="text-base leading-relaxed mb-5">
                Tworzę przestrzeń dla nauczycieli i uczniów, którzy chcą uczyć i uczyć się z sensem. Głęboko wierzę, że edukacja zaczyna się od człowieka. Od jego ambicji, marzeń, emocji, zmęczenia i miejsca, w którym aktualnie się znajduje. Wiem, że nie zawsze chodzi o oceny, programy i testy. Czasem chodzi o to, żeby ktoś powiedział “Rozumiem Cię i wiem, że dasz radę!”.
              </p>
              <p className="text-base leading-relaxed font-semibold mb-4">
                Biotywacja to miejsce, w którym znajdziesz:
              </p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>gotowe pomoce naukowe</strong> - żebyś mógł się skupić na tym co najważniejsze</span></li>
                <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>pomysły na lekcje</strong> - inspirujące, angażujące, ułatwiające zapamiętanie</span></li>
                <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>tipy do nauki</strong> - dla wszystkich i tych, którzy chcą się intensywnie rozwijać, ale i dla tych, który na jakimś etapie utknęli</span></li>
                <li className="flex items-start"><Leaf className="text-primary-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" /><span className="text-base"><strong>porady i inspiracje</strong> - z mojego doświadczenia i od ludzi, którzy czują podobnie.</span></li>
              </ul>
              <p className="text-base leading-relaxed mb-6">
                Jestem nauczycielką, która wie, że motywacja nie bierze się z presji, tylko ze zrozumienia.
              </p>
              <p className="text-lg text-right italic text-stone-700">Pozdrawiam serdecznie</p>
              <div className="flex justify-end mt-2">
                  {/* ZMIANA: Znacznik <img> zamieniony na komponent <Image> */}
                  <Image src={podpisImage} alt="Podpis Moniki" className="w-40 h-auto" />
              </div>
              <div className="mt-8 flex justify-center lg:justify-end">
                  <a href="#blog" className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-full text-base font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                      Zobacz mojego bloga
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;