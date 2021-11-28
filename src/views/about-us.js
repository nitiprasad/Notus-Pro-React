import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Counter from '../components/counter'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about-us.module.css'

const AboutUs = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About Us - Notus Pro</title>
        <meta property="og:title" content="About Us - Notus Pro" />
      </Helmet>
      <div className={styles['Image']}>
        <Header></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image1']}
        />
        <div className={styles['Bg']}></div>
      </div>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <Counter></Counter>
            <Counter type="Photos" number="10"></Counter>
            <Counter type="Comments" number="89"></Counter>
          </div>
          <img
            alt="image"
            src="/playground_assets/international%20center%20of%20agroecology%20logo%20%5B2500%20x%201500%20px%5D-200h.jpeg"
            loading="eager"
            className={styles['image2']}
          />
          <div className={styles['container4']}>
            <div className={styles['container5']}>
              <PrimaryButton button="connect"></PrimaryButton>
            </div>
            <SecondaryButton button="message"></SecondaryButton>
          </div>
        </div>
        <div className={styles['container6']}>
          <h3 className={` ${styles['text']} ${projectStyles['text2XL']} `}>
            International Center for Agroecology
          </h3>
          <div className={styles['container7']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className={` ${styles['text1']} ${projectStyles['textSM']} `}>
              Old Bridge, New Jersey, USA
            </span>
          </div>
          <div className={styles['container8']}></div>
          <span className={styles['text2']}>
            <span className={styles['text3']}>
              Description here with story and goal
            </span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs
