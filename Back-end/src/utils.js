const fs = require("fs");

const getData = () => {
  const file = fs.readFileSync("./data/data.json");
  return JSON.parse(file);
};

const getTrainingData = () => {
  const file = fs.readFileSync("./data/training.json");
  return JSON.parse(file);
};

const getConfig = () => {
  const file = fs.readFileSync("./config.json");
  return JSON.parse(file);
};

module.exports = {
  getData,
  getTrainingData,
  getConfig
};
