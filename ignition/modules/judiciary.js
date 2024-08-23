const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Judiciary", (m) => {
  const Judiciary = m.contract("Judiciary");

  return { "Judiciary Deployed at" :Judiciary };
});