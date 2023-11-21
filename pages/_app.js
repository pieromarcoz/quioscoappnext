import '@/styles/globals.css'
import {QuioscoProvider} from "@/context/QuioscoProvides";
export default function App({ Component, pageProps }) {
  return(
      <QuioscoProvider>
        <Component {...pageProps} />
      </QuioscoProvider>
  )
}
/**/