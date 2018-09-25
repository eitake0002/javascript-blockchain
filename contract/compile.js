const path = require('path');
const fs = require('fs');
const solc = require('solc');

solcFile = "sample.sol"
contractName = ":Ballot"

const solcPath = path.resolve(__dirname, solcFile);
const source = fs.readFileSync(solcPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[contractName];

