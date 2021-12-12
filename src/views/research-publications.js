import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './research-publications.module.css'

const ResearchPublications = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Research & Publications - Notus Pro</title>
        <meta
          property="og:title"
          content="Research &amp; Publications - Notus Pro"
        />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['FixedHeader']}>
          <Header rootClassName="rootClassName"></Header>
        </div>
        <img
          alt="image"
          src="/playground_assets/img_0256_%5B1%5D-600h.jpeg"
          className={styles['image']}
        />
        <h1 className={` ${styles['text']} ${projectStyles['text2XL']} `}>
          Research &amp; Publications
        </h1>
        <div className={styles['Bg']}></div>
      </div>
      <div className={styles['PostDetails']}>
        <div className={styles['container1']}>
          <svg viewBox="0 0 1170.2857142857142 1024" className={styles['icon']}>
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className={` ${styles['text01']} ${projectStyles['textXL']} `}>
          posted 18 Sept 2021
        </span>
        <span className={styles['text02']}>
          <span className={styles['text03']}>
            &apos;Started from the bottom now we here&apos;
          </span>
          <span className={styles['text04']}>
            -
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text05']}>Mark Jonson</span>
          <br></br>
        </span>
        <span className={styles['text06']}>
          <span className={styles['text07']}>
            As a result of growing emeraldhouse gas emissions, climate models
            predict that our planet will get significantly warmer, that
            ecosystems will be changed or destroyed, and that enormous human and
            economic costs will be incurred. These scenarios arenât guaranteed,
            but avoiding them will be very hard. Weâre trying to take small
            steps to mitigate our impact.
          </span>
          <br></br>
        </span>
      </div>
      <div className={styles['container2']}></div>
      <div className={styles['Posts']}>
        <a
          href="https://sites.google.com/view/icacontent/home"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link']} ${projectStyles['button']} `}
        >
          Click here for Internal Research site
        </a>
        <div className={styles['container3']}>
          <Label text="STORIES"></Label>
          <h3 className={` ${styles['text08']} ${projectStyles['healine']} `}>
            <span className={styles['text09']}>Quote</span>
          </h3>
          <span className={` ${styles['text10']} ${projectStyles['textXL']} `}>
            something related to agroecology
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <ArticleCard avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></ArticleCard>
        <ArticleCard avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></ArticleCard>
        <ArticleCard avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></ArticleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ResearchPublications
