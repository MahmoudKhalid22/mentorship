const mon = require("mongoose");

mon.connect("mongodb://127.0.0.1:27017/tsDB");

mon.connection.once("open", (): void => console.log("db connected"));

module.exports = mon;
