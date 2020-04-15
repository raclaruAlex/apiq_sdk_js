"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileEntityById = (httpClient, fileId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (fileId <= 0) {
        throw new TypeError("File id must be greater than or equal to 1");
    }
    try {
        const response = yield httpClient.get(`files/entity/${fileId}`);
        return response.data;
    }
    catch (err) {
        if (err === null || err === void 0 ? void 0 : err.response) {
            const axiosError = err;
            throw (_b = (_a = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
        }
        throw err;
    }
});
exports.getFileById = (httpClient, fileId) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    if (fileId <= 0) {
        throw new TypeError("File id must be greater than or equal to 1");
    }
    httpClient.interceptors.request.use((config) => (Object.assign(Object.assign({}, config), { responseType: "arraybuffer" })));
    try {
        const response = yield httpClient.get(`files/${fileId}`);
        return Buffer.from(response.data, "binary").toString("base64");
    }
    catch (err) {
        if (err === null || err === void 0 ? void 0 : err.response) {
            const axiosError = err;
            throw (_d = (_c = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message;
        }
        throw err;
    }
});
