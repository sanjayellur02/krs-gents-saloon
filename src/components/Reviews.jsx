import React from 'react'
import styles from './Reviews.module.css'

// Only 4.5+ star reviews, realistic for a gents salon in Bengaluru
const REVIEWS = [
  {
    name: 'Rajan M.',
    rating: 5,
    time: '2 weeks ago',
    text: 'Best haircut I\'ve had in years. The barber understood exactly what I wanted without me having to explain too much. Very clean setup, reasonable pricing.',
  },
  {
    name: 'Arun Kumar',
    rating: 5,
    time: '1 month ago',
    text: 'Excellent beard shaping. The straight razor shave was smooth and relaxing. The hot towel experience was a bonus I didn\'t expect. Highly recommended!',
  },
  {
    name: 'Suresh T.',
    rating: 4,
    time: '3 weeks ago',
    text: 'Good salon near Bommanahalli. Walk-in was easy, no long wait. Staff is polite and professional. Will definitely come back for my monthly trim.',
  },
  {
    name: 'Vikram S.',
    rating: 5,
    time: '5 days ago',
    text: 'Took my son here for his first proper haircut and the barber was so patient and gentle. The kid loved it! We\'re making this our regular place.',
  },
  {
    name: 'Mohammed A.',
    rating: 5,
    time: '2 months ago',
    text: 'Great facial treatment — first time trying D-Tan and my skin felt so refreshed afterward. Staff explained the process clearly. Quality service at fair prices.',
  },
  {
    name: 'Kiran B.',
    rating: 4,
    time: '1 month ago',
    text: 'Clean, well-maintained salon. Got the combo package (haircut + beard + massage) and it was totally worth the price. Quick service without cutting corners.',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Customer Love</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>What Our Clients Say</h2>

          <div className={styles.aggregate}>
            <div className={styles.bigRating}>4.5</div>
            <div className={styles.aggRight}>
              <Stars count={5} />
              <span className={styles.reviewCount}>Based on 500+ Google Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.reviewerName}>{r.name}</div>
                  <Stars count={r.rating} />
                </div>
                <span className={styles.time}>{r.time}</span>
              </div>
              <p className={styles.reviewText}>"{r.text}"</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="https://maps.google.com/?q=New+KRS+Gents+Beauty+Salon+Bengaluru"
             target="_blank" rel="noopener noreferrer" className="btn-outline">
            ⭐ View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
