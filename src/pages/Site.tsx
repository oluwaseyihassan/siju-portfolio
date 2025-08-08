import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cadDrawings } from "../data/data";

const SiteProjects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  const projects = [
    {
      id: 1,
      title: "Modern Villa Estate",
      year: "2024",
      location: "Lagos, Nigeria",
      area: "450 sqm",
      description: "A contemporary villa design featuring sustainable materials and smart home integration. This project showcases modern architectural principles with emphasis on natural lighting and open spaces.",
      status: "Completed",
      client: "Private Residence",
      images: [cadDrawings[4].src, cadDrawings[9].src], // CAD 5 and CAD 10
      tags: ["Luxury", "Sustainable", "Smart Home"],
    },
    {
      id: 2,
      title: "Residential Complex",
      year: "2023",
      location: "Abuja, Nigeria",
      area: "1,200 sqm",
      description: "Multi-unit residential complex designed for urban living with shared amenities and green spaces.",
      status: "Completed",
      client: "Real Estate Development",
      images: [cadDrawings[18].src, cadDrawings[14].src], // CAD 19 and CAD 15
      tags: ["Residential", "Urban", "Community"],
    },
    {
      id: 3,
      title: "Commercial Plaza",
      year: "2023",
      location: "Port Harcourt, Nigeria",
      area: "2,800 sqm",
      description: "Mixed-use commercial development with retail spaces, offices, and public areas.",
      status: "Under Construction",
      client: "Commercial Developer",
      images: [cadDrawings[27].src, cadDrawings[25].src], // CAD 28 and CAD 26
      tags: ["Commercial", "Mixed-use", "Retail"],
    },
  ];

  const openImageModal = (images: string[], startIndex: number) => {
    setAllImages(images);
    setCurrentImageIndex(startIndex);
    setSelectedImage(images[startIndex]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setAllImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentImageIndex, allImages]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
              Site Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built & Constructed
              <span className="block text-gray-900">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore completed and ongoing architectural projects that have been brought to life. 
              Each project represents a unique solution to specific design challenges and client requirements.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Project Images */}
              <div className="space-y-4 p-4">
                <div className="h-80 bg-gray-100 relative overflow-hidden rounded-lg cursor-pointer"
                     onClick={() => openImageModal(project.images, 0)}>
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {project.images.length > 1 && (
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      +{project.images.length - 1} more
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Additional Images Preview */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    {project.images.slice(1, 3).map((image, imgIndex) => (
                      <div key={imgIndex} 
                           className="h-20 bg-gray-100 rounded cursor-pointer overflow-hidden"
                           onClick={() => openImageModal(project.images, imgIndex + 1)}>
                        <img 
                          src={image} 
                          alt={`${project.title} - ${imgIndex + 2}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 ml-4">{project.year}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Ruler className="w-4 h-4" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  disabled={currentImageIndex === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  disabled={currentImageIndex === allImages.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selectedImage}
              alt="Project detail"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SiteProjects;
