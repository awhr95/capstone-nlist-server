/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("opportunities_location_data", (table) => {
    table.increments("id").primary();
    table
      .integer("opportunities_id")
      .unsigned()
      .references("opportunities.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("address").notNullable();
    table.string("latitude").notNullable();
    table.string("longitude").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("opportunities_location_data");
};
