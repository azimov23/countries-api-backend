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
      query,
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
    const countries = await req.body;
    countries?.forEach((country) => {
      countryModel.create({
        name: {
          common: country.name.common,
          nativeName: country.name.nativeName,
          slug: country.name.slug,
        },
        cca3: country.cca3,
        currencies: country.currencies,
        capital: country.capital,
        region: country.region,
        subregion: country.subregion,
        languages: country.languages,
        area: country.area,
        population: country.population,
        continents: country.continents,
        flags: {
          png: country.flags.png,
          svg: country.flags.svg,
          alt: country.flags.alt,
        },
        borders: country.borders?.map((co) => {
          return {
            common: co.common,
            slug: co.slug,
          };
        }),
      });
    });
    res.json("countries created");
  } catch (error) {
    console.log(error.message);
  }
};
