const mysql2 = require("mysql2/promise");

const connectDb = async () => {
  const connecction = await mysql2.createConnection({
    host: "aws.connect.psdb.cloud",
    user: "eqc1edg1exm6ilgmxgbe",
    password: "pscale_pw_sxXHU12ZAcw86YalpO9vevraosDLsvI2JYlAz6XLEXl",
    database: "expressdb",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const solution = await connecction.query("SELECT 'hello world' AS solution");
  console.log(solution);
};

module.exports = connectDb;
