module.exports = (sequelize, DataTypes) => {
    const alias = "user";
    const structure = {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        codpostal: {
            type: DataTypes.INTEGER,
        }, 
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        legal: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }, 
        conditions: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const user = sequelize.define(alias, structure, config);
    
    return user;
};