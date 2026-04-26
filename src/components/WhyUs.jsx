import React from 'react'
import styles from './WhyUs.module.css'

const REASONS = [
  { num: '01', title: 'Experienced Barbers', body: 'Our team has years of hands-on expertise in men\'s grooming. Every cut is deliberate, every shape is precise.' },
  { num: '02', title: 'Clean & Safe Environment', body: 'Fresh towels and sanitised tools for every client. We treat hygiene as a non-negotiable standard, not an afterthought.' },
  { num: '03', title: 'Affordable Excellence', body: 'Professional results shouldn\'t break the bank. Our pricing is transparent, fair, and delivers remarkable value.' },
  { num: '04', title: 'Central Location', body: 'Conveniently located near Bommanahalli with easy access from HSR Layout, BTM, and surrounding areas.' },
  { num: '05', title: 'No Long Waits', body: 'Efficient service with minimal waiting time. Walk in and walk out looking sharp — on your schedule.' },
  { num: '06', title: 'Customer-First Approach', body: 'We listen to what you want and deliver it. Your satisfaction is the only metric that matters to us.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Why KRS</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>Why Bengaluru's Men<br />Choose Us, Again & Again</h2>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.num}>{r.num}</span>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
