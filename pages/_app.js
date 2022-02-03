
import Head from "next/head"
import { gsap } from "gsap"
import "bootswatch/dist/darkly/bootstrap.min.css"
import "../assets/css/global.css"

function Myapp({ Component, pageProps }) {
    return (
    <>
      <Head>
        <title>JAEM &#47; Developer Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
    )
  }

  export default Myapp