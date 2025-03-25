// @ts-nocheck
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let suscriptores = ["Juan",
      "Manuel"]
    for (let suscriptor of suscriptores) {
      await queryInterface.bulkInsert('suscriptores', [{
        nombre: suscriptor,
        email: 'email@email.com',
        fecha_registro: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('suscriptores', null, {});
  }
};
