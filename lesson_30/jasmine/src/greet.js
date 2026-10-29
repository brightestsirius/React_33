const logger = {
  log(message) {
    console.log(message);
  },
};

function greet(name) {
  logger.log(`Hello, ${name}!`);
}

module.exports = { logger, greet };
