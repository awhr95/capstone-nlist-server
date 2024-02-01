/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("opportunities", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.date("date_of_opportunity").notNullable();
    table.time("start_time_of_opportunity").notNullable();
    table.time("end_time_of_opportunity").notNullable();
    table.bigint("number_of_volunteers_needed").notNullable();
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("opportunities");
};
