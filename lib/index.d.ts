

declare module '@aboveyou00/identicon' {
    declare type Identicon = {
        toDataURL(): string;
    }
    declare type IdenticonFn = {
        (name: string, opts: any): Identicon;
        styles: any;
    }

    declare let identicon: IdenticonFn;
    export = identicon;
}
