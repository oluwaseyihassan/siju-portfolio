import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteImages } from "../data/data";

const SiteProjects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All site project images for the unified gallery
  const allSiteImages = siteImages.map((image, index) => ({
    src: image.src,
    alt: image.alt,
    title: `Site Project ${index + 1}`,
    category: getSiteCategory(index),
    status: getSiteStatus(index),
    location: getSiteLocation(index),
  }));

  function getSiteCategory(index: number) {
    const categories = [
      "Residential Development",
      "Commercial Complex",
      "Mixed-Use Development",
      "Educational Facility",
      "Healthcare Complex",
      "Office Building",
      "Retail Center",
      "Industrial Facility",
      "Hospitality Project",
      "Cultural Center",
      "Sports Complex",
      "Government Building",
      "Religious Facility",
      "Transportation Hub",
      "Urban Planning",
      "Landscape Architecture",
      "Infrastructure Development",
      "Renovation Project",
      "Historic Restoration",
      "Sustainable Development",
      "Smart Building",
      "High-Rise Development",
      "Community Center",
      "Research Facility",
      "Entertainment Complex",
      "Housing Estate",
      "Corporate Headquarters",
      "Medical Center",
      "Educational Campus",
      "Resort Development",
    ];
    return categories[index] || "Built Project";
  }

  function getSiteStatus(index: number) {
    const statuses = ["Completed", "Under Construction", "Planning Phase"];
    return statuses[index % 3];
  }

  function getSiteLocation(index: number) {
    const locations = [
      "Lagos, Nigeria",
      "Abuja, Nigeria",
      "Port Harcourt, Nigeria",
      "Kano, Nigeria",
      "Ibadan, Nigeria",
      "Benin City, Nigeria",
      "Jos, Nigeria",
      "Kaduna, Nigeria",
      "Warri, Nigeria",
      "Aba, Nigeria",
      "Ilorin, Nigeria",
      "Osogbo, Nigeria",
      "Abeokuta, Nigeria",
      "Enugu, Nigeria",
      "Calabar, Nigeria",
      "Akure, Nigeria",
      "Bauchi, Nigeria",
      "Minna, Nigeria",
      "Sokoto, Nigeria",
      "Gombe, Nigeria",
      "Yola, Nigeria",
      "Makurdi, Nigeria",
      "Lafia, Nigeria",
      "Asaba, Nigeria",
      "Uyo, Nigeria",
      "Owerri, Nigeria",
      "Awka, Nigeria",
      "Abakaliki, Nigeria",
      "Lokoja, Nigeria",
      "Birnin Kebbi, Nigeria",
    ];
    return locations[index] || "Nigeria";
  }

  const openImageModal = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setSelectedImage(allSiteImages[imageIndex].src);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentImageIndex < allSiteImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allSiteImages[newIndex].src);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allSiteImages[newIndex].src);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentImageIndex]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-gray-800 text-white";
      case "Under Construction":
        return "bg-gray-600 text-white";
      case "Planning Phase":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

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
              <span className="block text-gray-900">Projects Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my comprehensive portfolio of completed and ongoing
              architectural projects that have been brought to life across
              Nigeria. Each project represents unique solutions to specific
              design challenges and client requirements.
            </p>

            {/* Gallery Stats */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">
                  {allSiteImages.length} Built Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unified Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allSiteImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                    {/* Project Number */}
                    <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      {index + 1}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                          image.status
                        )}`}
                      >
                        {image.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-1">
                      {image.category}
                    </p>
                    <p className="text-gray-400 text-xs">{image.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              disabled={currentImageIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              disabled={currentImageIndex === allSiteImages.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <img
                src={selectedImage}
                alt={allSiteImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Project Info */}
              {/* <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {allSiteImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  {allSiteImages[currentImageIndex].category}
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <span className="text-gray-400">
                    {allSiteImages[currentImageIndex].location}
                  </span>
                  <span
                    className={`px-2 py-1 rounded ${getStatusColor(
                      allSiteImages[currentImageIndex].status
                    )}`}
                  >
                    {allSiteImages[currentImageIndex].status}
                  </span>
                </div>
              </div> */}
            </div>

            {/* Image Counter & Navigation Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
              <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {allSiteImages.length}
              </div>
             
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SiteProjects;
