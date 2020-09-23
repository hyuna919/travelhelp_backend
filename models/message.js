const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes)=>{
    const Message = sequelize.define('Message',{
        roomNumber:{
            type:DataTypes.STRING,
            allowNull:false
        },
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

    Message.associate = function(models){
        //Room와의 관계
        Message.belongsTo(models.Room, {
            foreignKey: "roomNumber",
            targetKey: "roomNumber"
        });

        //User와의 관계
        Message.belongsTo(models.User, {
            foreignKey: "sender",
            targetKey: "id"
        });
        Message.belongsTo(models.User, {
            foreignKey: "receiver",
            targetKey: "id"
        });
    };

    return Message;
}