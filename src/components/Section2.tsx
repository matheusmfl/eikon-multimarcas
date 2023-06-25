import Image from 'next/image'
import card01 from '../assets/CARD01.png'
import { RedButton } from './microComponents/RedButton'

export function Section2() {
  return (
    <section className="pb-8 flex flex-col gap-3 px-6 bg-slate-50">
      {/* Container contendo imagem */}
      <div className="-translate-y-24">
        <Image src={card01} alt="Imagem de mulher usando conjunto de roupa" />
      </div>

      {/* Container Tamanhos .. */}
      <div className="flex flex-col items-center justify-center">
        {/* Container red */}
        <div className="bg-[#DA1E35] px-8">
          <span className="text-4xl font-kanit font-bold text-center inline-block">
            Tamanhos
          </span>
        </div>
        {/* P-M-G e GG */}
        <span className="px-11 text-black font-kanit text-2xl font-medium">
          P-M-G e GG
        </span>
      </div>

      {/* Container Buttons */}
      <div className="flex flex-col gap-4">
        <RedButton title="Camiseta" sub="gola polo" />
        <RedButton title="T-shirt" />
        <RedButton title="Medidas em" sub="peso e altura" />
      </div>
    </section>
  )
}
