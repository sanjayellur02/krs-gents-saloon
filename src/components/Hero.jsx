import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="hero">
      {/* Background texture layers */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGradient} />
      <div className={styles.bgGlow} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Bengaluru's Trusted Gents Salon
        </div>

        <h1 className={styles.title}>
          Look Sharp.<br />
          <span className={styles.titleGold}>Feel Premium.</span>
        </h1>

        <p className={styles.subtitle}>
          Expert grooming, precision cuts & rejuvenating treatments — crafted exclusively for the modern gentleman in Bengaluru.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>4.5★</span>
            <span className={styles.statLabel}>Google Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>

        <div className={styles.ctas}>
          <a href="tel:+919876543210" className="btn-primary">
            📞 Book Appointment
          </a>
          <a href="https://wa.me/919876543210?text=Hi%20KRS%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment"
             target="_blank" rel="noopener noreferrer"
             className="btn-outline">
            💬 WhatsApp Us
          </a>
        </div>

        <div className={styles.address}>
          <span className={styles.pin}>📍</span>
          Near Bommanahalli, Bengaluru, Karnataka
          &nbsp;|&nbsp;
          <span className={styles.hours}>Open Daily · 9 AM – 9 PM</span>
        </div>
      </div>

      {/* Decorative scissor icon */}
      <div className={styles.decoIcon}>✂</div>

      <div className={styles.scrollHint} onClick={() => scrollTo('#about')}>
        <span />
        Explore
      </div>
    </section>
  )
}
