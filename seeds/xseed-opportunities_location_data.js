/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("opportunities_location_data").del();
  await knex("opportunities_location_data").insert([
    {
      id: 1,
      opportunities_id: 1,
      address: "36 Clapham High St, London SW4 7UR, UK",
      latitude: "51.46437",
      longitude: "-0.13207",
    },
    {
      id: 2,
      opportunities_id: 2,
      address: "100 Littlebury Road, London SW4 6DN, UK",
      latitude: "51.46597",
      longitude: "-0.13498",
    },
    {
      id: 3,
      opportunities_id: 3,
      address: "Shaftesbury Christian Centre, 2 Austin Rd, London SW11 5JP, UK",
      latitude: "51.47367",
      longitude: "-0.15484",
    },
    {
      id: 4,
      opportunities_id: 4,
      address: "Blackheath Ave, London SE10 8XJ, UK",
      latitude: "51.4748973",
      longitude: "0.0017657",
    },
    {
      id: 5,
      opportunities_id: 5,
      address: "133 Clapham High St, London SW4 7SL, UK",
      latitude: "51.46232",
      longitude: "-0.13596",
    },
    {
      id: 6,
      opportunities_id: 6,
      address: "27 Circus, West Village, London SW11 8NN, UK",
      latitude: "51.481834",
      longitude: "-0.147014",
    },
    {
      id: 7,
      opportunities_id: 7,
      address: "10 Rookery Rd, London SW4 0RQ, UK",
      latitude: "51.343366",
      longitude: "0.050839",
    },
    {
      id: 8,
      opportunities_id: 8,
      address: "Colechurch House, London SE1 2SS, UK",
      latitude: "51.50142",
      longitude: "-0.082116",
    },
    {
      id: 9,
      opportunities_id: 9,
      address: "Ramsgate St, London E8 2NA, UK",
      latitude: "51.54695",
      longitude: "-0.07115",
    },
    {
      id: 10,
      opportunities_id: 10,
      address: "1 Kennington Rd, London SE1 7QP, UK",
      latitude: "51.49301",
      longitude: "-0.11058",
    },
    {
      id: 11,
      opportunities_id: 11,
      address: "165 Tyers St, London SE11 5HS, UK",
      latitude: "51.48711",
      longitude: "-0.1191",
    },
    {
      id: 12,
      opportunities_id: 12,
      address: "494 Brixton Rd, London SW9 8EQ, UK",
      latitude: "51.46208",
      longitude: "-0.11562",
    },
    {
      id: 13,
      opportunities_id: 13,
      address: "Monkton St, London SE11 4TX, UK",
      latitude: "51.49294",
      longitude: "-0.10863",
    },
    {
      id: 14,
      opportunities_id: 14,
      address: "Lakeside Cafe Battersea Park, London SW11 4NJ, UK",
      latitude: "51.5083315",
      longitude: "-0.1385335",
    },
    {
      id: 15,
      opportunities_id: 15,
      address: "4 Battersea Park Rd, Nine Elms, London SW8 4AA, UK",
      latitude: "51.47867",
      longitude: "-0.14486",
    },
    {
      id: 16,
      opportunities_id: 16,
      address: "97-99 Kings Rd, Brighton and Hove, Brighton BN1 2FW, UK",
      latitude: "50.82155",
      longitude: "-0.1473",
    },
    {
      id: 17,
      opportunities_id: 17,
      address: "Brockwell Park, Dulwich Rd, London SE24 0PA, UK",
      latitude: "51.4508655",
      longitude: "-0.1067825",
    },
    {
      id: 18,
      opportunities_id: 18,
      address: "Agnus, Riley Gardens, London SW12 0AH, UK",
      latitude: "51.449037",
      longitude: "-0.138276",
    },
    {
      id: 19,
      opportunities_id: 19,
      address: "Clapham Common South Side, London SW4 9DE, UK",
      latitude: "51.461276",
      longitude: "-0.139392",
    },
    {
      id: 20,
      opportunities_id: 20,
      address: "Cobourg Rd, London SE5 0HX, UK",
      latitude: "51.48556",
      longitude: "-0.07621",
    },
    {
      id: 21,
      opportunities_id: 21,
      address: "5 Lambeth Palace Rd, London SE1 7LB, UK",
      latitude: "51.49505",
      longitude: "-0.1202",
    },
    {
      id: 22,
      opportunities_id: 22,
      address: "Lovers Walk, London SE21, UK",
      latitude: "51.6059",
      longitude: "-0.19292",
    },
    {
      id: 23,
      opportunities_id: 23,
      address: "95a Rye Ln, London SE15 4ST, UK",
      latitude: "51.469534",
      longitude: "-0.068176",
    },
    {
      id: 24,
      opportunities_id: 24,
      address: "4 Battersea Park Rd, Nine Elms, London SW8 4AA, UK",
      latitude: "51.47867",
      longitude: "-0.14486",
    },
    {
      id: 25,
      opportunities_id: 25,
      address: "Claybrook Rd, London W6 8LN, UK",
      latitude: "51.48685",
      longitude: "-0.21774",
    },
    {
      id: 26,
      opportunities_id: 26,
      address: "38A Loughborough Rd, London SW9 7SB, UK",
      latitude: "51.4706",
      longitude: "-0.11001",
    },
    {
      id: 27,
      opportunities_id: 27,
      address: "115 Lyham Rd, Brixton Hill, London SW2 5PY, UK",
      latitude: "51.45488",
      longitude: "-0.12721",
    },
    {
      id: 28,
      opportunities_id: 28,
      address: "Brixton Community Base, Talma Rd, London SW2 1AS, UK",
      latitude: "51.4593",
      longitude: "-0.11054",
    },
    {
      id: 29,
      opportunities_id: 29,
      address: "Waynflete St, London SW18 3QE, UK",
      latitude: "51.44011",
      longitude: "-0.18559",
    },
    {
      id: 30,
      opportunities_id: 30,
      address: "Wandsworth Common, Dorlcote Rd, London SW18 3RT, UK",
      latitude: "51.4505",
      longitude: "-0.17259",
    },
  ]);
};
