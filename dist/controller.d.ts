import { Collection } from 'mongodb';
export default class Helper {
    collection: Collection;
    constructor(collectionName: string);
    index: () => Promise<any[]>;
    get: (props: {
        $match: {
            [key: string]: any;
        };
    }) => Promise<any>;
    populate: (props: {
        $match: {
            [key: string]: any;
        };
        key: string;
    }) => Promise<any>;
    post: (body: {}) => Promise<any>;
    put: (id: string, body: {}) => Promise<any>;
    remove: (id: string) => Promise<any>;
}
