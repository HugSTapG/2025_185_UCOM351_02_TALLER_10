// @ts-nocheck
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let intereses = ["Tecnología",
      "Ciberseguridad",
      "Desarrollo de Software",
      "Inteligencia Artificial",
      "Ciencia de Datos",
      "Blockchain",
      "Internet de las Cosas (IoT)",
      "Marketing Digital",
      "Videojuegos",
      "Finanzas y Criptomonedas"]
    for (let interes of intereses) {
      await queryInterface.bulkInsert('intereses', [{
        descripcion: interes,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('intereses', null, {});
  }
};
