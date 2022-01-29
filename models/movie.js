module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Movie', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tmdbId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        releaseDate: {
            type: Sequelize.STRING
        },
        runtime: {
            type: Sequelize.INTEGER
        }
    })
}

// INSERT INTO
//      (address, city, state, price, pool, for_sale)
// VALUES
//     ('2 Maple Court', 'Monroe', 'NY', 200, false, true),
//     ('50 Beech Street', 'Bacon', 'IN', 75, null , null),
//     ('101 Willow Avenue', 'Twin Peaks', 'WA', 300, null, null),
//     ('2300 Orchard Lane', 'Monroe', 'NC', 150, null, true),
//     ('57 Sycamore Boulevard', 'Monroe', 'CT', 275, false, false),
//     ('88 Hemlock Grove', 'Eek', 'AK', 200, true, true),
//     ('109 Pine Drive', 'Happyland', 'CT', 220, false, null);