import { motion } from "framer-motion";
import { ExternalLink, MapPin, Users, ArrowRight } from "lucide-react";
import { cadDrawings } from "../data/data";

const Portfolio = () => {
  const categories = [
    {
      id: "site",
      name: "Site Projects",
      description: "Built and constructed architectural projects",
      count: "25+ Projects",
    },
    {
      id: "cad",
      name: "CAD Projects",
      description: "3D modeling and computer-aided design work",
      count: "40+ Designs",
    },
    {
      id: "drawings",
      name: "Architectural Drawings",
      description: "Technical drawings, plans, and blueprints",
      count: "60+ Drawings",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Modern Villa Estate",
      category: "Site Project",
      year: "2024",
      location: "Lagos, Nigeria",
      area: "450 sqm",
      description:
        "A contemporary villa design featuring sustainable materials and smart home integration.",
      image: cadDrawings[2].src, // Using CAD Drawing 3
      tags: ["Luxury", "Sustainable", "Smart Home"],
      link: "/projects/modern-villa-estate",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "CAD Project",
      year: "2023",
      location: "Abuja, Nigeria",
      area: "2,500 sqm",
      description:
        "Modern office complex designed for collaboration and employee wellness.",
      image: cadDrawings[6].src, // Using CAD Drawing 7
      tags: ["Office", "Wellness", "Modern"],
      link: "/projects/corporate-headquarters",
    },
    {
      id: 3,
      title: "Community Learning Center",
      category: "Architectural Drawing",
      year: "2023",
      location: "Ibadan, Nigeria",
      area: "800 sqm",
      description:
        "Educational facility designed to foster community learning and interaction.",
      image: cadDrawings[11].src, // Using CAD Drawing 12
      tags: ["Education", "Community", "Accessible"],
      link: "/projects/community-learning-center",
    },
  ];

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Work
            <span className="block text-gray-900">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my architectural work organized by project type. Each
            category showcases different aspects of my design expertise and
            professional experience.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`/portfolio/${category.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {category.count}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-500 group-hover:text-gray-700 transition-colors">
                  <span className="text-sm font-medium">View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of recent projects showcasing the diversity and
              quality of my architectural work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg py-2 text-white font-medium text-center">
                        View Project Details
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {project.category}
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{project.area}</span>
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
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural vision to life with
              innovative design and expert execution.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
