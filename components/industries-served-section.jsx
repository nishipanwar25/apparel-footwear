"use client"

import { motion } from "framer-motion"

const IndustriesServedSection = ({ isVisible }) => {
  const industries = [
    {
      icon: "👚",
      title: "Fashion Boutiques",
      description: "Elegant solutions for high-end fashion retailers",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "👞",
      title: "Footwear Retail Chains",
      description: "Specialized tools for shoe and footwear businesses",
      color: "from-brown-500 to-amber-500",
    },
    {
      icon: "🧥",
      title: "Multi-brand Clothing Stores",
      description: "Manage multiple brands under one roof",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "🩳",
      title: "Streetwear Startups",
      description: "Perfect for emerging streetwear brands",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "👔",
      title: "Men's, Women's & Kidswear Retailers",
      description: "Comprehensive solutions for all demographics",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "🧢",
      title: "Accessories & Lifestyle Stores",
      description: "Complete management for lifestyle products",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20" id="animate-industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-industries"] ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
        >
           Industries Served Under{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Apparel & Footwear
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible["animate-industries"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-16"
        >
          Fusorum ERP is designed to cater to a wide range of businesses within the apparel and footwear industry,
          providing specialized solutions for each segment.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={isVisible["animate-industries"] ? { y: 0, opacity: 1, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible["animate-industries"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg text-3xl text-white`}
              >
                {industry.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isVisible["animate-industries"] ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
                className="text-xl font-bold text-gray-900 mb-4"
              >
                {industry.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible["animate-industries"] ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
                className="text-gray-600 leading-relaxed"
              >
                {industry.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesServedSection
