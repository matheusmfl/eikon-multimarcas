import Image from 'next/image'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="py-4 bg-black flex items-center justify-center">
      <div>
        <Image src={logo} alt="Imagem da logo" />
      </div>
    </header>
  )
}
