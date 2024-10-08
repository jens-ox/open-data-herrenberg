import type { Metadata } from 'next'
import { clsx } from 'clsx'
import { Contexts } from '@/components/Contexts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Open Data Herrenberg',
  description: 'Open Data-Portal der Stadt Herrenberg.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={clsx('antialiased font-sans')}>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  )
}
