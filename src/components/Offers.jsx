import React from 'react'
import styles from './Offers.module.css'

const OFFERS = [
  {
    tag: '🔥 Limited Time',
    title: 'First Visit Special',
    desc: 'New customers get 20% off on their first visit. Try any service and experience the KRS difference.',
    cta: 'Claim Offer',
    highlight: true,
  },
  {
    tag: '👨‍👦 Family Deal',
    title: 'Father + Son Combo',
    desc: 'Get haircuts for dad and child together at a special bundled price. Family grooming made affordable.',
    cta: 'Book Now',
    highlight: false,
  },
  {
    tag: '📅 Weekday Special',
    title: 'Monday–Thursday Savings',
    desc: 'Enjoy ₹50 off on any service worth ₹200 or more when you visit Monday through Thursday.',
    cta: 'Book a Visit',
    highlight: false,
  },
  {
    tag: '💎 Combo Value',
    title: 'Full Grooming Package',
    desc: 'Haircut + Beard + Facial + Head Massage — complete grooming for ₹499 only. Best value in Bengaluru.',
    cta: 'Book Combo',
    highlight: true,
  },
]

export default function Offers() {
  return (
    <section id="offers" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Special Deals</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>Limited Time Offers</h2>
          <p className={styles.sub}>
            Exclusive deals designed to give you maximum value on every visit.
          </p>
        </div>

        <div className={styles.grid}>
          {OFFERS.map((o, i) => (
            <div key={i} className={`${styles.card} ${o.highlight ? styles.highlight : ''}`}>
              <span className={styles.offerTag}>{o.tag}</span>
              <h3 className={styles.offerTitle}>{o.title}</h3>
              <p className={styles.offerDesc}>{o.desc}</p>
              <a href="tel:+919876543210" className={o.highlight ? styles.ctaGold : styles.ctaOutline}>
                {o.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <span className={styles.bannerLabel}>📣 Walk-In Welcome</span>
            <p>No appointments needed. Just walk in — we'll take care of you!</p>
          </div>
          <a href="https://maps.google.com/?q=New+KRS+Gents+Beauty+Salon+Bengaluru"
             target="_blank" rel="noopener noreferrer"
             className="btn-outline">
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
