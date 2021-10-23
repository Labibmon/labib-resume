import { FC } from 'react'
import Head from 'next/head'
import Navbar from 'components/Navbar'

type LayoutPropType = {
}

const Layout: FC<LayoutPropType> = ({
  children
}) => {
  return (
    <>
      <Head>
        <title>Labib</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="webfonts/Inter-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <Navbar/>
        {children}
      </main>
    </>
  )
}
export default Layout;
