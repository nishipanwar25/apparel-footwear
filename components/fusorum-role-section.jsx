"use client"

import { motion } from "framer-motion"

const FusorumRoleSection = ({ isVisible }) => {
  const features = [
    {
      icon: "🔄",
      title: "Real-Time Stock & Variant Management",
      description:
        "Track every color, size, and style with intelligent product variant grouping. No more stockouts or dead stock—get real-time updates from POS to warehouse.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🧾",
      title: "Barcode-Enabled POS Billing",
      description:
        "Quick checkouts with barcode scanning and GST-compliant invoicing. Enable combo offers, seasonal discounts, and loyalty points right from the counter.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "📊",
      title: "Sales & Trend Insights",
      description:
        "Know what’s trending, what’s stuck, and what’s profitable. Generate product-wise, brand-wise, and category-wise analytics to plan smarter buys.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "🧍",
      title: "CRM & Loyalty Built for Fashion",
      description:
        "Build repeat business with CRM that remembers customer size, preferences, and purchase history. Run personalized SMS campaigns and reward programs easily.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20" id="animate-fusorum-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-fusorum-role"] ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
        >
          👗 Fusorum’s Role in the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Apparel & Footwear Industry
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible["animate-fusorum-role"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-16"
        >
          We help brands streamline their inventory, speed up billing, strengthen customer loyalty, and connect their
          sales channels—in one cloud-based solution. Here’s how:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={isVisible["animate-fusorum-role"] ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`relative p-6 border-b border-gray-200 last:border-b-0 group flex items-start space-x-6 ${
                index === features.length - 1 && features.length % 2 !== 0 ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
              }`}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible["animate-fusorum-role"] ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-xl text-3xl text-white`}
              >
                {feature.icon}
              </motion.div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-fusorum-role"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.4 }}
                  className="text-2xl font-bold text-gray-900 mb-3 leading-tight"
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible["animate-fusorum-role"] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FusorumRoleSection
