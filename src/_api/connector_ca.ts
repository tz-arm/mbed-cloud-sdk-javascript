/**
 * mbed Cloud Connect CA REST API (R1.2)
 * mbed Cloud Connect CA REST API allows services to get device credentials.
 *
 * OpenAPI spec version: 3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================

/* tslint:disable:no-unused-variable */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";

export interface Body {
    /**
     * Name of the developer certificate, must be unique.
     */
    "name": string;
    /**
     * Description for the developer certificate.
     */
    "description"?: string;
}

export interface InlineResponse200 {
    /**
     * Bootstrap server URI to which the client needs to connect to.
     */
    "server_uri"?: string;
    /**
     * PEM format X.509 server certificate that will be used to validate the server certificate that will be received during the TLS/DTLS handshake.
     */
    "server_certificate"?: string;
}

export interface InlineResponse2001 {
    /**
     * LWM2M server URI to which the client needs to connect to.
     */
    "server_uri"?: string;
    /**
     * PEM format X.509 server certificate that will be used to validate the server certificate that will be received during the TLS/DTLS handshake.
     */
    "server_certificate"?: string;
}

export interface InlineResponse201 {
    /**
     * Content of the security.c file that will be flashed into the device to provide the security credentials
     */
    "security_file_content"?: string;
    /**
     * Description for the developer certificate.
     */
    "description"?: string;
    /**
     * PEM format X.509 developer certificate.
     */
    "developer_certificate"?: string;
    /**
     * URI to which the client needs to connect to.
     */
    "server_uri"?: string;
    /**
     * account to which the developer certificate belongs
     */
    "account_id"?: string;
    /**
     * PEM format developer private key associated to the certificate.
     */
    "developer_private_key"?: string;
    /**
     * PEM format X.509 server certificate that will be used to validate the server certificate that will be received during the TLS/DTLS handshake.
     */
    "server_certificate"?: string;
    /**
     * mUUID that uniquely identifies the developer certificate.
     */
    "id"?: string;
    /**
     * Name of the developer certificate.
     */
    "name"?: string;
}

/**
 * DeveloperCertificateApi
 */
export class DeveloperCertificateApi extends ApiBase {

    /** 
     * Fetch an existing developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to fetch an existing developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server). 
     * @param id A unique identifier for the developer certificate. 
     * @param authorization Bearer {Access Token}. 
     */
    v3DeveloperCertificatesIdGet (id: string, authorization: string, callback?: (error:any, data?:InlineResponse201, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "id" is set
        if (id === null || id === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'id' missing when calling 'v3DeveloperCertificatesIdGet'."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3DeveloperCertificatesIdGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/developer-certificates/{id}'.replace('{' + 'id' + '}', String(id)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Create a new developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to get a developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server).  Limitations:   - One developer certificate allows up to 100 devices to connect to bootstrap server.   - Only 10 developer certificates are allowed per account 
     * @param authorization Bearer {Access Token}. 
     * @param body 
     */
    v3DeveloperCertificatesPost (authorization: string, body: Body, callback?: (error:any, data?:InlineResponse201, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3DeveloperCertificatesPost'."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'body' missing when calling 'v3DeveloperCertificatesPost'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/developer-certificates',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: body,
        }, callback);
    }
}

/**
 * ExternalAPIApi
 */
export class ExternalAPIApi extends ApiBase {

    /** 
     * Fetch an existing developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to fetch an existing developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server). 
     * @param id A unique identifier for the developer certificate. 
     * @param authorization Bearer {Access Token}. 
     */
    v3DeveloperCertificatesIdGet (id: string, authorization: string, callback?: (error:any, data?:InlineResponse201, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "id" is set
        if (id === null || id === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'id' missing when calling 'v3DeveloperCertificatesIdGet'."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3DeveloperCertificatesIdGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/developer-certificates/{id}'.replace('{' + 'id' + '}', String(id)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Create a new developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to get a developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server).  Limitations:   - One developer certificate allows up to 100 devices to connect to bootstrap server.   - Only 10 developer certificates are allowed per account 
     * @param authorization Bearer {Access Token}. 
     * @param body 
     */
    v3DeveloperCertificatesPost (authorization: string, body: Body, callback?: (error:any, data?:InlineResponse201, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3DeveloperCertificatesPost'."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'body' missing when calling 'v3DeveloperCertificatesPost'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/developer-certificates',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: body,
        }, callback);
    }
    /** 
     * Fetch bootstrap server credentials.
     * This REST API is intended to be used by customers to fetch bootstrap server credentials that they will need to use with their clients to connect to bootstrap server. 
     * @param authorization Bearer {Access Token}. 
     */
    v3ServerCredentialsBootstrapGet (authorization: string, callback?: (error:any, data?:InlineResponse200, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3ServerCredentialsBootstrapGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/server-credentials/bootstrap',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Fetch LWM2M server credentials.
     * This REST API is intended to be used by customers to fetch LWM2M server credentials that they will need to use with their clients to connect to LWM2M server. 
     * @param authorization Bearer {Access Token}. 
     */
    v3ServerCredentialsLwm2mGet (authorization: string, callback?: (error:any, data?:InlineResponse2001, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3ServerCredentialsLwm2mGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/server-credentials/lwm2m',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

/**
 * ServerCredentialsApi
 */
export class ServerCredentialsApi extends ApiBase {

    /** 
     * Fetch bootstrap server credentials.
     * This REST API is intended to be used by customers to fetch bootstrap server credentials that they will need to use with their clients to connect to bootstrap server. 
     * @param authorization Bearer {Access Token}. 
     */
    v3ServerCredentialsBootstrapGet (authorization: string, callback?: (error:any, data?:InlineResponse200, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3ServerCredentialsBootstrapGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/server-credentials/bootstrap',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Fetch LWM2M server credentials.
     * This REST API is intended to be used by customers to fetch LWM2M server credentials that they will need to use with their clients to connect to LWM2M server. 
     * @param authorization Bearer {Access Token}. 
     */
    v3ServerCredentialsLwm2mGet (authorization: string, callback?: (error:any, data?:InlineResponse2001, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'authorization' missing when calling 'v3ServerCredentialsLwm2mGet'."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/server-credentials/lwm2m',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

