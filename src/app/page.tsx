'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, ShoppingBag, Shield, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'

// Types
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Components
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="View D Shop" className="h-16" />
          <div className="flex gap-6">
            <button className="text-text-secondary hover:text-primary transition-colors">
              คอลเลคชั่น
            </button>
            <button className="text-text-secondary hover:text-primary transition-colors">
              โปรโมชั่น
            </button>
            <button className="text-text-secondary hover:text-primary transition-colors">
              สมาชิก
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="pt-36 pb-16 px-4 bg-gradient-to-br from-secondary to-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            variants={fadeIn}
          >
            แฟชั่นระดับพรีเมียม ที่คุณเข้าถึงได้
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary mb-8"
            variants={fadeIn}
          >
            อัพเดทเทรนด์ล่าสุดจากแบรนด์ดัง พร้อมส่งตรงถึงคุณภายใน 24 ชั่วโมง
          </motion.p>
          <div className="flex justify-center gap-4">
            <motion.button 
              className="px-8 py-3 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-[#2A3B4D] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ช้อปเลย <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ดูคอลเลคชั่นใหม่
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            สิทธิพิเศษสำหรับคุณ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShoppingBag className="w-8 h-8 text-primary" />}
              title="สินค้าพร้อมส่งทุกชิ้น"
              description="ไม่ต้องรอพรีออเดอร์ จัดส่งทันทีที่สั่งซื้อ"
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="ระบบการชำระเงินที่ปลอดภัย"
              description="รองรับทุกช่องทางการชำระเงิน พร้อมระบบความปลอดภัยระดับสากล"
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-primary" />}
              title="บริการหลังการขาย 24/7"
              description="ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือตลอด 24 ชั่วโมง"
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-primary" />}
              title="สะสมแต้มแลกส่วนลด"
              description="ยิ่งช้อป ยิ่งคุ้ม ด้วยระบบสะสมแต้มสุดพิเศษ"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">View D Shop</h3>
              <p className="text-gray-300 text-sm">
                เลขที่ 25 อาคารอัลม่าลิงค์ ชั้น 17 ห้อง 352
                <br />ซอยชิดลม ถนนเพลินจิต แขวงลุมพินี
                <br />เขตปทุมวัน กรุงเทพฯ 10330
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">เงื่อนไขการใช้บริการ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ติดตามเรา</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Line</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 View D Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}