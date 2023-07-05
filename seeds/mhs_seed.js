/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('nilai').del()
  await knex('nilai').insert([
    {
      nim: '201080200143',
      nama: 'Rama Sakti',
      uts: 0,
      uas: 0
    },
    {
      nim: '201080200179',
      nama: 'Muhammad Hilal Hamdi',
      uts: 0,
      uas: 0
    },
  ]);
};
