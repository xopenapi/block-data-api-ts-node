export * from './blockConfig';
export * from './blockConfigPage';
export * from './building';
export * from './buildingPage';
export * from './buildingTemplate';
export * from './buildingTemplatePage';
export * from './category';
export * from './categoryPage';
export * from './categoryPageRsp';
export * from './categoryPageRspData';
export * from './categoryResource';
export * from './categoryResourcePage';
export * from './createBlockConfigReq';
export * from './createBlockConfigRsp';
export * from './createBuildingReq';
export * from './createBuildingRsp';
export * from './createBuildingTemplateReq';
export * from './createBuildingTemplateRsp';
export * from './createCategoryReq';
export * from './createCategoryResourceReq';
export * from './createCategoryResourceRsp';
export * from './createCategoryRsp';
export * from './cursorExtra';
export * from './cursorQuery';
export * from './deleteRsp';
export * from './findOneBlockConfigRsp';
export * from './findOneBuildingRsp';
export * from './findOneBuildingTemplateRsp';
export * from './findOneCategoryResourceRsp';
export * from './findOneCategoryRsp';
export * from './idsReq';
export * from './pageQuery';
export * from './sortSpec';
export * from './updateBlockConfigReq';
export * from './updateBlockConfigRsp';
export * from './updateBuildingReq';
export * from './updateBuildingRsp';
export * from './updateBuildingTemplateReq';
export * from './updateBuildingTemplateRsp';
export * from './updateCategoryReq';
export * from './updateCategoryResourceReq';
export * from './updateCategoryResourceRsp';
export * from './updateCategoryRsp';

import localVarRequest = require('request');

import { BlockConfig } from './blockConfig';
import { BlockConfigPage } from './blockConfigPage';
import { Building } from './building';
import { BuildingPage } from './buildingPage';
import { BuildingTemplate } from './buildingTemplate';
import { BuildingTemplatePage } from './buildingTemplatePage';
import { Category } from './category';
import { CategoryPage } from './categoryPage';
import { CategoryPageRsp } from './categoryPageRsp';
import { CategoryPageRspData } from './categoryPageRspData';
import { CategoryResource } from './categoryResource';
import { CategoryResourcePage } from './categoryResourcePage';
import { CreateBlockConfigReq } from './createBlockConfigReq';
import { CreateBlockConfigRsp } from './createBlockConfigRsp';
import { CreateBuildingReq } from './createBuildingReq';
import { CreateBuildingRsp } from './createBuildingRsp';
import { CreateBuildingTemplateReq } from './createBuildingTemplateReq';
import { CreateBuildingTemplateRsp } from './createBuildingTemplateRsp';
import { CreateCategoryReq } from './createCategoryReq';
import { CreateCategoryResourceReq } from './createCategoryResourceReq';
import { CreateCategoryResourceRsp } from './createCategoryResourceRsp';
import { CreateCategoryRsp } from './createCategoryRsp';
import { CursorExtra } from './cursorExtra';
import { CursorQuery } from './cursorQuery';
import { DeleteRsp } from './deleteRsp';
import { FindOneBlockConfigRsp } from './findOneBlockConfigRsp';
import { FindOneBuildingRsp } from './findOneBuildingRsp';
import { FindOneBuildingTemplateRsp } from './findOneBuildingTemplateRsp';
import { FindOneCategoryResourceRsp } from './findOneCategoryResourceRsp';
import { FindOneCategoryRsp } from './findOneCategoryRsp';
import { IdsReq } from './idsReq';
import { PageQuery } from './pageQuery';
import { SortSpec } from './sortSpec';
import { UpdateBlockConfigReq } from './updateBlockConfigReq';
import { UpdateBlockConfigRsp } from './updateBlockConfigRsp';
import { UpdateBuildingReq } from './updateBuildingReq';
import { UpdateBuildingRsp } from './updateBuildingRsp';
import { UpdateBuildingTemplateReq } from './updateBuildingTemplateReq';
import { UpdateBuildingTemplateRsp } from './updateBuildingTemplateRsp';
import { UpdateCategoryReq } from './updateCategoryReq';
import { UpdateCategoryResourceReq } from './updateCategoryResourceReq';
import { UpdateCategoryResourceRsp } from './updateCategoryResourceRsp';
import { UpdateCategoryRsp } from './updateCategoryRsp';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "BlockConfig": BlockConfig,
    "BlockConfigPage": BlockConfigPage,
    "Building": Building,
    "BuildingPage": BuildingPage,
    "BuildingTemplate": BuildingTemplate,
    "BuildingTemplatePage": BuildingTemplatePage,
    "Category": Category,
    "CategoryPage": CategoryPage,
    "CategoryPageRsp": CategoryPageRsp,
    "CategoryPageRspData": CategoryPageRspData,
    "CategoryResource": CategoryResource,
    "CategoryResourcePage": CategoryResourcePage,
    "CreateBlockConfigReq": CreateBlockConfigReq,
    "CreateBlockConfigRsp": CreateBlockConfigRsp,
    "CreateBuildingReq": CreateBuildingReq,
    "CreateBuildingRsp": CreateBuildingRsp,
    "CreateBuildingTemplateReq": CreateBuildingTemplateReq,
    "CreateBuildingTemplateRsp": CreateBuildingTemplateRsp,
    "CreateCategoryReq": CreateCategoryReq,
    "CreateCategoryResourceReq": CreateCategoryResourceReq,
    "CreateCategoryResourceRsp": CreateCategoryResourceRsp,
    "CreateCategoryRsp": CreateCategoryRsp,
    "CursorExtra": CursorExtra,
    "CursorQuery": CursorQuery,
    "DeleteRsp": DeleteRsp,
    "FindOneBlockConfigRsp": FindOneBlockConfigRsp,
    "FindOneBuildingRsp": FindOneBuildingRsp,
    "FindOneBuildingTemplateRsp": FindOneBuildingTemplateRsp,
    "FindOneCategoryResourceRsp": FindOneCategoryResourceRsp,
    "FindOneCategoryRsp": FindOneCategoryRsp,
    "IdsReq": IdsReq,
    "PageQuery": PageQuery,
    "SortSpec": SortSpec,
    "UpdateBlockConfigReq": UpdateBlockConfigReq,
    "UpdateBlockConfigRsp": UpdateBlockConfigRsp,
    "UpdateBuildingReq": UpdateBuildingReq,
    "UpdateBuildingRsp": UpdateBuildingRsp,
    "UpdateBuildingTemplateReq": UpdateBuildingTemplateReq,
    "UpdateBuildingTemplateRsp": UpdateBuildingTemplateRsp,
    "UpdateCategoryReq": UpdateCategoryReq,
    "UpdateCategoryResourceReq": UpdateCategoryResourceReq,
    "UpdateCategoryResourceRsp": UpdateCategoryResourceRsp,
    "UpdateCategoryRsp": UpdateCategoryRsp,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
