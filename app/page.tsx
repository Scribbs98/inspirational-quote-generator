"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Bee, BeeContainer, BeeEye, GradientBackgroundCon, LeftWing, RightWing } from '@/components/QuoteGenerator/QuoteGeneratorElements'

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
      </GradientBackgroundCon>
    </>
  )
}
