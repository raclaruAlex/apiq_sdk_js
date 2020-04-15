"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
jest.mock("./nodes");
const nodeObj = {
    id: expect.any(Number),
    locale: expect.any(String),
    title: expect.any(String),
    createdAt: expect.any(String),
    crateBy: expect.any(String),
    updatedAt: expect.any(String),
    updatedBy: expect.any(String),
    contentType: expect.any(String),
    content: expect.any(Array)
};
const contentObj = {
    machineName: expect.any(String),
    title: expect.any(String),
    description: expect.any(String),
    position: expect.any(Number),
    name: expect.any(String),
    type: expect.any(String),
    value: expect.any(String)
};
test("Call client.getNodeByMachineName with empty machine name must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getNodeByMachineName("");
    return func().catch(e => expect(e.message).toMatch("Expected parameter machineName"));
});
test("Call client.getNodeByMachineName with non empty machine name must return an object", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getNodeByMachineName("N1");
    return func().then(obj => {
        expect(obj).toMatchObject(nodeObj);
        expect(obj.content).toEqual(expect.arrayContaining([expect.objectContaining(contentObj)]));
    });
});
test("Call client.getNodes with invalid page parameter must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getNodes({
        page: -1,
        size: 10,
        criteria: "myNode",
        sortBy: [{ id: "title" }]
    });
    return func().catch(e => expect(e.message).toMatch("Page must be greater than or equal to 1"));
});
test("Call client.getNodes with invalid size parameter must throw error", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getNodes({
        page: 1,
        size: -1,
        criteria: "myNode",
        sortBy: [{ id: "title" }]
    });
    return func().catch(e => expect(e.message).toMatch("Size must be greater than or equal to 1"));
});
test("Call client.getNodes with valid page and size must return an array of objects", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    const func = () => client.getNodes({
        page: 1,
        size: 10,
        criteria: "myNode",
        sortBy: [{ id: "title" }]
    });
    return func().then(arr => {
        expect(arr).toEqual(expect.arrayContaining([expect.objectContaining(nodeObj)]));
        expect(arr[0].content).toEqual(expect.arrayContaining([expect.objectContaining(contentObj)]));
    });
});
