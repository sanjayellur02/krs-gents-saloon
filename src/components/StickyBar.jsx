import React, { useState, useEffect } from 'react'
import styles from './StickyBar.module.css'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <a href="tel:+919876543210" className={styles.callBtn}>
        📞 Call Now
      </a>
      <a
        href="https://wa.me/919876543210?text=Hi%20KRS%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waBtn}
      >
        💬 WhatsApp
      </a>
    </div>
  )
}
