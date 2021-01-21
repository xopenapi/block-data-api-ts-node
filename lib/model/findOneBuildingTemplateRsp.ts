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
import { BuildingTemplate } from './buildingTemplate';

export class FindOneBuildingTemplateRsp {
    'code'?: number;
    'msg'?: string;
    'data'?: BuildingTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "BuildingTemplate"
        }    ];

    static getAttributeTypeMap() {
        return FindOneBuildingTemplateRsp.attributeTypeMap;
    }
}
