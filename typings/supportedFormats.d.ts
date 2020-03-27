/**
 * @constant {Array} supportedFormats
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
    reader?: undefined;
})[];
import * as PesReader from "./PesReader";
import * as PesWriter from "./PesWriter";
import DstWriter from "./DstWriter";
//# sourceMappingURL=supportedFormats.d.ts.map