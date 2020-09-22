const Sequelize = require('sequelize');

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
        date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        time:{
            type:Sequelize.TIME,
            allowNull:false
        },
        message:{
            type:DataTypes.STRING(800),
            allowNull:false
        }
    })
    return Message;
}