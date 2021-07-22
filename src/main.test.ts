import supertest from "supertest"
import {server} from "./main"
import {CognitoIdentityProvider} from "./__mocks__/@aws-sdk/client-cognito-identity-provider"


const request = supertest(server)
const cognito  = new CognitoIdentityProvider()

// should make tests for incorrect payloads as well 
// but that is super tests and mocking aws sdk in place now 

describe('POST /register with correct payload', function() {
    it('responds status code', async function() {
        expect((await request.post('/register').send({
            "name": "Tester",
            "familyName": "McTesting",
            "email": "test@mctesterting.com",
            "username": "test@mctester.com",
            "address": "Test Lane Eh2 4hy",
            "password": "123456789"
        })).status).toBe(200)
        expect(cognito.signUp).toHaveBeenCalledTimes(1)
    });
});

describe('POST /verify with correct payload for register/signUp', function() {
    it('responds status code', async function() {
        expect((await request.post('/verify').send({
            "code": "492420",
            "username": "1ac508a2-b4f9-44f7-ba29-d7d7323f4f3e",
            "userpool" : "test-cdk-test", 
            "clientId" : "68kqvnfa1askqn622e09msktfv", 
            "email": "test@mctesterting.com",
            "event": "verifySignUp" 
        })).status).toBe(200)
        expect(cognito.confirmSignUp).toHaveBeenCalledTimes(1)
    });
});


afterAll(done => {
    server.close()
    done();
});