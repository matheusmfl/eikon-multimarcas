import Image from 'next/image'
import iconSeguranca from '../assets/icons/seguranca.svg'
import iconQualidade from '../assets/icons/qualidade.svg'
import iconPackage from '../assets/icons/package.svg'
import iconLucro from '../assets/icons/lucro.svg'
import arrow from '../assets/arrow-down.svg'
import { CtaButton } from './CtaButton'

export function Section1() {
  return (
    <>
      {/* Cta botão */}

      <div className="-translate-y-6 flex align-center justify-center hover:brightness-75 hover:cursor-pointer">
        <CtaButton title="SOLICITAR CATALOGO" />
      </div>
      <section className="py-6 px-3 flex flex-col gap-5">
        {/* div cards */}
        <div className="grid grid-cols-2 gap-[8px]">
          <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center gap-3">
            <Image src={iconSeguranca} alt="Icone" />
            <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
              compra
              <br />
              <span className="text-[#50B924]">segura</span>
            </h3>
          </div>

          {/* Card 2 */}

          <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center gap-3">
            <Image src={iconQualidade} alt="Icone" />
            <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
              qualidade
              <br />
              <span className="text-yellow-400">premium</span>
            </h3>
          </div>

          {/* Card 3 */}

          <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center gap-3">
            <Image src={iconPackage} alt="Icone" />
            <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
              envio
              <br />
              <span className="text-cyan-600">imediato</span>
            </h3>
          </div>

          {/* card 4 */}

          <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center gap-3">
            <Image src={iconLucro} alt="Icone" />
            <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
              lucre até
              <br />
              <span className="text-pink-600">300%</span>
            </h3>
          </div>
        </div>

        {/* container textos */}
        <div className="px-2 flex flex-col items-center justify-center">
          <div className="bg-red-600 w-full">
            <h2 className="font-extrabold font-kanit text-white text-[40px] text-center">
              Lucre até 300%
            </h2>
          </div>
          <span className="font-kanit text-[32px] text-center ">
            revendendo camisetas
          </span>
        </div>
        {/* Texto CTA */}
        <span className="text-white text-base text-center">
          Quer falar com atendente?
        </span>
        <div className="flex items-center justify-center">
          <Image
            src={arrow}
            alt="setinha para baixo"
            className="animate-pulse"
          />
        </div>
      </section>
      {/* CTA botão */}
      <div className="translate-y-6 flex align-center justify-center hover:brightness-75 hover:cursor-pointer">
        <CtaButton title="ATENDIMENTO" />
      </div>
    </>
  )
}
