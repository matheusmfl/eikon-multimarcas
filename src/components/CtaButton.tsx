import Image from 'next/image'
import wpp from '../assets/icons/wpp.svg'

interface Iprops {
  title: string
}

export function CtaButton({ title }: Iprops) {
  return (
    <div className="w-[350px] py-2 flex items-center justify-center gap-3 bg-[#50B924] rounded-[40px]">
      <span className="text-center font-beba text-[26px]">{title}</span>
      <Image src={wpp} alt="Link para whatsapp" />
    </div>
  )
}
