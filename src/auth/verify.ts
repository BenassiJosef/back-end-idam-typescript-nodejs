import { ClientId } from "../aws/config";
import Cognito from "../aws/services/cognito";
import { registerVerifyInterface } from "../__interfaces__/registerVerify_payload";

interface RegResponse {
  status: number | undefined;
  body: string;
}

export const registerVerify = async (payload: registerVerifyInterface): Promise<RegResponse> => {
  const confirmCognitoUser = {
    ClientId: ClientId,
    Username: payload.username,
    ConfirmationCode: payload.code
  };

  try {
    const response = await Cognito.confirmSignUp(confirmCognitoUser);
    return { status: response.$metadata.httpStatusCode, body: JSON.stringify(response) };
  } catch (error) {
    return { status: error.$metadata.httpStatusCode, body: error.name };
  }
};