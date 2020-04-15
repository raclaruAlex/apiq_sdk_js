"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentTypeByMachineName = (client, machineName) => {
    if (!machineName || machineName.length === 0) {
        throw new TypeError("Expected parameter machineName");
    }
    return Promise.resolve({
        id: 1,
        name: "C1",
        machineName: "c1",
        description: "",
        translatable: true,
        definitions: [
            {
                id: 11,
                title: "sda",
                machineName: "sda",
                position: 1,
                description: "",
                properties: '{"required":true}',
                fieldType: { id: 2, name: "Text area", component: "RichTextEditor" }
            },
            {
                id: 12,
                title: "dasd",
                machineName: "dasd",
                position: 2,
                description: "",
                properties: '{"required":false}',
                fieldType: { id: 1, name: "String", component: "TextField" }
            }
        ]
    });
};
