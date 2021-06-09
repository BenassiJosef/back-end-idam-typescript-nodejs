export const Credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  };
export const Region = process.env.AWS_REGION || ""
export const UserPoolId = process.env.AWS_USER_POOL_ID || "";
export const ClientId = process.env.AWS_USER_POOL_CLIENT_ID || "";