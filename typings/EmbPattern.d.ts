export class EmbPattern {
    stitches: any[];
    threadlist: {};
    extras: {};
    _previousX: number;
    _previousY: number;
    __ne__(other: any): boolean;
    __eq__(other: any): any;
    __str__(): string;
    __len__(): number;
    __getitem__(item: any): any;
    __setitem__(key: any, value: any): void;
    __copy__(): any;
    __deepcopy__(): any;
    __add__(other: any): any;
    __radd__(other: any): any;
    copy(): any;
    clear(): void;
    move(dx?: number, dy?: number, position: any): void;
    move_abs(x: any, y: any, position: any): void;
    stitch(dx?: number, dy?: number, position: any): void;
    stitch_abs(x: any, y: any, position: any): void;
    stop(dx?: number, dy?: number, position: any): void;
    trim(dx?: number, dy?: number, position: any): void;
    color_change(dx?: number, dy?: number, position: any): void;
    needle_change(needle?: number, dx?: number, dy?: number, position: any): void;
    sequin_eject(dx?: number, dy?: number, position: any): void;
    sequin_mode(dx?: number, dy?: number, position: any): void;
    end(dx?: number, dy?: number, position: any): void;
    add_thread(thread: any): void;
    metadata(name: any, data: any): void;
    get_metadata(name: any, def: any): any;
    extends(): number[];
    bounds(): number[];
    count_stitch_commands(command: any): void;
}
//# sourceMappingURL=EmbPattern.d.ts.map