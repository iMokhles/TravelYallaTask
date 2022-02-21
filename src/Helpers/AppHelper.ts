export class TYAppHelper {
    private static _instance: TYAppHelper;

    private constructor() {}

    public static get Instance(): TYAppHelper {
        if (!this._instance) {
            this._instance = new this();
        }
        return TYAppHelper._instance;
    }

}

const AppHelper = TYAppHelper.Instance;
export default AppHelper;
