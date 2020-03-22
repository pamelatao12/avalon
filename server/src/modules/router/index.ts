import express from "express";
import { debugHand } from "../cards/debug";
import { debugClearAll, debugViewDatabase } from "../firebase/db/debug";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/debug/hands", (req, res) => {
  res.send({ response: debugHand() }).status(200);
});

router.get("/debug/db", debugViewDatabase);

router.get("/debug/db/delete", debugClearAll);

export default router;
