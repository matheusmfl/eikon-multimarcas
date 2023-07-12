import Image from 'next/image'
// import hero from '../assets/hero-img.png'
import heroText from '../assets/hero-text.svg'
import heroTextMd from '../assets/hero-text-md.svg'
import marcas from '../assets/hero-marcas.webp'
import { SwiperComponent } from './microComponents/SwiperComponent'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <>
      <section className="flex py-10 bg-plastic px-5 md:px-10 flex-col gap-8 md:gap-12 items-center xl:flex-row">
        {/* Container para XL */}
        <div className="xl:flex xl:flex-col">
          {/* Container para responsabilididade */}

          <div className="flex flex-col gap-8 items-center md:flex-row md:items-end ">
            {/* div texto */}
            <div className="md:hidden">
              <Image src={heroText} alt="Texto: Direto da fábrica" />
            </div>
            <div className="hidden md:block h-full">
              <Image
                src={heroTextMd}
                alt="Texto: Direto da fábrica"
                className="border-b-[10px] border-red-600"
              />
            </div>

            {/* container com imagem */}
            <div className="w-[300px] h-[380px] xl:hidden">
              <SwiperComponent />
            </div>
          </div>

          {/* Container Para responsabilidade */}
          <div>
            {/* Div texto novamente */}

            <div className="flex flex-col md:flex-row gap-20">
              <h2 className="text-3xl font-dosis font-medium tracking-[1.56px] leading-8 text-center text-black">
                compre a <br />
                <span className="text-red-600 font-bold">
                  preço de custo <br />
                </span>{' '}
                camisetas de
                <br /> grandes marcas
              </h2>
              <div className="w-full md:w-[350px]">
                <Image
                  src={marcas}
                  alt="Marcas à quais trabalhamos"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            {/* div de imagens com marcas */}
          </div>

          {/* Div CTA SO existe a partir do MD */}

          <div className="hidden w-full md:flex md:items-start md:justify-start hover:brightness-75 hover:cursor-pointer">
            <CtaButton title="SOLICITAR CATALOGO" />
          </div>
        </div>

        {/* XL Tela Swiper */}
        <div className="w-full h-full hidden xl:block">
          <SwiperComponent />
        </div>
      </section>
    </>
  )
}
