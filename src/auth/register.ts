import { ClientId } from "../aws/config";
import Cognito from "../aws/services/cognito";
import { RegisterData } from "../__interfaces__/register_payload";

interface RegResponse {
  status: number | undefined;
  body: string;
}

const register = async (payload: RegisterData): Promise<RegResponse> => {
  const newCognitoUser = {
    ClientId: ClientId,
    Username: payload.username,
    Password: payload.password,
    UserAttributes: [
      {
        Name: "email",
        Value: payload.email,
      },
      {
        Name: "name",
        Value: payload.name,
      },
      {
        Name: "family_name",
        Value: payload.familyName,
      },
      {
        Name: "address",
        Value: payload.address,
      },
    ],
  };

  try {
    const response = await Cognito.signUp(newCognitoUser);
    console.log({ status: response.$metadata.httpStatusCode, body: JSON.stringify(response.CodeDeliveryDetails) })
    return { status: response.$metadata.httpStatusCode, body: JSON.stringify(response.CodeDeliveryDetails) };
  } catch (error) {
    return { status: error.$metadata.httpStatusCode, body: error.name };
  }
};

export default register;