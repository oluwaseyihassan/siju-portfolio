import { motion } from "framer-motion";
import {
  PenTool,
  Building2,
  Palette,
  Hammer,
  TreePine,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Architectural Design",
      description:
        "Complete architectural design services from concept to construction documents.",
      features: [
        "Conceptual Design",
        "Schematic Design",
        "Design Development",
        "Construction Documents",
      ],
    },
    {
      icon: Building2,
      title: "3D Visualization",
      description:
        "Photo-realistic 3D renderings and virtual walkthroughs to visualize your project.",
      features: [
        "3D Modeling",
        "Photorealistic Renders",
        "Virtual Tours",
        "Animation & Walkthroughs",
      ],
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Complete interior design solutions that complement architectural design.",
      features: [
        "Space Planning",
        "Material Selection",
        "Furniture Design",
        "Lighting Design",
      ],
    },
    {
      icon: Hammer,
      title: "Project Management",
      description:
        "End-to-end project management ensuring timely delivery and quality control.",
      features: [
        "Construction Administration",
        "Quality Control",
        "Timeline Management",
        "Budget Oversight",
      ],
    },
    {
      icon: TreePine,
      title: "Sustainable Design",
      description:
        "Eco-friendly design solutions focusing on energy efficiency and sustainability.",
      features: [
        "LEED Certification",
        "Energy Analysis",
        "Green Materials",
        "Sustainable Systems",
      ],
    },
    {
      icon: Shield,
      title: "Consulting Services",
      description:
        "Expert architectural consulting for existing projects and development planning.",
      features: [
        "Code Compliance",
        "Design Review",
        "Feasibility Studies",
        "Expert Witness",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your vision, requirements, and site constraints through detailed consultation.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Creating initial design concepts and exploring various architectural solutions.",
    },
    {
      step: "03",
      title: "Design Refinement",
      description:
        "Developing the chosen concept with detailed drawings, specifications, and 3D visualizations.",
    },
    {
      step: "04",
      title: "Documentation",
      description:
        "Preparing comprehensive construction documents and obtaining necessary permits.",
    },
    {
      step: "05",
      title: "Construction Support",
      description:
        "Providing ongoing support during construction to ensure design intent is realized.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block text-gray-900">Architectural Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final construction, I provide complete
            architectural services tailored to bring your vision to life with
            precision and creativity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 h-full hover:border-gray-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Design Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach ensuring every project is delivered with
              excellence, from initial consultation to final construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block flex-1 h-0.5 bg-gray-300 ml-4" />
                  )}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss how I can tailor my services
            to meet your specific requirements.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold  hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
