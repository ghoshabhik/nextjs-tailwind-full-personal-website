import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="">
        <Head />
        <body className="dark:bg-gray-800 dark:text-gray-200 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument