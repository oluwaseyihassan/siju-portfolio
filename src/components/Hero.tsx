import { motion } from "framer-motion";
import { ArrowDown, Building, Award, Users } from "lucide-react";
import { useState } from "react";
import { cadDrawings } from "../data/data";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { icon: Building, label: "Projects", value: "200+" },
    { icon: Users, label: "Clients", value: "150+" },
    { icon: Award, label: "Awards", value: "15+" },
  ];

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Use a CAD drawing as hero background
  const heroBackgroundImage = cadDrawings[13]; // CAD Drawing 14 - looks architectural

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0">
        {!imageError ? (
          <>
            {/* Primary Image (from data) */}
            <img
              src={heroBackgroundImage.src}
              alt={heroBackgroundImage.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </>
        ) : (
          /* Gradient Fallback when image fails */
          <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            imageError ? "bg-gray-900/60" : "bg-gray-900/75"
          }`}
        ></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      {/* Loading State */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-500 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
             

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                ADEKOLA
                <span className="block text-gray-300">ADESIJUOLA</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg">
                Creating innovative architectural solutions that blend
                functionality, sustainability, and aesthetic excellence across
                Nigeria and West Africa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
