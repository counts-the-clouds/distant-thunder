global.Server = (function() {

  function init() {
    Browser.receive('boot.start',boot);
  }

  // The goal of DistantThunger is to just be a wrapper around Election. When
  // the server receives the 'client.boot' message we know the browser window
  // has been opened and the Loader script has been run. We now need to send
  // all of the application context to the client, which should be able to load
  // itself essentially.
  function boot() {
    Browser.send('boot.setContext',{
      ROOT: ROOT,
      DATA: DATA,
      Environment: Environment.pack(),
      Configuration: Configuration,
    });
  }

  return {
    init
  };

})();