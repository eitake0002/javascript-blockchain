const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Set provider. Using rinkeby test network. 
const provider = new HDWalletProvider(
  'exclude yellow zebra bread picnic matter inquiry fetch language amused enhance motion',
  'https://rinkeby.infura.io/v3/91c2a5ce3c3a451f8374777c0a392cfd'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(JSON.parse(interface)) 
    .deploy({data: bytecode, arguments: ['This is test deployment']})
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
