import Image from 'next/image'
import iconSeguranca from '../assets/icons/seguranca.svg'
import iconQualidade from '../assets/icons/qualidade.svg'
import iconPackage from '../assets/icons/package.svg'
import iconLucro from '../assets/icons/lucro.svg'

export function Section1() {
  return (
    <section className="py-14 px-3 flex flex-col gap-5">
      {/* div cards */}
      <div className="grid grid-cols-2 gap-[8px]">
        <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center">
          <Image src={iconSeguranca} alt="Icone" />
          <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
            compra
            <br />
            <span className="text-[#50B924]">segura</span>
          </h3>
        </div>

        {/* Card 2 */}

        <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center">
          <Image src={iconQualidade} alt="Icone" />
          <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
            qualidade
            <br />
            <span className="text-yellow-400">premium</span>
          </h3>
        </div>

        {/* Card 3 */}

        <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center">
          <Image src={iconPackage} alt="Icone" />
          <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
            envio
            <br />
            <span className="text-cyan-600">imediato</span>
          </h3>
        </div>

        {/* card 4 */}

        <div className="bg-slate-50 rounded-xl py-[10px] flex flex-col items-center justify-center">
          <Image src={iconLucro} alt="Icone" />
          <h3 className="font-dosis text-2xl text-black uppercase font-bold text-center leading-6">
            lucre até
            <br />
            <span className="text-pink-600">300%</span>
          </h3>
        </div>
      </div>

      {/* container textos */}
      <div>
        <div className="bg-red-600 font-roboto">
          <h2 className="font-extrabold text-white text-[40px]">
            Lucre até 300%
          </h2>
        </div>
      </div>
    </section>
  )
}
