import './globals.css'
import { Inter, Roboto_Mono } from '@next/font/google'

const inter = Inter({
  variable: '--font-inter'
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
