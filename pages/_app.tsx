import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'

Amplify.configure({
	aws_appsync_graphqlEndpoint:
		'https://vj7he5giivhr7jebmk63l3hojq.appsync-api.us-east-1.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-1',
	aws_appsync_authenticationType: 'API_KEY',
	aws_appsync_apiKey: 'da2-l7pxlifk2fhfreqwuf6slxlvrq',
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
