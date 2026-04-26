import React, { useState } from 'react'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '✂',
    title: 'Precision Haircut',
    desc: 'Classic, modern, fade, undercut — our barbers sculpt your style with expert precision.',
    tag: 'Most Popular',
  },
  {
    icon: '🧔',
    title: 'Beard Styling & Trim',
    desc: 'Shape, trim, and define your beard for that well-groomed, confident look.',
    tag: '',
  },
  {
    icon: '🪒',
    title: 'Clean Shave',
    desc: 'A smooth, traditional straight-razor shave with hot towel and aftercare treatment.',
    tag: 'Premium',
  },
  {
    icon: '💆',
    title: 'Head Massage',
    desc: 'Relaxing scalp and neck massage to de-stress and improve blood circulation.',
    tag: '',
  },
  {
    icon: '✨',
    title: 'Facial Treatment',
    desc: 'Deep cleansing, de-tanning, and brightening facials designed for men\'s skin.',
    tag: 'New',
  },
  {
    icon: '💇',
    title: 'Hair Colour & Treatment',
    desc: 'Natural black, fashion colours, and keratin treatments for healthier hair.',
    tag: '',
  },
  {
    icon: '🧴',
    title: 'D-Tan & Skin Care',
    desc: 'Targeted de-tanning and skin brightening treatments for a refreshed complexion.',
    tag: '',
  },
  {
    icon: '🖐',
    title: 'Manicure & Pedicure',
    desc: 'Hand and foot care treatments — clean nails, soft skin, confident you.',
    tag: '',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Offer</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>Our Services</h2>
          <p className={styles.sub}>
            A complete grooming experience for the modern man — all under one roof.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.card}>
              {s.tag && <span className={styles.tag}>{s.tag}</span>}
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="tel:+919876543210" className={styles.bookBtn}>Book Now →</a>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="tel:+919876543210" className="btn-primary">📞 Call to Book</a>
          <a href="https://wa.me/919876543210?text=Hi%20KRS%20Salon%2C%20I%27d%20like%20to%20enquire%20about%20services"
             target="_blank" rel="noopener noreferrer" className="btn-outline">
            💬 WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  )
}
