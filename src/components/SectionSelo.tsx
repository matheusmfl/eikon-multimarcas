import Image from 'next/image'
import selo from '../assets/selo-mobile1.png'

export function SectionSelo() {
  return (
    <section className="w-full bg-white">
      {/* container img */}
      <div className="w-full">
        <Image src={selo} alt="selos" />
      </div>
    </section>
  )
}
