if (process.browser && window.Worker) {
  require('webworkify')(require('./test.js'));
}
