import { Barlow, Mulish } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({ subsets: ['latin-ext'], weight: ['400'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <style jsx global>{`
          html {
            font-family: ${mulish.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
    )
  }