// @ts-nocheck
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suscriptor_intereses', {
      intereses_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'intereses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      suscriptores_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'suscriptores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.sequelize.query(`
      ALTER TABLE suscriptor_intereses
      ADD PRIMARY KEY (intereses_id, suscriptores_id);
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suscriptor_intereses');
  }
};