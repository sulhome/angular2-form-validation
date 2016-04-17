export class Blog {

    constructor(public title: string,
        public tags: string[],
        public markdownText: string,
        public htmlText: string) {
    }
}