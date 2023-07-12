'use client'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Image from 'next/image'
import card01 from '../assets/CARD01.webp'

export function Section2() {
  return (
    <section className="pb-8 flex flex-col gap-3 px-6 bg-slate-50">
      {/* Container contendo imagem */}
      <div className="-translate-y-12">
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
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button className="bg-[#DA1E35] leading-7 h-20 py-2 px-8 font-kanit font-semibold text-3xl text-center w-full rounded-3xl">
              Camisetas <br />
              Gola Polo
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-black/70 data-[state=open]:animate-overlayShow z-[1] fixed inset-0" />
            <AlertDialog.Content
              className="data-[state=open]:animate-contentShow fixed top-[50%] z-[2]
            left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <AlertDialog.Title className="text-gray-600 m-0 text-[17px] font-medium">
                Camisetas Polo em estoque
              </AlertDialog.Title>
              <AlertDialog.Description className="text-gray-800 mt-4 mb-5 text-[15px] leading-normal">
                Aqui vai qualquer coisa...
              </AlertDialog.Description>
              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <button className="text-black bg-slate-400 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Fechar
                  </button>
                </AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button className="bg-[#DA1E35] leading-7 h-20 py-2 px-8 font-kanit font-semibold text-3xl text-center w-full rounded-3xl">
              T-Shirts <br />
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-black/70 data-[state=open]:animate-overlayShow z-[1] fixed inset-0" />
            <AlertDialog.Content
              className="data-[state=open]:animate-contentShow fixed top-[50%] z-[2]
            left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <AlertDialog.Title className="text-gray-600 m-0 text-[17px] font-medium">
                Confira nossas T-shirts em estoque
              </AlertDialog.Title>
              <AlertDialog.Description className="text-gray-800 mt-4 mb-5 text-[15px] leading-normal">
                Aqui vai qualquer coisa...
              </AlertDialog.Description>
              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <button className="text-black bg-slate-400 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Fechar
                  </button>
                </AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button className="bg-[#DA1E35] leading-7 h-20 py-2 px-8 font-kanit font-semibold text-3xl text-center w-full rounded-3xl">
              Medidas em <br />
              Peso e altura
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-black/70 z-[1] data-[state=open]:animate-overlayShow fixed inset-0" />
            <AlertDialog.Content
              className="data-[state=open]:animate-contentShow z-[2] fixed top-[50%] 
            left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <AlertDialog.Title className="text-gray-600 m-0 text-[17px] font-medium">
                Camisetas Polo em estoque
              </AlertDialog.Title>
              <AlertDialog.Description className="text-gray-800 mt-4 mb-5 text-[15px] leading-normal">
                Aqui vai qualquer coisa...
              </AlertDialog.Description>
              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <button className="text-black bg-slate-400 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Fechar
                  </button>
                </AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>

      {/* Final sessão texto */}
      <div className="px-7">
        <span className="text-3xl font-kanit font-medium text-center inline-block pt-2 text-black">
          Click nas opções acima para ver as medidas
        </span>
      </div>
    </section>
  )
}
