const awsMockReturn = {
  $metadata:{
    httpStatusCode:200,
  },
  CodeDeliveryDetails: "Ok"
}

const signUpFn = jest.fn().mockReturnValue(awsMockReturn)

const confirmSignUpFn = jest.fn().mockReturnValue(awsMockReturn)

export class CognitoIdentityProvider {
  signUp = signUpFn;
  confirmSignUp = confirmSignUpFn;
}
