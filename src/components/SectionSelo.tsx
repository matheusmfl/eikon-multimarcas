import Image from 'next/image'
import selo from '../assets/selo-mobile1.png'
import seloLarge from '../assets/selo-large.webp'

export function SectionSelo() {
  return (
    <section className="w-full bg-white">
      {/* container img */}
      <div className="w-full md:hidden">
        <Image src={selo} alt="selos" />
      </div>
      <div className="w-full hidden md:block">
        <Image src={seloLarge} alt="selos" />
      </div>
    </section>
  )
}
