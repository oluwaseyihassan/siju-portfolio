import { motion } from "framer-motion";
import { Building, Mail, Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/adekolaadesijuola", name: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/adekolaadesijuola", name: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/adekolaadesijuola", name: "Twitter" },
    { icon: Mail, href: "mailto:adesijuolaadekola17@gmail.com", name: "Email" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Adekola Adesijuola</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                title={social.name}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6"
          >
            <p className="text-gray-600 text-sm">
              © 2025 Adekola Adesijuola. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm group"
              whileHover={{ y: -1 }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
