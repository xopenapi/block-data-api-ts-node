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

export class CreateBlockConfigReq {
    /**
    * 名称
    */
    'name'?: string;
    /**
    * 渲染数据
    */
    'renderData'?: object;
    /**
    * 编辑数据
    */
    'editorData'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "renderData",
            "baseName": "renderData",
            "type": "object"
        },
        {
            "name": "editorData",
            "baseName": "editorData",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CreateBlockConfigReq.attributeTypeMap;
    }
}

