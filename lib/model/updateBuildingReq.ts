/**
 * BlockData API
 * BlockData API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class UpdateBuildingReq {
    /**
    * id
    */
    'id'?: string;
    /**
    * 分类Id
    */
    'templateId'?: string;
    /**
    * 数据
    */
    'data'?: object;
    /**
    * 创建者Id
    */
    'creatorUid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "creatorUid",
            "baseName": "creatorUid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateBuildingReq.attributeTypeMap;
    }
}

