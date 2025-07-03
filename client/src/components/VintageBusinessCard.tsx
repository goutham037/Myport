import React from 'react';
import { motion } from 'framer-motion';

const VintageBusinessCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
            Vintage Business Card Collection
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Classic elegance meets timeless sophistication in these meticulously crafted designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card Design 1 - Classic Ornate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-amber-100 to-orange-100 border-4 border-amber-800 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Ornate Border Pattern */}
                <div className="absolute inset-2 border-2 border-amber-700 rounded-sm">
                  <div className="absolute inset-1 border border-amber-600 rounded-sm opacity-60"></div>
                </div>
                
                {/* Corner Flourishes */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-amber-800 rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-amber-800 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-amber-800 rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-amber-800 rounded-br-lg"></div>
                
                {/* Central Emblem */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-800 font-bold text-lg">SG</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-20 text-center">
                  <h2 className="text-xl font-bold text-amber-900 mb-1 font-serif">
                    SHARAN GOUTHAM
                  </h2>
                  <div className="w-16 h-0.5 bg-amber-700 mx-auto mb-2"></div>
                  <p className="text-sm text-amber-800 font-semibold mb-3 tracking-wider">
                    FULL STACK DEVELOPER
                  </p>
                  
                  <div className="text-xs text-amber-700 space-y-1">
                    <p>📧 sharan1114411@gmail.com</p>
                    <p>📱 +91 7013123744</p>
                    <p>📍 Nalgonda, Telangana</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-amber-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Design 2 - Art Deco Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border-2 border-yellow-600 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Art Deco Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform -skew-y-12"></div>
                  <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-l from-transparent via-yellow-400 to-transparent transform skew-y-12"></div>
                </div>
                
                {/* Geometric Border */}
                <div className="absolute inset-3 border border-yellow-500">
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-600 transform rotate-45"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-600 transform rotate-45"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-600 transform rotate-45"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-600 transform rotate-45"></div>
                </div>
                
                {/* Central Diamond */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-yellow-600 transform rotate-45 flex items-center justify-center">
                    <div className="w-6 h-6 bg-slate-800 transform -rotate-45 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-xs">B</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-20 text-center">
                  <h2 className="text-lg font-bold text-yellow-400 mb-1 tracking-widest font-sans">
                    B SHARAN GOUTHAM
                  </h2>
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-0.5 bg-yellow-500"></div>
                    <div className="w-2 h-2 bg-yellow-500 transform rotate-45 mx-2 -mt-0.5"></div>
                    <div className="w-8 h-0.5 bg-yellow-500"></div>
                  </div>
                  <p className="text-xs text-yellow-300 font-semibold mb-3 tracking-widest">
                    INNOVATION ENGINEER
                  </p>
                  
                  <div className="text-xs text-yellow-200 space-y-1">
                    <p>✉ sharan1114411@gmail.com</p>
                    <p>☎ +91 7013123744</p>
                    <p>⌘ Full Stack Development</p>
                  </div>
                </div>
                
                {/* Art Deco Footer */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-0.5 bg-yellow-500"></div>
                    <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-0.5 bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Design 3 - Victorian Elegance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-4 border-emerald-800 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Ornate Victorian Border */}
                <div className="absolute inset-2 border-2 border-emerald-700 rounded-lg">
                  <div className="absolute inset-2 border border-emerald-600 rounded-lg opacity-60"></div>
                  
                  {/* Corner Rosettes */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-emerald-800 rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-800 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-800 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-emerald-800 rounded-full"></div>
                </div>
                
                {/* Victorian Crest */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-14 h-12 bg-emerald-800 rounded-t-full relative">
                    <div className="absolute inset-1 bg-emerald-100 rounded-t-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-emerald-800 font-bold text-xs">SG</div>
                        <div className="w-6 h-0.5 bg-emerald-700 mx-auto"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-emerald-800"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-20 text-center">
                  <h2 className="text-lg font-bold text-emerald-900 mb-1 font-serif">
                    Sharan Goutham B
                  </h2>
                  <div className="flex justify-center items-center mb-2">
                    <div className="w-6 h-0.5 bg-emerald-700"></div>
                    <div className="mx-2 text-emerald-700">❦</div>
                    <div className="w-6 h-0.5 bg-emerald-700"></div>
                  </div>
                  <p className="text-sm text-emerald-800 font-semibold mb-3 italic">
                    Technology Artisan
                  </p>
                  
                  <div className="text-xs text-emerald-700 space-y-1">
                    <p>✉ sharan1114411@gmail.com</p>
                    <p>☎ +91 7013123744</p>
                    <p>⚡ Innovation & Development</p>
                  </div>
                </div>
                
                {/* Victorian Footer Flourish */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="text-emerald-700 text-lg">❦</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Design 4 - Retro Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 border-3 border-red-800 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Retro Stripes */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 w-full h-1 bg-red-600"></div>
                  <div className="absolute top-2 w-full h-0.5 bg-red-500"></div>
                  <div className="absolute bottom-0 w-full h-1 bg-red-600"></div>
                  <div className="absolute bottom-2 w-full h-0.5 bg-red-500"></div>
                </div>
                
                {/* Retro Badge */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-red-800 rounded-full flex items-center justify-center relative">
                    <span className="text-orange-100 font-bold text-xs tracking-wider">TECH</span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-red-800"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-16 text-center">
                  <h2 className="text-xl font-bold text-red-900 mb-1 font-mono tracking-tight">
                    B.SHARAN.GOUTHAM
                  </h2>
                  <div className="w-20 h-1 bg-red-700 mx-auto mb-2"></div>
                  <p className="text-sm text-red-800 font-bold mb-3 tracking-widest">
                    DEVELOPER
                  </p>
                  
                  <div className="text-xs text-red-700 space-y-1 font-mono">
                    <p>@ sharan1114411@gmail.com</p>
                    <p># +91 7013123744</p>
                    <p>$ Full Stack Solutions</p>
                  </div>
                </div>
                
                {/* Retro Footer */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Design 5 - Classic Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-4 border-indigo-800 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Classic Border Pattern */}
                <div className="absolute inset-3 border-2 border-indigo-700">
                  <div className="absolute inset-2 border border-indigo-600 opacity-60"></div>
                </div>
                
                {/* Monogram Circle */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center relative">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-800 font-bold text-xl font-serif">SG</span>
                    </div>
                    <div className="absolute inset-0 border-2 border-indigo-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-24 text-center">
                  <h2 className="text-lg font-bold text-indigo-900 mb-1 font-serif">
                    Sharan Goutham
                  </h2>
                  <div className="flex justify-center items-center mb-2">
                    <div className="w-8 h-0.5 bg-indigo-700"></div>
                    <div className="mx-2 w-2 h-2 bg-indigo-700 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-indigo-700"></div>
                  </div>
                  <p className="text-sm text-indigo-800 font-semibold mb-3">
                    Software Engineer
                  </p>
                  
                  <div className="text-xs text-indigo-700 space-y-1">
                    <p>✉ sharan1114411@gmail.com</p>
                    <p>☎ +91 7013123744</p>
                    <p>⚡ Innovation & Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Design 6 - Luxury Gold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="perspective-1000"
          >
            <div className="vintage-card-container group cursor-pointer">
              <div className="vintage-card bg-gradient-to-br from-gray-900 via-gray-800 to-black border-4 border-yellow-500 shadow-2xl transform-style-3d transition-transform duration-500 group-hover:rotateY-12">
                {/* Gold Foil Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20"></div>
                
                {/* Luxury Border */}
                <div className="absolute inset-2 border-2 border-yellow-400">
                  <div className="absolute inset-1 border border-yellow-300 opacity-60"></div>
                </div>
                
                {/* Crown Emblem */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-10 relative">
                    <div className="absolute bottom-0 w-12 h-6 bg-yellow-500 rounded-b-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-yellow-500"></div>
                    <div className="absolute top-1 left-2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-yellow-400"></div>
                    <div className="absolute top-1 right-2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-yellow-400"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 pt-18 text-center">
                  <h2 className="text-lg font-bold text-yellow-400 mb-1 font-serif tracking-wide">
                    B SHARAN GOUTHAM
                  </h2>
                  <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-2"></div>
                  <p className="text-sm text-yellow-300 font-semibold mb-3 tracking-widest">
                    TECH ARCHITECT
                  </p>
                  
                  <div className="text-xs text-yellow-200 space-y-1">
                    <p>✉ sharan1114411@gmail.com</p>
                    <p>☎ +91 7013123744</p>
                    <p>⚡ Premium Solutions</p>
                  </div>
                </div>
                
                {/* Luxury Footer */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Design Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200"
        >
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Design Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📏</span>
              </div>
              <h4 className="font-bold text-amber-800 mb-2">Standard Dimensions</h4>
              <p className="text-sm text-amber-700">3.5" × 2" (89mm × 51mm)<br/>Professional business card size</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-bold text-amber-800 mb-2">Vintage Aesthetics</h4>
              <p className="text-sm text-amber-700">Ornate borders, classic typography,<br/>timeless color palettes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-bold text-amber-800 mb-2">Premium Details</h4>
              <p className="text-sm text-amber-700">Embossed effects, foil accents,<br/>sophisticated patterns</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VintageBusinessCard;