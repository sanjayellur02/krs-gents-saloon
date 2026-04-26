import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            <div>
              <span className={styles.logoMain}>KRS</span>
              <span className={styles.logoSub}>Gents Beauty Salon</span>
            </div>
          </div>
          <p className={styles.tagline}>
            Precision grooming for the modern gentleman.<br />
            Bengaluru's trusted name in men's care.
          </p>
        </div>

        <div className={styles.links}>
          <h5 className={styles.colTitle}>Quick Links</h5>
          {['#about','#services','#pricing','#gallery','#reviews','#contact'].map(href => (
            <a key={href} href={href} className={styles.link}
               onClick={e => { e.preventDefault(); scrollTo(href) }}>
              {href.replace('#','').charAt(0).toUpperCase() + href.replace('#','').slice(1)}
            </a>
          ))}
        </div>

        <div className={styles.contact}>
          <h5 className={styles.colTitle}>Contact</h5>
          <a href="tel:+919876543210" className={styles.link}>📞 +91 98765 43210</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.link}>
            💬 WhatsApp Us
          </a>
          <a href="https://maps.app.goo.gl/mLSCx6XghMoKXksk9" target="_blank" rel="noopener noreferrer" className={styles.link}>
            📍 Get Directions
          </a>
          <div className={styles.hours}>
            <span className={styles.hoursLabel}>Mon–Sat: 9 AM – 9 PM</span>
            <span className={styles.hoursLabel}>Sun: 9 AM – 8 PM</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} New KRS Gents Beauty Salon, Bengaluru. All rights reserved.</span>
        <span className={styles.craft}>Crafted with ✦ for premium grooming</span>
      </div>
    </footer>
  )
}
