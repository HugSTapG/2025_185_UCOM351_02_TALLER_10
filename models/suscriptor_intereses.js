'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptor_intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  suscriptor_intereses.init({
    intereses_id: DataTypes.INTEGER,
    suscriptores_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'suscriptor_intereses',
  });
  return suscriptor_intereses;
};