import React from 'react'
import styles from './Pricing.module.css'

const PRICE_CATEGORIES = [
  {
    category: 'Hair Services',
    items: [
      { name: 'Regular Haircut', price: '₹80', time: '20 min' },
      { name: 'Style Cut (Scissors)', price: '₹120', time: '25 min' },
      { name: 'Fade / Undercut', price: '₹150', time: '30 min' },
      { name: 'Kids Haircut (under 10)', price: '₹60', time: '15 min' },
      { name: 'Hair Wash & Blow Dry', price: '₹80', time: '20 min' },
      { name: 'Hair Colour (Global)', price: '₹350+', time: '60 min' },
    ],
  },
  {
    category: 'Beard & Shave',
    items: [
      { name: 'Beard Trim & Shape', price: '₹80', time: '15 min' },
      { name: 'Clean Shave (Razor)', price: '₹100', time: '20 min' },
      { name: 'Beard Colour', price: '₹150', time: '30 min' },
      { name: 'Moustache Trim', price: '₹40', time: '10 min' },
      { name: 'Haircut + Beard Combo', price: '₹180', time: '40 min' },
      { name: 'Full Grooming Package', price: '₹300', time: '60 min' },
    ],
  },
  {
    category: 'Skin & Wellness',
    items: [
      { name: 'Basic Facial (Cleanup)', price: '₹200', time: '30 min' },
      { name: 'D-Tan Facial', price: '₹250', time: '40 min' },
      { name: 'Gold Facial', price: '₹400', time: '45 min' },
      { name: 'Head Massage (Oil)', price: '₹100', time: '20 min' },
      { name: 'Face Bleach', price: '₹120', time: '20 min' },
      { name: 'Manicure', price: '₹150', time: '25 min' },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Transparent Pricing</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>Service Menu & Rates</h2>
          <p className={styles.sub}>
            Premium grooming at honest prices. No hidden charges, ever.
          </p>
        </div>

        <div className={styles.grid}>
          {PRICE_CATEGORIES.map((cat, ci) => (
            <div key={ci} className={styles.card}>
              <h3 className={styles.catTitle}>
                <span className={styles.catLine} />
                {cat.category}
              </h3>
              <div className={styles.items}>
                {cat.items.map((item, ii) => (
                  <div key={ii} className={styles.row}>
                    <div className={styles.rowLeft}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemTime}>⏱ {item.time}</span>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>ℹ</span>
          Prices are indicative and may vary based on hair length or product used. Call us for exact quotes.
        </div>

        <div className={styles.cta}>
          <a href="tel:+919876543210" className="btn-primary">📞 Call for Booking</a>
        </div>
      </div>
    </section>
  )
}
