import express from "express";
import { getCountries, createCountry } from "./country.controller.js";

const countryRouter = express.Router();

countryRouter.get("/", getCountries);
countryRouter.post("/", createCountry);

export default countryRouter;
