import {Credentials, Region} from "../config"
import {CognitoIdentityProvider} from '@aws-sdk/client-cognito-identity-provider'

const Cognito = new CognitoIdentityProvider({
    credentials: Credentials,
    region: Region,
  });

export default Cognito;