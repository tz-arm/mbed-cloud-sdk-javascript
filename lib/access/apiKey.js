/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
"use strict";
var functions_1 = require("../common/functions");
/*
 * API Key
 */
var ApiKey = (function () {
    function ApiKey(options, _api) {
        this._api = _api;
        for (var key in options) {
            this[key] = options[key];
        }
    }
    ApiKey.map = function (from, api) {
        var type = {
            createdAt: from.created_at,
            groups: from.groups,
            id: from.id,
            key: from.key,
            lastLoginTime: from.last_login_time,
            name: from.name,
            owner: from.owner,
            status: from.status
        };
        return new ApiKey(type, api);
    };
    ApiKey.prototype.listGroups = function (callback) {
        var _this = this;
        return functions_1.asyncStyle(function (done) {
            // AccessApi.listGroups should accept a filter which would be less intense to use
            _this.groups.forEach(function (groupId) {
                _this._api.listGroups(function (error, groups) {
                    if (error)
                        return done(error);
                    var userGroups = groups.filter(function (group) {
                        return _this.groups.indexOf(group.id) > -1;
                    });
                    done(null, userGroups);
                });
            });
        }, callback);
    };
    ApiKey.prototype.update = function (options, callback) {
        var _this = this;
        options["id"] = this.id;
        return functions_1.asyncStyle(function (done) {
            _this._api.updateApiKey(options, done);
        }, callback);
    };
    ApiKey.prototype.delete = function (callback) {
        var _this = this;
        return functions_1.asyncStyle(function (done) {
            _this._api.deleteApiKey(_this, done);
        }, callback);
    };
    return ApiKey;
}());
exports.ApiKey = ApiKey;