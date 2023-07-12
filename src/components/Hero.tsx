import Image from 'next/image'
// import hero from '../assets/hero-img.png'
import heroText from '../assets/hero-text.svg'
import marcas from '../assets/hero-marcas.webp'
import { SwiperComponent } from './microComponents/SwiperComponent'

export function Hero() {
  return (
    <>
      <section className="flex py-10 bg-plastic px-5 flex-col gap-8 items-center">
        {/* div texto */}
        <div>
          <Image src={heroText} alt="Texto: Direto da fábrica" />
        </div>

        {/* container com imagem */}
        <div className="w-[300px] h-[380px]">
          <SwiperComponent />
        </div>

        {/* Div texto novamente */}
        <div>
          <h2 className="text-3xl font-dosis font-medium tracking-[1.56px] leading-8 text-center text-black">
            compre a <br />
            <span className="text-red-600 font-bold">
              preço de custo <br />
            </span>{' '}
            camisetas de
            <br /> grandes marcas
          </h2>
        </div>
        {/* div de imagens com marcas */}
        <div className="w-full">
          <Image
            src={marcas}
            alt="Marcas à quais trabalhamos"
            width={600}
            height={600}
          />
        </div>
      </section>
    </>
  )
}
