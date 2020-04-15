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
exports.getFileEntityById = (client, fileId) => __awaiter(void 0, void 0, void 0, function* () {
    if (fileId <= 0) {
        throw new TypeError("File id must be greater than or equal to 1");
    }
    return Promise.resolve({
        id: 163,
        name: "Koala.jpg",
        path: "./uploads/1585310862775_Koala.jpg",
        mimetype: "image/jpeg",
        size: "780831",
        createdAt: "2020-03-27T12:07:42.000Z",
        updatedAt: "2020-03-27T12:07:42.000Z"
    });
});
exports.getFileById = (httpClient, fileId) => __awaiter(void 0, void 0, void 0, function* () {
    if (fileId <= 0) {
        throw new TypeError("File id must be greater than or equal to 1");
    }
    return Promise.resolve("c2Rmc2Rmc2Rmc2Rmc2Rmc2ZzZGZzZGY=");
});
