# JavaScript Blockchain

Sample blockchain program written in JavaScript. You can make your own original token and blockchain network. 

- Create original token
- Building original simple blockchain network
- Consensus Algorithm(Longest chain algorithm)
- Transaction, Consensus APIs
- Synchronizing Network

# Installation & Usage in local PC

```
$ git clone git@github.com:eitake0002/javascript-blockchain.git
$ cd javascript-blockchain
$ npm install

# Start 5 nodes. 
$ sh run.sh

# Add nodes
$ sh add_nodes.sh
```

# Running on containers

* Make sure docker engine and docker compose are installed. 

Docker compose install

https://docs.docker.com/compose/install/

```
# Build image & run containers
$ docker-compose build && docker-compose up

# Stop containers
$ docker-compose down
```

# APIs

|path|Explain|Method|
|---|---|---|
|/blockchain|Blockchain status(Transaction/Blocks)|GET|
|/transaction|Input Transaction|POST|
|/transaction/broadcast|broadcast transaction to all nodes|POST|
|/mine|Execute mining|GET|
|/register-and-broadcast-node|Register new node to blockchain network|POST|
|/consensus|Consensus algorithm, checking blocks and transactions|GET|
