require("dotenv").config();

const axios = require("axios");
const addresses = [
  "36 Clapham High St, London SW4 7UR, UK",
  "100 Littlebury Road, London SW4 6DN, UK",
  "Shaftesbury Christian Centre, 2 Austin Rd, London SW11 5JP, UK",
  "Blackheath Ave, London SE10 8XJ, UK",
  "133 Clapham High St, London SW4 7SL, UK",
  "27 Circus, West Village, London SW11 8NN, UK",
  "10 Rookery Rd, London SW4 0RQ, UK",
  "Colechurch House, London SE1 2SS, UK",
  "Ramsgate St, London E8 2NA, UK",
  "1 Kennington Rd, London SE1 7QP, UK",
  "165 Tyers St, London SE11 5HS, UK",
  "494 Brixton Rd, London SW9 8EQ, UK",
  "Monkton St, London SE11 4TX, UK",
  "Lakeside Cafe Battersea Park, London SW11 4NJ, UK",
  "4 Battersea Park Rd, Nine Elms, London SW8 4AA, UK",
  "97-99 Kings Rd, Brighton and Hove, Brighton BN1 2FW, UK",
  "Brockwell Park, Dulwich Rd, London SE24 0PA, UK",
  "Agnus, Riley Gardens, London SW12 0AH, UK",
  "Clapham Common South Side, London SW4 9DE, UK",
  "Cobourg Rd, London SE5 0HX, UK",
  "5 Lambeth Palace Rd, London SE1 7LB, UK",
  "Lovers Walk, London SE21, UK",
  "95a Rye Ln, London SE15 4ST, UK",
  "4 Battersea Park Rd, Nine Elms, London SW8 4AA, UK",
  "Claybrook Rd, London W6 8LN, UK",
  "38A Loughborough Rd, London SW9 7SB, UK",
  "115 Lyham Rd, Brixton Hill, London SW2 5PY, UK",
  "Brixton Community Base, Talma Rd, London SW2 1AS, UK",
  "Waynflete St, London SW18 3QE, UK",
  "Wandworth Common, Dorlcote Rd, London SW18 3RT, UK",
];
const geoForwardUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
console.log(accessToken);
const geocodeAddress = async () => {
  for (const address of addresses) {
    try {
      const response = await axios.get(
        `${geoForwardUrl}${encodeURIComponent(
          address
        )}.json?access_token=${accessToken}`
      );
      const coordinates = response.data.features[0].geometry.coordinates;
      console.log(`${address}: ${coordinates[1]}, ${coordinates[0]}`);
    } catch (error) {
      console.error(`Error geocoding ${address}: ${error.message}`);
    }
  }
};
geocodeAddress();
module.exports = geocodeAddress;
