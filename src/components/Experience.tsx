import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Star, Quote } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      period: "2020 - Present",
      position: "Senior Architect & Principal",
      company: "Adesijuola Architecture Studio",
      location: "Lagos, Nigeria",
      description:
        "Founded and leading an innovative architectural practice specializing in sustainable design and modern residential projects.",
      achievements: [
        "Completed 25+ residential and commercial projects",
        "Achieved LEED certification for 3 major projects",
        "Grew team from solo practice to 8 professionals",
        "Featured in Architectural Digest Nigeria",
      ],
    },
    {
      period: "2018 - 2020",
      position: "Project Architect",
      company: "Metropolitan Design Group",
      location: "Abuja, Nigeria",
      description:
        "Led design development and project coordination for large-scale commercial and institutional projects.",
      achievements: [
        "Managed $50M+ in construction projects",
        "Led design team of 6 architects and designers",
        "Reduced project delivery time by 20%",
        "Won Best Commercial Design Award 2019",
      ],
    },
    {
      period: "2016 - 2018",
      position: "Design Architect",
      company: "Urban Planning Associates",
      location: "Lagos, Nigeria",
      description:
        "Specialized in urban planning and mixed-use development projects across West Africa.",
      achievements: [
        "Contributed to 10+ urban development projects",
        "Collaborated with international design teams",
        "Published research on sustainable urban design",
        "Mentored junior architects and interns",
      ],
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Excellence in Sustainable Design",
      organization: "Nigerian Institute of Architects",
      project: "Eco-Villa Residential Complex",
    },
    {
      year: "2022",
      title: "Emerging Architect of the Year",
      organization: "West African Architecture Awards",
      project: "Community Learning Center",
    },
    {
      year: "2021",
      title: "Best Residential Design",
      organization: "Lagos Architecture Festival",
      project: "Modern Villa Estate",
    },
    {
      year: "2019",
      title: "Innovation in Commercial Design",
      organization: "Nigeria Building Awards",
      project: "Corporate Headquarters",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Adebayo Johnson",
      position: "CEO, Johnson Holdings",
      project: "Corporate Headquarters",
      content:
        "Adekola's innovative approach transformed our vision into reality. The headquarters not only looks stunning but functions perfectly for our team's collaborative needs.",
      rating: 5,
    },
    {
      name: "Mrs. Fatima Al-Hassan",
      position: "Homeowner",
      project: "Luxury Villa",
      content:
        "Working with Adekola was exceptional. He listened to our needs and created a home that perfectly balances luxury with family functionality. We couldn't be happier.",
      rating: 5,
    },
    {
      name: "Prof. Michael Ogbonna",
      position: "University Administrator",
      project: "Learning Center",
      content:
        "The community learning center has become a landmark in our area. Adekola's design expertise created a space that truly serves and inspires our community.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional
            <span className="block text-gray-900">Journey & Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 8 years of architectural excellence, from innovative design
            solutions to industry recognition and client satisfaction.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-24 bg-gray-300 hidden md:block" />
                )}

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full text-white text-sm font-bold flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {job.position}
                          </h4>
                          <p className="text-gray-700 font-semibold">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 md:mt-0">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {job.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Awards & Recognition
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {award.title}
                      </h4>
                      <span className="text-sm text-gray-500 font-medium">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      {award.organization}
                    </p>
                    <p className="text-gray-600 text-sm">{award.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Client Testimonials
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                whileHover={{ y: -5 }}
              >
                <Quote className="w-8 h-8 text-gray-600 mb-4" />

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-700 mt-1">
                      {testimonial.project}
                    </p>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gray-700 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
