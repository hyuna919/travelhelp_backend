const { Model, DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Message = sequelize.define('Message',{
        sender:{
            type:DataTypes.STRING(11),
            allowNull:false
        },
        receiver:{
            type:DataTypes.STRING(11),
            allowNull:false
        },
        time:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        message:{
            type:DataTypes.STRING(800),
            allowNull:false
        }
    })
}