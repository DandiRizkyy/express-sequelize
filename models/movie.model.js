module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define('movie', {
        title: {
            type: Sequelize.STRING,
        },
        enabled: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: 1, 
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: 0,
        },
        description: {
            type: Sequelize.TEXT,
        },
    });
    return Movie;
}
