"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const WhyChooseSection = ({ isVisible }) => {
  const reasons = [
    {
      icon: "✔️",
      title: "Specifically designed for retail-heavy industries",
      description: "Built with fashion and footwear businesses in mind",
    },
    {
      icon: "✔️",
      title: "Scalable from single store to 100+ outlets",
      description: "Grows with your business expansion",
    },
    {
      icon: "✔️",
      title: "Cloud-based with mobile access",
      description: "Access your business data anywhere, anytime",
    },
    {
      icon: "✔️",
      title: "Integrated accounting, inventory & POS",
      description: "All-in-one solution for complete business management",
    },
    {
      icon: "✔️",
      title: "Custom implementation and support included",
      description: "Dedicated support team for seamless setup",
    },
  ]

  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-blue-900 py-20 relative overflow-hidden"
      id="animate-why-choose"
    >
      {/* Background decorative elements */}
      <motion.div
        animate={{ x: [-50, 50, -50], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full opacity-10 blur-3xl"
      />
      <motion.div
        animate={{ x: [50, -50, 50], y: [0, -20, 0] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-800 rounded-full opacity-10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-why-choose"] ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        >
           Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Fusorum ERP
          </span>{" "}
          for Your Fashion Brand?
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible["animate-why-choose"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-16"
        >
          Fusorum ERP stands out as the ideal choice for fashion and footwear businesses due to its tailored features,
          scalability, and comprehensive support.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={isVisible["animate-why-choose"] ? { y: 0, opacity: 1, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden group flex items-start space-x-6"
            >
              {/* Animated Checkmark Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible["animate-why-choose"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg text-3xl text-white"
              >
                {reason.icon}
              </motion.div>

              {/* Content */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-why-choose"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
                  className="text-white font-bold text-xl mb-2 leading-tight"
                >
                  {reason.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-why-choose"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {reason.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Separate div for the last 2 items to ensure proper centering and full width coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={isVisible["animate-why-choose"] ? { y: 0, opacity: 1, rotateX: 0 } : {}}
              transition={{
                delay: (index + 3) * 0.15, // Adjust delay for staggered animation
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden group flex items-start space-x-6"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible["animate-why-choose"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: (index + 3) * 0.15 + 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg text-3xl text-white"
              >
                {reason.icon}
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-why-choose"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: (index + 3) * 0.15 + 0.6, duration: 0.4 }}
                  className="text-white font-bold text-xl mb-2 leading-tight"
                >
                  {reason.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-why-choose"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: (index + 3) * 0.15 + 0.8, duration: 0.4 }}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {reason.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-why-choose"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          {/* <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started Today
          </Button> */}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSection
