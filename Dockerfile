FROM node:latest
ADD ./dev/blockchain.js /code/
ADD ./dev/networkNode.js /code/
ADD ./package.json /code/
ADD ./run.sh /code/
WORKDIR /code
RUN npm install
CMD ["npm", "run", "node_1"]
EXPOSE 3001/tcp
