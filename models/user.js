const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelixe, DataTypes)=>{
    sequelize.define('user',{
        id:{
            type:DataTypes.STRING(11),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    },{
        timestamps:true
    });
};