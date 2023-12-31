import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Bebas_Neue, Roboto, Dosis, Kanit } from 'next/font/google'

export const metadata = {
  title: 'Eikon Multimarcas',
  description: 'Generated by create next app',
}
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-beba',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
})
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-kanit',
})

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dosis',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.className} ${kanit.className} ${roboto.className} ${dosis.className} font-roboto `}
      >
        {children}
      </body>
    </html>
  )
}
