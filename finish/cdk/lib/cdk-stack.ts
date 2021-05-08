import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const getUsersHandler = new lambda.Function(this, "GetUsers", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("../build"),
      handler: "handler.getUsers"
    });

    // Create the Rest API
    const api = new apigateway.RestApi(this, "UsersApi", {
      restApiName: "Users Management",
      description: "API for management of users."
    });
    // Add the path /users in the API
    const apiResource = api.root.addResource("users");
    const getIntegration = new apigateway.LambdaIntegration(getUsersHandler);
    apiResource.addMethod("GET", getIntegration);
  }
}
