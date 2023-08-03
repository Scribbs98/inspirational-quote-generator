"use client"

import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react'

// Components
import { Bee, BeeContainer, BeeEye, FooterContainer, FooterLink, GradientBackgroundCon, Ground, GroundCircles, LeftEar, LeftWing, RightEar, RightWing, Sheep, SheepContainer, SheepFace, SheepLeg1, SheepLeg2, SheepLeg3, SheepLeg4 } from '@/components/QuoteGenerator/QuoteGeneratorElements'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  
  return (
    <>
      <GradientBackgroundCon>

        {/* Background */}
        <BeeContainer>
          <Bee></Bee>
          <LeftWing></LeftWing>
          <RightWing></RightWing>
          <BeeEye></BeeEye>
        </BeeContainer>
        <Ground></Ground>
        <GroundCircles></GroundCircles>
        <SheepContainer>
          <Sheep></Sheep>
          <SheepLeg1></SheepLeg1>
          <SheepLeg2></SheepLeg2>
          <SheepLeg3></SheepLeg3>
          <SheepLeg4></SheepLeg4>
          <SheepFace></SheepFace>
          <LeftEar></LeftEar>
          <RightEar></RightEar>
        </SheepContainer>

        <FooterContainer>
          <>
            Quotes Generated: {numberOfQuotes}
            <br/>
            Developed by <FooterLink href="https://github.com/Scribbs98" target="_blank" rel="noopener noreferrer">@JennaLupton</FooterLink>
          </>
        </FooterContainer>

      </GradientBackgroundCon>
    </>
  )
}
