import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { Link } from "react-router-dom";
import { drawingImages } from "../data/data";

const ArchitecturalDrawings = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All drawing images for the unified gallery
  const allDrawingImages = drawingImages.map((image, index) => ({
    src: image.src,
    alt: image.alt,
    title: `Technical Drawing ${index + 1}`,
    category: getDrawingCategory(index),
  }));

  function getDrawingCategory(index: number) {
    const categories = [
      "Floor Plans",
      "Elevations",
      "Sections",
      "Details",
      "Site Plans",
      "Construction Documents",
      "Schematic Design",
      "MEP Drawings",
      "Structural Plans",
      "Master Planning",
    ];
    return categories[index] || "Technical Drawing";
  }

  const openImageModal = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setSelectedImage(allDrawingImages[imageIndex].src);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentImageIndex < allDrawingImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allDrawingImages[newIndex].src);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(allDrawingImages[newIndex].src);
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
              Architectural Drawings
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Drawings
              <span className="block text-gray-900">& Blueprints Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through my comprehensive collection of architectural
              drawings, technical blueprints, and construction documents. Click
              any image to view in detail and navigate through the complete
              gallery.
            </p>

            {/* Gallery Stats */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Grid className="w-5 h-5" />
                <span className="font-medium">
                  {allDrawingImages.length} Technical Drawings
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
            {allDrawingImages.map((image, index) => (
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

                    {/* Image Number */}
                    <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      {index + 1}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium">
                      {image.category}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{image.category}</p>
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
              disabled={currentImageIndex === allDrawingImages.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <img
                src={selectedImage}
                alt={allDrawingImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              {/* <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {allDrawingImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {allDrawingImages[currentImageIndex].category}
                </p>
              </div> */}
            </div>

            {/* Image Counter & Navigation Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
              <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {allDrawingImages.length}
              </div>
              
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ArchitecturalDrawings;
