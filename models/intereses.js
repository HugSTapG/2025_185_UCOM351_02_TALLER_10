'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.intereses.belongsToMany(models.suscriptores, {
        through:
          'suscriptor_intereses', foreignKey: "intereses_id"
      });
    }
  }
  intereses.init({
    descripcion: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'intereses',
  });
  return intereses;
};