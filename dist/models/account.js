"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');
const AccountSchema = mongoose.Schema({
    username: String,
    password: String,
}, {
    collection: 'account'
});
const AccountModel = mongoose.model('account', AccountSchema);
exports.default = AccountModel;
//# sourceMappingURL=account.js.map