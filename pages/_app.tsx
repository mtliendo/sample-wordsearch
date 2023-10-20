import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'

Amplify.configure({
	aws_appsync_graphqlEndpoint: 'your-url',
	aws_appsync_region: 'us-east-1',
	aws_appsync_authenticationType: 'API_KEY',
	aws_appsync_apiKey: 'da2-ini6ir6dnne6td35t4zseiz3si',
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
