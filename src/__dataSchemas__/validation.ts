import Ajv from "ajv";
import RegisterSchema from "./schemas/register_schema";
import registerVerifySchema from "./schemas/registerVerify_schema";

const ajv = new Ajv();
ajv.addSchema(RegisterSchema, "register");
ajv.compile(RegisterSchema);

ajv.addSchema(registerVerifySchema, "registerVerify");
ajv.compile(registerVerifySchema);

export default ajv;