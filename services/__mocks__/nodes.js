"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeObj = {
    id: 1,
    locale: "en",
    title: "N1",
    createdAt: "2020-03-23T11:13:12.000Z",
    crateBy: "admin@example.com",
    updatedAt: "2020-03-23T15:00:54.000Z",
    updatedBy: "admin@example.com",
    contentType: "C1",
    content: [
        {
            machineName: "t1",
            title: "T1",
            description: "D1",
            position: 1,
            name: "String",
            type: "TextField",
            value: "234234"
        },
        {
            machineName: "t2",
            title: "T2",
            description: "D2",
            position: 2,
            name: "Text area",
            type: "RichTextEditor",
            value: "<p>42342342342</p>"
        }
    ]
};
const nodeObj2 = {
    id: 2,
    locale: "en",
    title: "N2",
    createdAt: "2020-03-23T11:13:12.000Z",
    crateBy: "admin@example.com",
    updatedAt: "2020-03-23T15:00:54.000Z",
    updatedBy: "admin@example.com",
    contentType: "C2",
    content: [
        {
            machineName: "t3",
            title: "T3",
            description: "D3",
            position: 1,
            name: "String",
            type: "TextField",
            value: "234234"
        }
    ]
};
exports.getNodeByMachineName = (client, machineName) => {
    if (!machineName || machineName.length === 0) {
        throw new TypeError("Expected parameter machineName");
    }
    return Promise.resolve(Object.assign(Object.assign({}, nodeObj), { machineName }));
};
exports.getNodes = (client, searchParams) => {
    if (!searchParams.page) {
        throw new TypeError("Expected search parameter page");
    }
    else if (searchParams.page <= 0) {
        throw new TypeError("Page must be greater than or equal to 1");
    }
    if (!searchParams.size) {
        throw new TypeError("Expected search parameter size");
    }
    else if (searchParams.size <= 0) {
        throw new TypeError("Size must be greater than or equal to 1");
    }
    return Promise.resolve([
        Object.assign(Object.assign({}, nodeObj), { machineName: "n1" }),
        Object.assign(Object.assign({}, nodeObj2), { machineName: "n2" })
    ]);
};
