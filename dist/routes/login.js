"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const account_1 = __importDefault(require("../models/account"));
/**
 * @openapi
 * /session/login:
 *   post:
 *     tags:
 *      - "[ADMIN] LOGIN"
 *     summary: Đăng nhập
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Thông tin đăng nhập"
 *        schema:
 *          type: "object"
 *          properties:
 *            username:
 *              type: "string"
 *              description: "username"
 *            password:
 *              type: "string"
 *              description: "password"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.post('/login', (req, res) => {
    console.log(req.body);
    account_1.default.findOne({
        username: req.body.username,
        password: req.body.password
    })
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        console.log(err);
    });
});
exports.default = router;
//# sourceMappingURL=login.js.map