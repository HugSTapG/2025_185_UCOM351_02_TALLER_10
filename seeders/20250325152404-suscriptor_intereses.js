// @ts-nocheck
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let [suscriptores] = await queryInterface.sequelize.query('SELECT id FROM suscriptores')
    let [intereses] = await queryInterface.sequelize.query('SELECT id FROM intereses')

    let interesIds = intereses.map(e => e.id);

    function getRandomIntereses() {
      let shuffled = interesIds.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }

    let suscriptor_intereses = [];

    for (let suscriptor of suscriptores) {
      let selectedintereses = getRandomIntereses();
      for (let interesId of selectedintereses) {
        suscriptor_intereses.push({
          suscriptores_id: suscriptor.id,
          intereses_id: interesId,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('suscriptor_intereses', suscriptor_intereses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suscriptor_intereses', null, {});
  }
};
