import "./globals.css"

export const metadata = {
  title: "Smart ERP for Apparel & Footwear | Inventory, POS & Retail Billing by Fusorum",
  description:
    "Run your fashion and footwear brand smarter with Fusorum ERP. Real-time inventory, barcode-based billing, variant management, and seamless multi-store retail solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
