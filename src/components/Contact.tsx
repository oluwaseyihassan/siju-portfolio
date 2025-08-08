import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adesijuolaadekola17@gmail.com",
      link: "mailto:adesijuolaadekola17@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 803 123 4567",
      link: "tel:+2348031234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Mon - Fri: 9AM - 6PM",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/adekolaadesijuola",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/adekolaadesijuola",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/adekolaadesijuola",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next architectural project? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600">{info.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <a
            href="mailto:adesijuolaadekola17@gmail.com?subject=Project Inquiry&body=Hello Adekola,%0A%0AI would like to discuss a potential architectural project with you.%0A%0AThank you!"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Send Email</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Me</h3>
          <p className="text-gray-600 mb-8">
            Stay connected and see my latest work
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
