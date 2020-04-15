"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const cmsClient = app_1.createClient({
    host: "http://localhost:4001",
    tenantKey: "8ded9567-5a95-4cba-9af9-f3230dfceaf8",
    spaceKey: "dc707676-fe0e-4581-ac56-fea4d0cb0c0d"
});
// cmsClient
//   .getNodeByMachineName("234423243")
//   .then((res: any) => console.log("Response", res))
//   .catch((err: any) => console.log("Error", err));
cmsClient
    .getNodes({
    page: 1,
    size: 10
})
    .then((res) => console.log("Response", res))
    .catch((err) => console.log("Error", err));
