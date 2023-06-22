declare class LocalController {
    static createLocals(req: any, res: any): Promise<void>;
    static getCreateLocal(req: any, res: any): Promise<void>;
    static getListLocal(req: any, res: any): Promise<void>;
    static deleteLocal(req: any, res: any): Promise<void>;
    static getUpdateLocal(req: any, res: any): Promise<void>;
    static updateLocal(req: any, res: any): Promise<void>;
}
export default LocalController;
