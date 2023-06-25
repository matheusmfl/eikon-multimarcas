export function SectionRed() {
  return (
    <section className="bg-[#DA1E35] px-6 py-14 flex flex-col gap-6">
      {/* Separator */}
      <div className="h-1 w-full bg-white" />

      {/* TextContainer */}
      <div className="w-full">
        <span className="text-center font-semibold font-kanit text-5xl text-white block w-full">
          compre direto com o maior fornecedor de{' '}
          <span className="font-extrabold">camisetas de luxo</span> do país
        </span>
      </div>
    </section>
  )
}
