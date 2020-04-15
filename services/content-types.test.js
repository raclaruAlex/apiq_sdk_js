"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
jest.mock("./content-types");
const contentObj = {
    id: expect.any(Number),
    name: expect.any(String),
    machineName: expect.any(String),
    description: expect.any(String),
    translatable: expect.any(Boolean),
    definitions: expect.any(Array)
};
const definitionObj = {
    id: expect.any(Number),
    title: expect.any(String),
    machineName: expect.any(String),
    position: expect.any(Number),
    description: expect.any(String),
    properties: expect.any(String),
    fieldType: expect.any(Object)
};
const fieldTypeObj = {
    id: expect.any(Number),
    name: expect.any(String),
    component: expect.any(String)
};
test("Call client.getContentTypeByMachineName with empty machine name must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getContentTypeByMachineName("");
    return func().catch(e => expect(e.message).toMatch("Expected parameter machineName"));
});
test("Call client.getContentTypeByMachineName with non empty machine name must return an object", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getContentTypeByMachineName("N1");
    return func().then(obj => {
        expect(obj).toMatchObject(contentObj);
        expect(obj.definitions).toEqual(expect.arrayContaining([expect.objectContaining(definitionObj)]));
        expect(obj.definitions[0].fieldType).toMatchObject(fieldTypeObj);
    });
});
