import React from 'react'

import type { AppProps } from 'next/app'

import 'ress'
import '../styles/globals.scss'

/**
 *
 *
 * @param {AppProps} {Component, pageProps}
 * @return {*}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
