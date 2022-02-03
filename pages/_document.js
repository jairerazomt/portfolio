import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Jair Alexander Erazo M. Blockchain App Developer, SSR Server Side Rendering, consumo de APIs, frontend con Next.js y React, Lenguajes: Java, JavaScript, Solidity, Tecnologías: HTML, CSS, NEXT.js, EVM Etherium Virtual Machine" ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument