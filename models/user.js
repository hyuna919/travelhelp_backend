
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.STRING(11),
            allowNull:false,
            unique:true,
            primaryKey: true
        },
        password:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    },{
        timestamps:true
    });

     User.associate = function(models) {
        User.hasMany(models.Post, {
            foreignKey: "UserId"
        });
    } 
    return User;
}