import { Barlow } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const barlow = Barlow({ subsets: ['latin'], weight: ['400'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <style jsx global>{`
          html {
            font-family: ${barlow.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
    )
  }