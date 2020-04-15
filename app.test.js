"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
test("Create client without host must throw error", () => {
    expect(() => app_1.createClient({ host: "", tenantKey: "my_tenant", spaceKey: "my_space" })).toThrow(TypeError);
});
test("Create client without tenantKey must throw error", () => {
    expect(() => app_1.createClient({
        host: "my_host",
        tenantKey: "",
        spaceKey: "my_space"
    })).toThrow(TypeError);
});
test("Create client without spaceKey must throw error", () => {
    expect(() => app_1.createClient({ host: "my_host", tenantKey: "my_tenant", spaceKey: "" })).toThrow(TypeError);
});
test("Create client with all parameters must return an object", () => {
    const client = app_1.createClient({
        host: "my_host",
        tenantKey: "my_tenant",
        spaceKey: "my_space"
    });
    expect(client).toHaveProperty("getNodes");
    expect(client).toHaveProperty("getNodeByMachineName");
    expect(client).toHaveProperty("getLocales");
});
