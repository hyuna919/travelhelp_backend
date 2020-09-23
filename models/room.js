const Sequelize = require('sequelize');
const { User } = require('.');

module.exports = (sequelize,DataTypes)=>{
    const Room = sequelize.define('Room',{
        roomNumber:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        user:{
            type:DataTypes.STRING(11),
            allowNull:false
        },
    });

    
    Room.associate = function(models) {
        //user와의 관계
        User.belongsTo(model.User,{
            foreignKey: "user",
            targetKey: "id"
        });
        
        //message와의 관계
        Room.hasMany(models.Message, {
           foreignKey: "roomNumber",
           targetKey: "roomNumber"
       });
    };


    return Room;
}