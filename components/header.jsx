"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center"
          >
            <Image
              src="/images/fusorum-logo.png"
              alt="Fusorum Billing ERP"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:flex space-x-8"
          >
            {[
              { name: "Company", hasDropdown: true },
              { name: "Industries", hasDropdown: true },
              { name: "Solutions", hasDropdown: true },
              { name: "Career", hasDropdown: false },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
              </motion.div>
            ))}
          </motion.nav>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transform hover:scale-105 transition-transform duration-200">
              Book Demo Now
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
