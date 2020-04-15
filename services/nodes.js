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
exports.getNodeByMachineName = (httpClient, machineName) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!machineName || machineName.length === 0) {
        throw new TypeError("Expected parameter machineName");
    }
    try {
        const response = yield httpClient.get(`nodes/${machineName}`);
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
exports.getNodes = (httpClient, searchParams) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
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
    try {
        const response = yield httpClient.post(`nodes/search`, Object.assign(Object.assign({}, searchParams), { criteria: { _: searchParams.criteria } }));
        return response.data;
    }
    catch (err) {
        if (err === null || err === void 0 ? void 0 : err.response) {
            const axiosError = err;
            throw (_d = (_c = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message;
        }
        throw err;
    }
});
exports.getPublishedNodesByContentTypeMachineName = (httpClient, machineName) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    if (!machineName || machineName.length === 0) {
        throw new TypeError("Expected parameter machineName");
    }
    try {
        const response = yield httpClient.get(`nodes/content-type/${machineName}`);
        return response.data;
    }
    catch (err) {
        if (err === null || err === void 0 ? void 0 : err.response) {
            const axiosError = err;
            throw (_f = (_e = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.message;
        }
        throw err;
    }
});
