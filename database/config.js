const fs = require('fs');
const { Sequelize } = require('sequelize');

const bd_mmcbs = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: process.env.DB_PORT,
    timezone: "-04:00",
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(require.resolve('./DigiCertGlobalRootCA.crt.pem'))
        },
        timezone: "-04:00"
    },
    ssl: true
});

module.exports = {
    bd_mmcbs,
    // testDbConnection
}

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mssql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//     timezone: "-04:00",
//     dialectOptions: {
//         timezone: "-04:00"
//     },
// });

// const bd_nclientes = new Sequelize(process.env.DB_NAME_nclientes, process.env.DB_USER_nclientes, process.env.DB_PASSWORD_nclientes, {
//     host: process.env.DB_HOST_nclientes,
//     dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//     port: process.env.DB_PORT_nclientes,
//     dialectOptions: {
//         ssl: {
//             require: true, // This will help you. But you will see nwe error
//             rejectUnauthorized: false // This line will fix new error
//         },
//         timezone: "-04:00"
//     },
//     timezone: "-04:00"
// });

// const testDbConnection = async () => {
//     try {
//         await bd_nclientes.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// };