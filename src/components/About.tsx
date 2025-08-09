import { motion } from "framer-motion";
import { Award, Users, Calendar, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "4+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Target, label: "Projects Completed", value: "200+" },
    { icon: Award, label: "Awards Won", value: "15+" },
  ];

  const skills = [
    "Architectural Design",
    "3D Modeling & Visualization",
    "Project Management",
    "Interior Design",
    "Sustainable Architecture",
    "Building Information Modeling (BIM)",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate architect with over 8 years of experience creating
            innovative and sustainable designs across Nigeria and West Africa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Creating Spaces That Inspire
            </h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                I'm Adekola Adesijuola, a licensed architect based in Lagos,
                Nigeria, with a passion for creating functional and beautiful
                spaces that enhance people's lives. My approach combines modern
                design principles with local cultural elements and sustainable
                practices.
              </p>
              <p>
                Throughout my career, I've had the privilege of working on
                diverse projects ranging from residential homes to commercial
                complexes, always striving to exceed client expectations while
                maintaining the highest standards of design excellence.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Core Skills
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
