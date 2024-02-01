import BaseRequest from "../utils/base/BaseRequest";


export default class BirthDayCollectionService extends BaseRequest {
    constructor() {
        super("birthday-collection");
    }

    getCollectionByCode = async (code: string) => {
        return await this.find({ routeParams: `/${code}` });
    };

    findUserCollections = () => {
        return this.find({});
    };
}