class AuthController {
    static getFormLogin(req: any, res: any): any {
        res.render('login')
    }
}
export default AuthController;