import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, FileX } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Icon */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-8"
            >
              <FileX className="w-16 h-16 text-gray-400" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-gray-300 rounded-full opacity-50"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-gray-400 rounded-full opacity-30"
            />
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold text-gray-900"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed"
            >
              Sorry, the page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#portfolio"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/portfolio/site"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Site Projects
              </Link>
              <Link
                to="/portfolio/cad"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                CAD Projects
              </Link>
              <Link
                to="/portfolio/drawings"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Architectural Drawings
              </Link>
              <Link
                to="/#contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Search className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">
                Still can't find what you're looking for?
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Check the URL for typos or explore my portfolio to discover my
              architectural work.
            </p>
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Browse Portfolio →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
