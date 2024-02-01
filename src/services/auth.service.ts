import BaseRequest from "../utils/base/BaseRequest";


export default class AuthService extends BaseRequest {
    constructor() {
        super("users");
    }

    login = (payload: any) => {
        return this.post(payload, {  });
    };

    register = (payload: any) => {
        return this.post(payload, {routeParams: "/register"});
    };
}