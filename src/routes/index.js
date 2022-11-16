import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'Referidos Atento'}));
router.get("/login", (req, res) => res.render("login"));
router.get("/referir ", (req, res) => res.render("referir"));

export default router;
