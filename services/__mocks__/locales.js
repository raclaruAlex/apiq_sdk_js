"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocales = (client) => {
    return Promise.resolve([
        { id: 1, short: "en", title: "English" },
        { id: 2, short: "ro", title: "Romanian" }
    ]);
};
