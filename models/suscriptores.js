'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.suscriptores.belongsToMany(models.intereses, {
        through:
          'suscriptor_intereses', foreignKey: "suscriptores_id"
      });
    }
  }
  suscriptores.init({
    nombre: DataTypes.STRING(100),
    email: DataTypes.STRING(150),
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'suscriptores',
  });
  return suscriptores;
};