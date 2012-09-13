
  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else {
    namespace = app.exports ? 'exports' : namespace;
    app[namespace] = api;
  }

}(global.applitude || module || this));
