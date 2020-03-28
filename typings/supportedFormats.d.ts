/**
 * @function getSupportedFormats
 * @param {String} extension
 * @return {ISupported}
 */
export function getSupportedFormats(extension: string): ISupported;
/** @typedef {Object}  ISupported
 *  @property {String} description
 *  @property {String} extension
 *  @property {String} mimetype
 *  @property {String} category
 *  @property {Object} reader
 *  @property {Object} writer
 *  @property {Array<Number>} versions
 *  @property {Array<String>} metadata
 */
/**
 * @constant {Array<ISupported>} supportedFormats
 */
export const supportedFormats: ({
    description: string;
    extension: string;
    extensions: string[];
    mimetype: string;
    category: string;
    reader: typeof PesReader;
    writer: typeof PesWriter;
    versions: string[];
    metadata: string[];
    read_options?: undefined;
    write_options?: undefined;
} | {
    description: string;
    extension: string;
    extensions: string[];
    mimetype: string;
    category: string;
    reader: typeof DstReader;
    writer: typeof DstWriter;
    read_options: {
        trim_distance: number[];
        trim_at: number[];
        clipping: boolean[];
    };
    write_options: {
        trim_at: number[];
    };
    versions: string[];
    metadata: string[];
})[];
export type ISupported = {
    description: string;
    extension: string;
    mimetype: string;
    category: string;
    reader: Object;
    writer: Object;
    versions: number[];
    metadata: string[];
};
import * as PesReader from "./reader/PesReader";
import * as PesWriter from "./writer/PesWriter";
import * as DstReader from "./reader/DstReader";
import * as DstWriter from "./writer/DstWriter";
//# sourceMappingURL=supportedFormats.d.ts.map