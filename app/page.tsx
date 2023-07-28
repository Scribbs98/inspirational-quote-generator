"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Bee, BeeContainer, BeeEye, GradientBackgroundCon, Ground, GroundCircles, LeftEar, LeftWing, RightEar, RightWing, Sheep, SheepContainer, SheepFace, SheepLeg1, SheepLeg2, SheepLeg3, SheepLeg4 } from '@/components/QuoteGenerator/QuoteGeneratorElements'

export default function Home() {
  return (
    <>
      {/* Background */}
      <GradientBackgroundCon>
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
      </GradientBackgroundCon>
    </>
  )
}
