/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("opportunities_users").del();
  await knex("opportunities_users").insert([
    { id: 1, user_id: 1, opportunities_id: 1 },
    { id: 2, user_id: 2, opportunities_id: 1 },
    { id: 3, user_id: 3, opportunities_id: 1 },
    { id: 4, user_id: 3, opportunities_id: 2 },
    { id: 5, user_id: 3, opportunities_id: 3 },
    { id: 6, user_id: 4, opportunities_id: 5 },
    { id: 7, user_id: 4, opportunities_id: 6 },
    { id: 8, user_id: 4, opportunities_id: 7 },
    { id: 9, user_id: 5, opportunities_id: 2 },
    { id: 10, user_id: 6, opportunities_id: 2 },
    { id: 11, user_id: 7, opportunities_id: 2 },
    { id: 12, user_id: 8, opportunities_id: 9 },
    { id: 13, user_id: 9, opportunities_id: 9 },
    { id: 14, user_id: 9, opportunities_id: 1 },
    { id: 15, user_id: 10, opportunities_id: 2 },
    { id: 16, user_id: 11, opportunities_id: 5 },
    { id: 17, user_id: 11, opportunities_id: 11 },
    { id: 18, user_id: 12, opportunities_id: 8 },
    { id: 19, user_id: 12, opportunities_id: 12 },
    { id: 20, user_id: 13, opportunities_id: 15 },
    { id: 21, user_id: 14, opportunities_id: 4 },
    { id: 22, user_id: 15, opportunities_id: 9 },
    { id: 23, user_id: 16, opportunities_id: 6 },
    { id: 24, user_id: 17, opportunities_id: 12 },
    { id: 25, user_id: 18, opportunities_id: 3 },
    { id: 26, user_id: 19, opportunities_id: 11 },
    { id: 27, user_id: 20, opportunities_id: 5 },
    { id: 28, user_id: 21, opportunities_id: 8 },
    { id: 29, user_id: 12, opportunities_id: 10 },
    { id: 30, user_id: 14, opportunities_id: 14 },
    { id: 31, user_id: 17, opportunities_id: 7 },
    { id: 32, user_id: 19, opportunities_id: 13 },
    { id: 33, user_id: 20, opportunities_id: 2 },
    { id: 34, user_id: 16, opportunities_id: 15 },
    { id: 35, user_id: 13, opportunities_id: 1 },
  ]);
};
