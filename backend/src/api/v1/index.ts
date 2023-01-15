import { Request, Response, Router } from "express";

const router = Router();

router.use("/", (req: Request, res: Response) => {
  res.jsonp({ status: "ok", date: new Date().toTimeString() });
});

export default router;
