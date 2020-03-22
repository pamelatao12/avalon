import express from "express";
import { createTable, getTable } from ".";

export const debugCreateTable = async (
  req: express.Request,
  res: express.Response
) => {
  const table = await createTable();
  res.send(table).status(201);
};

export const debugGetTable = async (
  req: express.Request,
  res: express.Response
) => {
  const table = await getTable();
  res.send(table).status(200);
};
