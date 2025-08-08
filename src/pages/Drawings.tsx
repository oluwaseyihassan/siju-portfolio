import { motion } from "framer-motion";
import { ArrowLeft, FileText, Ruler, Grid } from "lucide-react";
import { Link } from "react-router-dom";
import { cadDrawings } from "../data/data";

const ArchitecturalDrawings = () => {
  const drawings = [
    {
      id: 1,
      title: "Modern Office Complex Plans",
      year: "2024",
      type: "Floor Plans & Sections",
      scale: "1:100, 1:50",
      description:
        "Comprehensive architectural drawings for a 5-story office complex including floor plans, sections, elevations, and detail drawings.",
      sheets: "24 Drawing Sheets",
      project: "Corporate Headquarters",
      image: cadDrawings[1].src, // CAD Drawing 2
      drawings: [
        "Site Plan",
        "Floor Plans (All Levels)",
        "Building Sections",
        "Elevations (All Sides)",
        "Detail Drawings",
        "Construction Details",
      ],
      tags: ["Floor Plans", "Sections", "Commercial"],
    },
    {
      id: 2,
      title: "Residential Villa Technical Drawings",
      year: "2023",
      type: "Construction Documents",
      scale: "1:50, 1:20",
      description:
        "Complete set of construction drawings for a luxury residential villa including architectural, structural, and MEP coordination.",
      sheets: "18 Drawing Sheets",
      project: "Private Villa Estate",
      image: cadDrawings[8].src, // CAD Drawing 9
      drawings: [
        "Architectural Plans",
        "Structural Details",
        "MEP Layouts",
        "Landscape Plans",
        "Interior Details",
        "Furniture Layout",
      ],
      tags: ["Residential", "Construction", "MEP"],
    },
    {
      id: 3,
      title: "Educational Facility Blueprints",
      year: "2023",
      type: "Schematic Design",
      scale: "1:200, 1:100",
      description:
        "Schematic design drawings for a community learning center with flexible classroom spaces and community areas.",
      sheets: "15 Drawing Sheets",
      project: "Community Learning Center",
      image: cadDrawings[13].src, // CAD Drawing 14
      drawings: [
        "Site Analysis",
        "Conceptual Plans",
        "Building Sections",
        "Design Development",
        "Space Planning",
        "Accessibility Details",
      ],
      tags: ["Education", "Community", "Accessibility"],
    },
    {
      id: 4,
      title: "Historic Building Renovation Plans",
      year: "2022",
      type: "Renovation & Restoration",
      scale: "1:50, 1:25",
      description:
        "Detailed renovation plans for historic building preservation while incorporating modern amenities and accessibility features.",
      sheets: "21 Drawing Sheets",
      project: "Heritage Building Restoration",
      image: cadDrawings[24].src, // CAD Drawing 25
      drawings: [
        "Existing Conditions",
        "Preservation Plans",
        "New Interventions",
        "Structural Reinforcement",
        "Heritage Details",
        "Modern Adaptations",
      ],
      tags: ["Historic", "Renovation", "Preservation"],
    },
    {
      id: 5,
      title: "Mixed-Use Development Drawings",
      year: "2022",
      type: "Master Planning",
      scale: "1:500, 1:100",
      description:
        "Master planning and architectural drawings for a mixed-use development combining residential, commercial, and recreational spaces.",
      sheets: "32 Drawing Sheets",
      project: "Urban Mixed-Use Complex",
      image: cadDrawings[29].src, // CAD Drawing 30
      drawings: [
        "Master Plan",
        "Zoning Studies",
        "Building Types",
        "Public Spaces",
        "Infrastructure",
        "Phasing Plans",
      ],
      tags: ["Mixed-Use", "Master Planning", "Urban"],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Floor Plans & Sections":
        return "bg-gray-800 text-white";
      case "Construction Documents":
        return "bg-gray-600 text-white";
      case "Schematic Design":
        return "bg-gray-500 text-white";
      case "Renovation & Restoration":
        return "bg-gray-700 text-white";
      case "Master Planning":
        return "bg-gray-900 text-white";
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
              Architectural Drawings
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Drawings
              <span className="block text-gray-900">& Blueprints</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my collection of architectural drawings, technical
              blueprints, and construction documents. Each set represents
              precise technical communication for various project types and
              phases.
            </p>
          </div>
        </motion.div>

        {/* Drawings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
          {drawings.map((drawing, index) => (
            <motion.div
              key={drawing.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Drawing Preview */}
              <div className="h-80 bg-gray-100 relative overflow-hidden">
                <img
                  src={drawing.image}
                  alt={drawing.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Drawing Type Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      drawing.type
                    )}`}
                  >
                    {drawing.type}
                  </span>
                </div>
              </div>

              {/* Drawing Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {drawing.title}
                  </h3>
                  <span className="text-sm text-gray-500 ml-4">
                    {drawing.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {drawing.description}
                </p>

                {/* Drawing Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Ruler className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Scale:</span>
                    <span className="text-gray-700 font-medium">
                      {drawing.scale}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Grid className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Total Sheets:</span>
                    <span className="text-gray-700 font-medium">
                      {drawing.sheets}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Project:</span>
                    <span className="text-gray-700 font-medium">
                      {drawing.project}
                    </span>
                  </div>
                </div>

                {/* Drawing Types */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Drawing Types Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {drawing.drawings.map((drawingType, typeIndex) => (
                      <div
                        key={typeIndex}
                        className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded"
                      >
                        {drawingType}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {drawing.tags.map((tag, tagIndex) => (
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
    </div>
  );
};

export default ArchitecturalDrawings;
