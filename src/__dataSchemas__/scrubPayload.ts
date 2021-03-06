import ajv from "./validation";

const scrubPayload = <T>(payload: T, schemaName: string): boolean => {
  const validate = ajv.validate(schemaName, payload);
  const errs = ajv.errors;

  if (!validate) {
    if (errs) {
      
      throw new Error(errs[0].message);
    }
    throw new Error("validating schema resulted in Error");
  }

  return true;
};

export default scrubPayload;
