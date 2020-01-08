export declare function striptags(html: string, ...args: Array<any>): string;
export declare namespace striptags {
    var init_streaming_mode: typeof init_striptags_stream;
}
declare function init_striptags_stream(allowable_tags: any, tag_replacement: any): (html: string) => string;
export {};
