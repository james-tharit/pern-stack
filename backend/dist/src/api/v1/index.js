"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.use("/", (req, res) => {
    res.jsonp({ status: "ok", date: new Date().toTimeString() });
});
exports.default = router;
//# sourceMappingURL=index.js.map