import countryModel from "../model/country.model.js";

export const getCountries = async (req, res) => {
  try {
    let limit = +req.query.limit || 20;
    let skip = +req.query.skip || 0;

    let { search, region } = req.query;
    let query = {};
    if (search) {
      query["name.common"] = { $regex: `^${search}`, $options: "i" };
    }
    if (region) {
      query["name.common"] = region;
    }

    const count = await countryModel.count(query);
    const countries = await countryModel.find(
      { query },
      { __v: 0, _id: 0 },
      { limit, skip }
    );
    res.json({
      countries,
      total: count,
      limit: countries.length,
      skip,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCountry = async (req, res) => {
  try {
    const countries = countryModel.find();
    res.json(countries);
  } catch (error) {
    console.log(error.message);
  }
};
