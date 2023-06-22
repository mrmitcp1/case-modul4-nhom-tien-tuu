declare class CarController {
    static showCreateForm(req: any, res: any): Promise<void>;
    static createCar(req: any, res: any): Promise<void>;
}
export default CarController;
