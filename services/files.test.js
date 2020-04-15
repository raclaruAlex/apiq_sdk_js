"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
jest.mock("./files");
const fileEntityObj = {
    id: expect.any(Number),
    name: expect.any(String),
    path: expect.any(String),
    mimetype: expect.any(String),
    size: expect.any(String),
    createdAt: expect.any(String),
    updatedAt: expect.any(String)
};
test("Call client.getFileEntityById with invalid fileId parameter must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getFileEntityById(0);
    return func().catch(e => expect(e.message).toMatch("File id must be greater than or equal to 1"));
});
test("Call client.getFileEntityById with valid fileId must return an object", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getFileEntityById(1);
    return func().then(obj => {
        expect(obj).toMatchObject(fileEntityObj);
    });
});
test("Call client.getFileById with invalid fileId parameter must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getFileById(0);
    return func().catch(e => expect(e.message).toMatch("File id must be greater than or equal to 1"));
});
test("Call client.getFileById with valid fileId must return an string", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getFileById(1);
    return func().then(obj => {
        expect.stringMatching(obj);
    });
});
