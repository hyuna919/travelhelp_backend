module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        writer_id:{
            type:DataTypes.STRING(11),
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        date:{
            type:DataTypes.DATE,
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
            type:DataTypes.STRING(10),
            allowNull:false,
        },
    },{
        timestamps:true
    })

    return Post;
};