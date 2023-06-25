export function RedButton({ title, sub }: { title: string; sub: string }) {
  return (
    <button className="bg-[#DA1E35] leading-7 h-20 py-2 px-8 font-kanit font-medium text-3xl text-center w-full rounded-3xl">
      {title} <br />
      {sub}
    </button>
  )
}
