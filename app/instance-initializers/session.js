var initialize = function(instance) {
  var session = instance.container.lookup("service:session");
  session.forceInitialization();
};

export default {
  name: 'session',
  initialize: initialize
};
