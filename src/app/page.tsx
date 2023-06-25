import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Section2 } from '@/components/Section2'
import { SectionRed } from '@/components/SectionRed'
import { Section1 } from '@/components/section1'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Section1 />
      <SectionRed />
      <Section2 />
    </main>
  )
}
