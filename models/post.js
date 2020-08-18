const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelixe, DataTypes)=>{
    sequelize.define('user',{
        post_id:{
            type:DataTypes.STRING(11),
            allowNull:false,
            unique:true,
        },
        title:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        date:{
            type:DataTypes.date,
            allowNull:false,
        },
        airport:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        content:{
            type:DataTypes.STRING(1000),
            allowNull:false,
        },
        country:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
    },{
        timestamps:true
    });
};