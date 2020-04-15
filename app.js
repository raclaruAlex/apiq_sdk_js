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
const axios_1 = require("axios");
const nodes_1 = require("./services/nodes");
const locales_1 = require("./services/locales");
const content_types_1 = require("./services/content-types");
const files_1 = require("./services/files");
const health_1 = require("./services/health");
/**
 * @typedef {Object} IFile
 * @prop {number} id - File id
 * @prop {string} name - File name
 * @prop {string} path - File path
 * @prop {string} mimetype - File mime type
 * @prop {string} size - File size (bytes)
 * @prop {Date} createdAt - File creation date
 * @prop {Date} updatedAt - File last updated date
 */
/**
 * @typedef {Object} IFieldType
 * @prop {number} id - Field type id
 * @prop {string} name - Field type name
 * @prop {string} component - Field type component name
 */
/**
 * @typedef {Object} IFieldDefinition
 * @prop {number} id - Field definition id
 * @prop {string} title - Field title
 * @prop {string} machineName - Field machine name
 * @prop {number} position - Field position
 * @prop {string} description - Field definition
 * @prop {string} properties - Field properties (JSON format)
 * @prop {IFieldType} fieldType - Field type
 */
/**
 * @typedef {Object} IContent
 * @prop {number} id - Content id
 * @prop {string} name - Content name
 * @prop {string} machineName - Content machine name
 * @prop {string} description - Content description
 * @prop {boolean} translatable - Is content trnslatable (support multiple locales)
 * @prop {Array<IFieldDefinition>} definitions - List of field definitions
 */
/**
 * @typedef {Object} ILocale
 * @prop {number} id - Locale identifier, unique
 * @prop {string} short - Locale short name
 * @prop {string} title - Locale title
 */
/**
 * @typedef {Object} IField
 * @prop {string} machineName - Field machine name, unique
 * @prop {string} title - Field title
 * @prop {string} description - Field description
 * @prop {number} position - Field position
 * @prop {string} name - Field definition name
 * @prop {string} type - Field definition type
 * @prop {string} value - Field value, for field definition type "FileUpload",
 * this param contains list of file ids, to obtain file is need to call
 * method getFileById(fileId)
 */
/**
 * @typedef {Object} INode
 * @prop {number} id - Node identifier, unique
 * @prop {string} locale - Short node locale
 * @prop {string} title - Node title
 * @prop {string} machineName - Node machine name, unique
 * @prop {Date} createdAt - Node creation date
 * @prop {string} crateBy - Node author
 * @prop {Date} updatedAt - Node last updated date
 * @prop {string} updatedBy - Last user who updated the node
 * @prop {string} contentType - Content type name
 * @prop {Array<IField>} content - List of page fields
 */
/**
 * @typedef {Object} INodeSortByParams
 * @prop {string} id - The field name according to which will be done the sorting, possible values: title, content_type, locale, machine_name, created_at, updated_at
 * @prop {boolean} [desc=false] - Descending sorting, by deafult - false
 */
/**
 * @typedef {Object} ISearchNodeParams
 * @prop {number} page - Page number
 * @prop {number} size - Elements per view
 * @prop {string} [criteria] - The parameter that is used to filter the results, search is made by node title and content type name, not required field
 * @prop {Array<INodeSortByParams>} [sortBy] - Array with fields according to which will be done the sorting, not required field
 */
/**
 * The function that check if server is alive
 * @callback isAlive
 * @returns {boolean} - server status, true if server is alive
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .isAlive()
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * The function that return file in byte array encrypted with base64
 * @callback getFileById
 * @param {number} fileId - file id
 * @returns {string} - Byte array encrypted with base64
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getFileById(1)
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * The function that return file details by his id
 * @callback getFileEntityById
 * @param {number} fileId - file id
 * @returns {IFile} - File details
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getFileEntityById(1)
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * The function that return content definition by content machine name
 * @callback getContentTypeByMachineName
 * @param {string} machineName - content type machine name
 * @returns {IContent} - Content definition
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getContentTypeByMachineName("my_content")
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * The function that return published nodes by content machine name, the function not supports pagination, filtering and sorting
 * @callback getPublishedNodesByContentTypeMachineName
 * @param {string} machineName - content type machine name
 * @returns {Array<INode>} - lsit of nodes
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getPublishedNodesByContentTypeMachineName("my_content")
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * Return all locales, the function not supports pagination, filtering and sorting
 * @callback getLocales
 * @returns {Array<ILocale>} - lsit of locales
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getLocales()
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * Return a published node by machine name
 * @callback getNodeByMachineName
 * @param {string} machineName - node machine name
 * @returns {INode} - node details
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *  .getNodeByMachineName("my_node")
 *  .then((response) => {})
 *  .catch((error) => {});
 */
/**
 * Return all published nodes, the function supports pagination, filtering and sorting
 * @callback getNodes
 * @param {ISearchNodeParams} searchParams - search params
 * @returns {Array<INode>} - list of nodes
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({});
 * cmsClient
 *   .getNodes({page:1, size: 10, criteria: "my_node", sortBy: [{id: "title"}]})
 *   .then((response) => {})
 *   .catch((error) => {});
 */
/**
 * @typedef {Object} ClientAPI
 * @prop {getNodes} getNodes - The function that return all published nodes, the function supports pagination, filtering and sorting
 * @prop {getPublishedNodesByContentTypeMachineName} getPublishedNodesByContentTypeMachineName - The function that return published nodes by content machine name, the function not supports pagination, filtering and sorting
 * @prop {getNodeByMachineName} getNodeByMachineName - The function that return a published node by machine name
 * @prop {getLocales} getLocales - The function that return all locales, the function not supports pagination, filtering and sorting
 * @prop {getContentTypeByMachineName} getContentTypeByMachineName - The function that return content type details by content machine name
 * @prop {getFileEntityById} getFileEntityById - The function that return file details by his id
 * @prop {getFileById} getFileById - The function that return file encrypted in base64
 * @prop {isAlive} isAlive - The function that check if server is alive
 */
/**
 * @typedef {Object} IClientParams
 * @prop {string} host - API host
 * @prop {string} tenantKey - Tenant key
 * @prop {string} spaceKey - Space key
 */
/**
 * Create a client instance
 * @func
 * @name createClient
 * @param {IClientParams} params - Client initialization parameters
 * @returns {ClientAPI} - Client instance
 * @example
 * const cms = require("./app");
 * const cmsClient = cms.createClient({
 *   host: "http://localhost",
 *   tenantKey: "myTenantKey",
 *   spaceKey: "mySpaceKey"
 * });
 */
function createClient(params) {
    if (!params.host) {
        throw new TypeError("Expected parameter host");
    }
    if (!params.tenantKey) {
        throw new TypeError("Expected parameter tenantKey");
    }
    if (!params.spaceKey) {
        throw new TypeError("Expected parameter spaceKey");
    }
    const httpClient = axios_1.default.create({
        baseURL: params.host,
        responseType: "json",
        headers: {
            "Content-Type": "application/json",
            "X-Tenant": params.tenantKey,
            "X-Space": params.spaceKey
        }
    });
    return {
        getNodes: (searchParams) => __awaiter(this, void 0, void 0, function* () {
            return nodes_1.getNodes(httpClient, searchParams);
        }),
        getNodeByMachineName: (machineName) => __awaiter(this, void 0, void 0, function* () {
            return nodes_1.getNodeByMachineName(httpClient, machineName);
        }),
        getLocales: () => __awaiter(this, void 0, void 0, function* () {
            return locales_1.getLocales(httpClient);
        }),
        getPublishedNodesByContentTypeMachineName: (machineName) => __awaiter(this, void 0, void 0, function* () {
            return nodes_1.getPublishedNodesByContentTypeMachineName(httpClient, machineName);
        }),
        getContentTypeByMachineName: (machineName) => __awaiter(this, void 0, void 0, function* () {
            return content_types_1.getContentTypeByMachineName(httpClient, machineName);
        }),
        getFileEntityById: (fileId) => __awaiter(this, void 0, void 0, function* () {
            return files_1.getFileEntityById(httpClient, fileId);
        }),
        getFileById: (fileId) => __awaiter(this, void 0, void 0, function* () {
            return files_1.getFileById(httpClient, fileId);
        }),
        isAlive: () => __awaiter(this, void 0, void 0, function* () {
            return health_1.isAlive(httpClient);
        })
    };
}
exports.createClient = createClient;
