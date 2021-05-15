import { AppProps } from "next/app"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Boilerplate</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
