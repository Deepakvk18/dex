import React from 'react'
import AppWalletProvider from './wallet-providers'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWalletProvider>
        {children}
    </AppWalletProvider>
  )
}

export default Providers
