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
 * /user:
 *   get:
 *     tags:
 *      - "[ADMIN] USER"
 *     summary: Đăng nhập
 *     parameters:
 *      - in: query
 *        name: "page"
 *        description: "page"
 *        type: "string"
 *      - in: "query"
 *        name: "freeWord"
 *        description: "Thông tin đăng nhập"
 *      - in: "query"
 *        name: "freeWord"
 *        description: "Thông tin đăng nhập"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.get('/', (req, res) => {
    account_1.default.find({})
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        console.log(err);
    });
});
/**
 * @openapi
 * /user/{userId}:
 *   get:
 *     tags:
 *      - "[ADMIN] USER"
 *     summary: Lấy danh sách chi tiết user
 *     parameters:
 *      - in: path
 *        name: "userId"
 *        description: "userId"
 *        type: string
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.get('/:userId', (req, res) => {
    console.log('Duong');
    account_1.default.findOne({ _id: req.params.userId })
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        console.log(err);
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map