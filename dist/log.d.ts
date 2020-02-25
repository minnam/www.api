export default class Log {
    private static instance;
    private apiUrl;
    private constructor();
    static getInstance(apiUrl?: string): Log;
    log: (id: string, collection: string, status: string, message: string, trace?: any) => Promise<void>;
}
