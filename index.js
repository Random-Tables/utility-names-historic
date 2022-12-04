const index = require("./index.json");
const angloSaxon = require("./anglo-saxon.json");

module.exports = {
  ...index,
  tableData: {
    angloSaxon,
  },
};
