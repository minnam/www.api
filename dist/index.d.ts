import { Db } from 'mongodb';

export declare let db: Db;

export declare const initiate: (props: {

    host: string;

    port: string;

    name: string;

}) => void;

