import express from "express";
import { createTable } from ".";

export const debugCreateTable = async (
  req: express.Request,
  res: express.Response
) => {
  const table = await createTable();
  res.send(table).status(201);
};
