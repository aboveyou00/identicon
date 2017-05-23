

declare module '@aboveyou00/identicon' {
    type Identicon = {
        toDataURL(): string;
    }
    type IdenticonFn = {
        (name: string, opts?: any): Identicon;
        style: any;
    }

    let identicon: IdenticonFn;
    export = identicon;
}
