var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var init = function(files) {
  files.unshift(createPattern(__dirname + '/jasmine-precondition.js'));
};

init.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-precondition': ['factory', init]
};

