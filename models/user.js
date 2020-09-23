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
            allowNull:false
        },
    },{
        timestamps:true
    });

     User.associate = function(models) {
         //posts와의 관계
        User.hasMany(models.Post, {
            foreignKey: "id",
            targetKey: "writer_id"
        });

        //rooms와의 관계
        User.hasMany(models.Room, {
            foreignKey: "id",
            targetKey: "user"
        });

        //messages와의 관계
        User.hasMany(models.Message, {
            foreignKey: "id",
            targetKey: "sender"
        });
        User.hasMany(models.Message, {
            foreignKey: "id",
            targetKey: "receiver"
        });
    };
    return User;
}
