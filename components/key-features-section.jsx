"use client"

import { motion } from "framer-motion"

const KeyFeaturesSection = ({ isVisible }) => {
  const features = [
    {
      icon: "🎨",
      title: "Variant matrix for size, color, style",
      description: "Complete product variant management",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "🧾",
      title: "Fast GST billing and barcode printing",
      description: "Compliant invoicing with speed",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "🏬",
      title: "Multi-store stock control",
      description: "Centralized inventory management",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "📦",
      title: "Transfer, return & adjustment logs",
      description: "Complete stock movement tracking",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "💳",
      title: "Loyalty and promotional campaign tools",
      description: "Customer retention made easy",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "📊",
      title: "Real-time retail dashboard",
      description: "Live business insights",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "☁️",
      title: "Cloud access from any device",
      description: "Work from anywhere, anytime",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: "📦",
      title: "Supplier & Purchase Order Management",
      description: "Streamline procurement, manage vendors, and track purchase orders from creation to delivery.",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section
      className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 relative overflow-hidden"
      id="animate-key-features"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-key-features"] ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
        >
          🧠 Key Features for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Apparel & Footwear Brands
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible["animate-key-features"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-16"
        >
          Fusorum ERP offers a robust set of features specifically designed to meet the unique demands of the fashion
          and footwear retail industry.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.8, rotateX: -90 }}
              animate={isVisible["animate-key-features"] ? { y: 0, opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="relative p-8 bg-white rounded-3xl shadow-lg overflow-hidden group flex flex-col items-center text-center"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible["animate-key-features"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-3xl text-white`}
              >
                {feature.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isVisible["animate-key-features"] ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                className="text-xl font-bold text-gray-900 mb-3 leading-tight"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible["animate-key-features"] ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                className="text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesSection
