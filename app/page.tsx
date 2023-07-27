"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Bee, BeeContainer, BeeEye, GradientBackgroundCon, Ground, GroundCircles, LeftWing, RightWing } from '@/components/QuoteGenerator/QuoteGeneratorElements'

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
      </GradientBackgroundCon>
    </>
  )
}
