"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
jest.mock("./locales");
test("Call client.getLocales must return an array of objects", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getLocales();
    return func().then(arr => {
        expect(arr).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                short: expect.any(String),
                title: expect.any(String)
            })
        ]));
    });
});
