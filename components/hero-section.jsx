"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection = ({ isVisible }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20" id="animate-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible["animate-hero"] ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isVisible["animate-hero"] ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Revolutionizing Retail for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Fashion, Apparel & Footwear
                </span>
              </motion.h1>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible["animate-hero"] ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl font-semibold text-gray-700 mb-6"
              >
                Your Fashion. Our Technology. Total Control.
              </motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible["animate-hero"] ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                In a world where seasonality changes quickly, customer trends shift fast, and inventory piles up
                silently, Fusorum empowers apparel and footwear brands to stay lean, data-driven, and profit-focused.
              </motion.p>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible["animate-hero"] ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
               
              </motion.p>
            </motion.div>
          </div>

          {/* Right Side - Visual Elements (Image instead of cards) */}
          <div className="relative">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible["animate-hero"] ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible["animate-hero"] ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* /* <Image
                  src="/placeholder.svg?height=400&width=600" // Placeholder image
                  alt="Fashion Retail Solution"
                  width={600}
                  height={400}
                  layout="responsive"
                  className="object-cover"
                /> */ }
                <img
        src="./public/footwear.jpg"
        alt="Bags and Shoes Display"
        className="w-full max-w-4xl rounded-lg shadow-lg"
      />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-4 shadow-xl"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isVisible["animate-hero"] ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-white text-2xl"
                >
                  🎯
                </motion.div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-xl"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={isVisible["animate-hero"] ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  className="text-white text-2xl"
                >
                  🚀
                </motion.div>
              </motion.div>

              {/* Background Decorations */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        {/* <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible["animate-hero"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Fashion Brands", icon: "👗" },
            { number: "1M+", label: "Products Managed", icon: "📦" },
            { number: "99.9%", label: "Uptime", icon: "⚡" },
            { number: "24/7", label: "Support", icon: "🤝" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible["animate-hero"] ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg text-center border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={isVisible["animate-hero"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                className="text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default HeroSection
