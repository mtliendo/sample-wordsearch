import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createAmplifyGraphQLAPI } from './api/appsync'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const appName = 'wordSearch'
		const amplifyAPI = createAmplifyGraphQLAPI(this, {
			appName: appName,
		})

		new cdk.CfnOutput(this, 'GraphQLAPIURL', { value: amplifyAPI.graphqlUrl })
		new cdk.CfnOutput(this, 'GraphQLAPIKey', {
			value: amplifyAPI.apiKey || 'no string',
		})
		new cdk.CfnOutput(this, 'GraphQLAPIId', {
			value: amplifyAPI.resources.graphqlApi.apiId,
		})
	}
}
