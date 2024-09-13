'use client'

import { Theme } from '@radix-ui/themes'
import { ReactNode } from 'react'

export const Contexts = ({ children }: { children: ReactNode }) => {
  return (
    <Theme accentColor="green" radius="medium">
      {children}
    </Theme>
  )
}
