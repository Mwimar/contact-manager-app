const mongose = require("mongose");

const connectDb = async () => {
  try {
    const connect = await mongose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;