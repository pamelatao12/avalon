import express from "express";
import { sitAtTable } from "./";

export const debugSitAtTAble = async (
  req: express.Request,
  res: express.Response
) => {
  const player = await sitAtTable();
  res.send(player).status(200);
};
