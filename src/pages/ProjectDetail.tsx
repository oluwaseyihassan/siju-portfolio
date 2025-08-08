import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Users,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cadDrawings } from "../data/data";

const ProjectDetail = () => {
  const { projectName } = useParams();

  // Project data - in a real app, this would come from an API or database
  const projectsData: Record<string, any> = {
    "modern-villa-estate": {
      id: 1,
      title: "Modern Villa Estate",
      category: "Site Project",
      year: "2024",
      location: "Lagos, Nigeria",
      area: "450 sqm",
      client: "Private Residence",
      status: "Completed",
      budget: "$850,000",
      duration: "18 months",
      description:
        "A contemporary villa design featuring sustainable materials and smart home integration. This project showcases modern architectural principles with emphasis on natural lighting and open spaces. The design incorporates eco-friendly features including solar panels, rainwater harvesting, and natural ventilation systems.",
      challengesAndSolutions:
        "The main challenge was integrating smart home technology while maintaining the aesthetic appeal of the contemporary design. We solved this by creating hidden cable management systems and using wireless technology where possible.",
      features: [
        "Smart home automation system",
        "Solar panel integration",
        "Rainwater harvesting system",
        "Natural ventilation design",
        "Open-plan living spaces",
        "Floor-to-ceiling windows",
        "Sustainable material selection",
        "Landscaped outdoor areas",
      ],
      images: [
        cadDrawings[0].src, // CAD Drawing 1
        cadDrawings[5].src, // CAD Drawing 6
        cadDrawings[10].src, // CAD Drawing 11
        cadDrawings[0].src, // CAD Drawing 1
        cadDrawings[5].src, // CAD Drawing 6
      ],
      tags: ["Luxury", "Sustainable", "Smart Home", "Contemporary"],
    },
    "corporate-headquarters": {
      id: 2,
      title: "Corporate Headquarters",
      category: "CAD Project",
      year: "2023",
      location: "Abuja, Nigeria",
      area: "2,500 sqm",
      client: "Corporate Client",
      status: "Completed",
      budget: "$2.2M",
      duration: "24 months",
      description:
        "Modern office complex designed for collaboration and employee wellness. The design prioritizes natural light, flexible workspace configurations, and employee comfort while maintaining professional aesthetics.",
      challengesAndSolutions:
        "Creating flexible spaces that could adapt to changing work patterns post-pandemic while maintaining acoustic privacy. We implemented modular partition systems and strategic acoustic treatments.",
      features: [
        "Flexible workspace design",
        "Advanced HVAC systems",
        "Acoustic privacy solutions",
        "Natural lighting optimization",
        "Collaborative meeting spaces",
        "Employee wellness areas",
        "Energy-efficient systems",
        "Modern IT infrastructure",
      ],
      images: [
        cadDrawings[17].src, // CAD Drawing 18
        cadDrawings[21].src, // CAD Drawing 22
        cadDrawings[17].src, // CAD Drawing 18
        cadDrawings[21].src, // CAD Drawing 22
      ],
      tags: ["Office", "Wellness", "Modern", "Flexible"],
    },
    "community-learning-center": {
      id: 3,
      title: "Community Learning Center",
      category: "Architectural Drawing",
      year: "2023",
      location: "Ibadan, Nigeria",
      area: "800 sqm",
      client: "Educational Institution",
      status: "Under Construction",
      budget: "$650,000",
      duration: "20 months",
      description:
        "Educational facility designed to foster community learning and interaction. The design emphasizes accessibility, natural lighting, and flexible spaces that can serve multiple functions for the community.",
      challengesAndSolutions:
        "Designing a multi-functional space that serves different age groups and community needs while staying within budget. We created modular spaces with movable partitions and multi-purpose furniture.",
      features: [
        "Flexible classroom configurations",
        "Community multipurpose halls",
        "Accessible design features",
        "Natural lighting throughout",
        "Outdoor learning spaces",
        "Technology integration",
        "Sustainable materials",
        "Safe pedestrian access",
      ],
      images: [
        cadDrawings[29].src, // CAD Drawing 30
        cadDrawings[26].src, // CAD Drawing 27
        cadDrawings[29].src, // CAD Drawing 30
        cadDrawings[26].src, // CAD Drawing 27
        cadDrawings[29].src, // CAD Drawing 30
        cadDrawings[26].src, // CAD Drawing 27
      ],
      tags: ["Education", "Community", "Accessible", "Multi-purpose"],
    },
  };

  const project = projectsData[projectName || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === "Completed"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <Calendar className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Year</div>
              <div className="font-semibold text-gray-900">{project.year}</div>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-semibold text-gray-900">
                {project.location}
              </div>
            </div>
            <div className="text-center">
              <Ruler className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Area</div>
              <div className="font-semibold text-gray-900">{project.area}</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Client</div>
              <div className="font-semibold text-gray-900">
                {project.client}
              </div>
            </div>
            <div className="text-center">
              <ExternalLink className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Budget</div>
              <div className="font-semibold text-gray-900">
                {project.budget}
              </div>
            </div>
            <div className="text-center">
              <Calendar className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Duration</div>
              <div className="font-semibold text-gray-900">
                {project.duration}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl h-80 overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Challenges & Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.challengesAndSolutions}
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Project Tags</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in Similar Work?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your architectural vision to
              life with similar expertise and attention to detail.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
