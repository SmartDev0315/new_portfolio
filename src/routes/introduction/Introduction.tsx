import './Introduction.scss'

import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import Button from '~/components/Button/Button'
import { useEffect, useState } from 'react'
import { RandomizeText } from '~/components/RandomizeText/RandomizeText'

export default function Introduction() {
  return (
    <LayoutDefault>
      <div className="introduction-page">
        <img className="avatar" src="profile-square@500px.jpg" alt="avatar" />

        <div className="main-title-container">
          <RandomizeText
            text="Norma"
            className="main-title"
            callOnMounted
          ></RandomizeText>
          <RandomizeText
            text="Morris"
            className="main-title"
            tagName="h1"
            callOnMounted
          ></RandomizeText>
        </div>

        <p className="about-me">
        I have very much experience in developing and designing web applications using HTML, CSS, JavaScript, React, Next.js, Node.js and so on. Knowledgeable of backend and frontend development requirements. I can handles any part of process with ease. And I am a collaborative team player with excellent technical abilities offering 5 years of related experience.
        I have a flexible approach to my work and together with the ability to cope with pressure and deadlines.
        </p>

        <Button to="/expertise">What can I contribute to your company?</Button>
      </div>
    </LayoutDefault>
  )
}
