"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSys = void 0;
var AuthSys = /** @class */ (function () {
    function AuthSys() {
        this.n = "";
    }
    AuthSys.prototype.setup = function (name) {
        this.n = name;
    };
    AuthSys.prototype.getName = function () {
        return this.n;
    };
    return AuthSys;
}());
exports.AuthSys = AuthSys;
//# sourceMappingURL=index.js.map