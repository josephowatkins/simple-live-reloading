(function () {
  // initial connection
  const url = "ws://localhost:3000";
  const s = new WebSocket(url);

  function reloadOnReconnect() {
    const url = "ws://localhost:3000";
    const s = new WebSocket(url);

    // server is up, so reload
    s.addEventListener("open", () => {
      location.reload();
    });

    // try and connect again
    setTimeout(reloadOnReconnect, 250);
  }

  s.addEventListener("close", () => {
    // wait until the app reconnects before reloading
    reloadOnReconnect();
  });
})();
