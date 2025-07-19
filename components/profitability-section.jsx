"use client"

import { motion } from "framer-motion"

const ProfitabilitySection = ({ isVisible }) => {
  const challenges = [
    {
      challenge: "Overbuying or understocking",
      solution: "Reorder alerts, trend-based reporting",
      impact: "Reduces inventory loss",
    },
    {
      challenge: "Slow checkouts",
      solution: "Barcode POS with variant control",
      impact: "Improves customer experience",
    },
    {
      challenge: "Disconnected online & offline sales",
      solution: "Omnichannel sync",
      impact: "Boosts order fulfillment speed",
    },
    {
      challenge: "Low customer retention",
      solution: "Loyalty & CRM",
      impact: "Increases repeat sales",
    },
    {
      challenge: "Inaccurate costing",
      solution: "Real-time stock valuation",
      impact: "Maintains healthy margins",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20" id="animate-profitability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible["animate-profitability"] ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
        >
          📈 How Fusorum Makes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            Apparel Businesses More Profitable
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible["animate-profitability"] ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-16"
        >
          Fusorum addresses common challenges in the apparel and footwear industry, turning them into opportunities for
          growth and increased profitability.
        </motion.p>

        <div className="overflow-x-auto">
          <motion.table
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible["animate-profitability"] ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="min-w-full rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-lg font-semibold">Challenge</th>
                <th className="py-4 px-6 text-left text-lg font-semibold">Fusorum Solution</th>
                <th className="py-4 px-6 text-left text-lg font-semibold">Profit Impact</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible["animate-profitability"] ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"} hover:bg-blue-100 transition-colors duration-200`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{item.challenge}</td>
                  <td className="py-4 px-6 text-gray-800">{item.solution}</td>
                  <td className="py-4 px-6 text-blue-700 font-semibold">{item.impact}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  )
}

export default ProfitabilitySection
