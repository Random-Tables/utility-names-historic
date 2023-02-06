const index = require("./index.json");
const angloSaxon = require("./anglo-saxon.json");
const calls = require("./calls.json");

module.exports = {
  ...index,
  tableData: {
    angloSaxon,
  },
  calls,
};
