import NextHead from 'next/head'
import React from 'react'

import type { GetStaticProps, NextPage } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

type HeadProps = {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImageSrc?: string
  ogURL?: string
  twTitle?: string
  twDescription?: string
  twImageSrc?: string
}

const Head = (props: HeadProps) => {
  return (
    <NextHead>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* og */}
      <meta property='og:title' content={props.ogTitle ?? props.title} />
      <meta property='og:description' content={props.ogDescription ?? props.description} />
      <meta property='og:image' content={props.ogImageSrc} />
      <meta property='og:url' content={props.ogURL} />
      {/* twitter */}
      <meta name='twitter:title' content={props.twTitle ?? props.title} />
      <meta name='twitter:description' content={props.twDescription ?? props.description} />
      <meta name='twitter:image:src' content={props.twImageSrc} />
    </NextHead>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head title='Template' description='This is Template' />
      <div>This is Template</div>
    </div>
  )
}

export default Home
