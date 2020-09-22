const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        writer_id:{
            type:DataTypes.STRING(11),
            allowNull:false,
        },
        event:{
            type:DataTypes.STRING,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        content:{
            type:DataTypes.STRING(1000),
            allowNull:false
        },
        country:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        location:{
            type:DataTypes.STRING(10),
            allowNull:true
        },
        latitude :{
            type:DataTypes.FLOAT(7),
            allowNull:true
        },
        longitude :{
            type:DataTypes.FLOAT(7),
            allowNull:true
        },
        image:{
            type: Sequelize.BLOB,
            allowNull: true
        }
        
        
    },{
        timestamps:true
    })

    return Post;
};