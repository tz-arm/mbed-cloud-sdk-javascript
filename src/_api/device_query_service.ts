// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
/**
 * Device Query Service API
 * This is the API Documentation for the mbed device query service update service.
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";
import { SDKError } from "../common/sdkError";

export interface DeviceQuery {
    /**
     * The name of the query.
     */
    "name": string;
    /**
     * The time the object was created.
     */
    "created_at": Date;
    /**
     * The API resource entity.
     */
    "object": string;
    /**
     * The time the object was updated.
     */
    "updated_at": Date;
    /**
     * The entity instance signature.
     */
    "etag": Date;
    /**
     * The device query.
     */
    "query": string;
    /**
     * The ID of the query.
     */
    "id": string;
}

export interface DeviceQueryPage {
    "object": string;
    "has_more": boolean;
    "total_count": number;
    "after"?: string;
    "limit": number;
    "data": Array<DeviceQuery>;
    "order": string;
}

export interface DeviceQueryPatchRequest {
    /**
     * The device query.
     */
    "query"?: string;
    /**
     * The name of the query.
     */
    "name"?: string;
}

export interface DeviceQueryPostPutRequest {
    /**
     * The device query.
     */
    "query": string;
    /**
     * The name of the query.
     */
    "name": string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * Create device query.
     * @param device 
     */
    deviceQueryCreate (device: DeviceQueryPostPutRequest, callback?: (error:any, data?:DeviceQuery, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "device" is set
        if (device === null || device === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'device' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: device,
        }, callback);
    }
    /** 
     * Delete device query.
     * @param queryId 
     */
    deviceQueryDestroy (queryId: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "queryId" is set
        if (queryId === null || queryId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'queryId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/{query_id}/'.replace('{' + 'query_id' + '}', String(queryId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * List all device queries. The result will be paged into pages of 100.
     * @param limit How many objects to retrieve in the page.
     * @param order ASC or DESC
     * @param after The ID of the the item after which to retrieve the next page.
     * @param filter URL encoded query string parameter to filter returned data.  ##### Filtering &#x60;&#x60;&#x60;?filter&#x3D;{URL encoded query string}&#x60;&#x60;&#x60;  The query string is made up of key/value pairs separated by ampersands. So for a query of &#x60;&#x60;&#x60;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&#x60;&#x60;&#x60; this would be encoded as follows: &#x60;&#x60;&#x60;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&#x60;&#x60;&#x60; The examples below show the queries in *unencoded* form.  ###### By device query properties (all properties are filterable): For example: &#x60;&#x60;&#x60;description&#x3D;{value}&#x60;&#x60;&#x60;  ###### On date-time fields: Date-time fields should be specified in UTC RFC3339 format &#x60;&#x60;&#x60;YYYY-MM-DDThh:mm:ss.msZ&#x60;&#x60;&#x60;. There are three permitted variations:  * UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z * UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z * UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z  Date-time filtering supports three operators:  * equality * greater than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; * less than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60;  Lower and upper limits to a date-time range may be specified by including both the &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; and &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60; forms in the filter.  &#x60;&#x60;&#x60;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&#x60;&#x60;&#x60;  ##### Multi-field example  &#x60;&#x60;&#x60;query_id&#x3D;0158d38771f70000000000010010038c&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&#x60;&#x60;&#x60;  Encoded:  &#x60;&#x60;&#x60;filter&#x3D;query_id%3D0158d38771f70000000000010010038c%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&#x60;&#x60;&#x60;
     * @param include Comma separated list of data fields to return. Currently supported: total_count
     */
    deviceQueryList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:DeviceQueryPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Update device query fields.
     * @param queryId 
     * @param deviceQuery 
     */
    deviceQueryPartialUpdate (queryId: string, deviceQuery: DeviceQueryPatchRequest, callback?: (error:any, data?:DeviceQuery, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "queryId" is set
        if (queryId === null || queryId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'queryId' missing."));
            }
            return;
        }
        // verify required parameter "deviceQuery" is set
        if (deviceQuery === null || deviceQuery === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceQuery' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/{query_id}/'.replace('{' + 'query_id' + '}', String(queryId)),
            method: 'PATCH',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: deviceQuery,
        }, callback);
    }
    /** 
     * Retrieve device query.
     * @param queryId 
     */
    deviceQueryRetrieve (queryId: string, callback?: (error:any, data?:DeviceQuery, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "queryId" is set
        if (queryId === null || queryId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'queryId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/{query_id}/'.replace('{' + 'query_id' + '}', String(queryId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Update device query.
     * @param queryId 
     * @param body Device query update object.
     */
    deviceQueryUpdate (queryId: string, body: DeviceQueryPostPutRequest, callback?: (error:any, data?:DeviceQuery, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "queryId" is set
        if (queryId === null || queryId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'queryId' missing."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'body' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/device-queries/{query_id}/'.replace('{' + 'query_id' + '}', String(queryId)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: body,
        }, callback);
    }
}

