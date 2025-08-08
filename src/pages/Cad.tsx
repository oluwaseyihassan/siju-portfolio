import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Monitor,
  Layers,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cadDrawings } from "../data/data";

const CadProjects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters 3D Model",
      year: "2024",
      software: "AutoCAD, Revit, 3ds Max",
      complexity: "High",
      description:
        "Comprehensive 3D modeling and visualization of a modern office complex with detailed interior and exterior renderings.",
      deliverables: "3D Models, Renderings, Animation",
      client: "Corporate Client",
      images: [cadDrawings[7].src, cadDrawings[0].src, cadDrawings[5].src], // CAD 8, 1, 6
      tags: ["3D Modeling", "Rendering", "Office Design"],
    },
    {
      id: 2,
      title: "Residential Villa Visualization",
      year: "2023",
      software: "SketchUp, V-Ray, Photoshop",
      complexity: "Medium",
      description:
        "Detailed 3D visualization of a luxury residential villa with landscape design and interior spaces.",
      deliverables: "3D Models, Photo-realistic Renderings",
      client: "Private Client",
      images: [cadDrawings[15].src, cadDrawings[11].src], // CAD 16, 12
      tags: ["Residential", "Luxury", "Landscape"],
    },
    {
      id: 3,
      title: "Urban Planning Model",
      year: "2023",
      software: "Rhino, Grasshopper, GIS",
      complexity: "High",
      description:
        "Large-scale urban planning project with parametric design elements and environmental analysis.",
      deliverables: "Parametric Models, Analysis Reports",
      client: "Government Agency",
      images: [cadDrawings[22].src, cadDrawings[19].src], // CAD 23, 20
      tags: ["Urban Planning", "Parametric", "Analysis"],
    },
    {
      id: 4,
      title: "Educational Complex Design",
      year: "2022",
      software: "ArchiCAD, Lumion, Adobe Suite",
      complexity: "Medium",
      description:
        "Educational facility design with focus on sustainable features and student-centered spaces.",
      deliverables: "BIM Models, Walkthroughs, Presentations",
      client: "Educational Institution",
      images: [cadDrawings[3].src], // CAD 4
      tags: ["Education", "Sustainable", "BIM"],
    },
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "High":
        return "bg-gray-800 text-white";
      case "Medium":
        return "bg-gray-600 text-white";
      case "Low":
        return "bg-gray-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

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
              CAD Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              3D Modeling &
              <span className="block text-gray-900">Computer-Aided Design</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my digital design work including 3D modeling,
              architectural visualization, and computer-aided design projects
              using industry-standard software.
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
              <div className="space-y-4">
                <div
                  className="h-80 bg-gray-100 relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openImageModal(project.images, 0)}
                >
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

                  {/* Complexity Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(
                        project.complexity
                      )}`}
                    >
                      {project.complexity} Complexity
                    </span>
                  </div>
                </div>

                {/* Additional Images Preview */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 px-4">
                    {project.images.slice(1, 4).map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="h-20 bg-gray-100 rounded cursor-pointer overflow-hidden"
                        onClick={() =>
                          openImageModal(project.images, imgIndex + 1)
                        }
                      >
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 ml-4">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Software:</span>
                    <span className="text-gray-700 font-medium">
                      {project.software}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Layers className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Deliverables:</span>
                    <span className="text-gray-700 font-medium">
                      {project.deliverables}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Zap className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Client:</span>
                    <span className="text-gray-700 font-medium">
                      {project.client}
                    </span>
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

export default CadProjects;
