import Image from 'next/image'
import aspas from '../../assets/balloonDetail.svg'
import star from '../../assets/star.svg'

export function FeedbackBalloon() {
  return (
    <div className="w-[320px] h-[280px] pb-6 text-black relative flex bg-white px-6 flex-col justify-between items-center rounded-3xl">
      <Image src={aspas} alt="Alterantive text" />

      {/* Div com texto */}

      <div className="text-center">
        <span className="text-center">
          Atendimento ok produto com preço bom recomendo
        </span>
      </div>

      {/* Div com estrelas e nome */}
      <div className="flex flex-col gap-4">
        {/* Container das estrelas */}
        <div className="flex gap-3">
          <Image src={star} alt="Estrelas" />
          <Image src={star} alt="Estrelas" />
          <Image src={star} alt="Estrelas" />
          <Image src={star} alt="Estrelas" />
          <Image src={star} alt="Estrelas" />
        </div>
        {/* Container com  texto */}
        <span className="text-center">Claudio Silva</span>
      </div>
    </div>
  )
}
