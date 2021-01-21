export * from './blockConfigApi';
import { BlockConfigApi } from './blockConfigApi';
export * from './buildingApi';
import { BuildingApi } from './buildingApi';
export * from './buildingTemplateApi';
import { BuildingTemplateApi } from './buildingTemplateApi';
export * from './categoryApi';
import { CategoryApi } from './categoryApi';
export * from './categoryResourceApi';
import { CategoryResourceApi } from './categoryResourceApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [BlockConfigApi, BuildingApi, BuildingTemplateApi, CategoryApi, CategoryResourceApi];
