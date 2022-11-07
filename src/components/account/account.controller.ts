import { Route, Tags, Controller, Post, Body, Get } from "tsoa";
import { ILoginReq, ITest } from "./account.types";

@Route('account')
@Tags('Account')
export class AccountController extends Controller {

    @Post('login')
    public async checkLogin(@Body() data: ILoginReq): Promise<any> {
        console.log('Duong');
        
        try {
            console.log(data);

            if ( !data.username || !data.password ) {
                this.setStatus(404)
                return "Fields were required";
            } 
            if ( data.password!="123456" || data.username!="admin") {
                this.setStatus(404)
                return "Username or password is incorrect";   
            }
            this.setStatus(200);
            return "Login successfully";
        } catch(err) {
            this.setStatus(500);
            return `Service Error ${err} `;
        }
    }
    @Post('login/list')
    public async fetch(@Body() data: ILoginReq): Promise<any> {
        console.log('Duong');
        
        try {
            console.log(data);

            if ( !data.username || !data.password ) {
                this.setStatus(404)
                return "Fields were required";
            } 
            if ( data.password!="123456" || data.username!="admin") {
                this.setStatus(404)
                return "Username or password is incorrect";   
            }
            this.setStatus(200);
            return "Login successfully";
        } catch(err) {
            this.setStatus(500);
            return `Service Error ${err} `;
        }
    }
}
