"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
jest.mock("./health");
test("Call client.isAlive must return boolean", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.isAlive();
    return func().then(obj => {
        expect(typeof obj === "boolean").toBeTruthy();
    });
});
