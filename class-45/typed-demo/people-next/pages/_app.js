import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>Is this Shared!</div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
