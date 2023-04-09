const serverURL = 'https://yourserver.com/proxy-lista'; // change this url with your own

async function fetchProxies() {
  const response = await fetch(serverURL);
  const proxies = await response.json();
  return proxies;
}

function setProxy(proxy) {
  const config = {
    mode: 'fixed_servers',
    rules: {
      singleProxy: {
        scheme: 'http',
        host: proxy.host,
        port: parseInt(proxy.port, 10)
      },
      bypassList: []
    }
  };

  chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {});
}

function disableProxy() {
  chrome.proxy.settings.clear({ scope: 'regular' }, function () {});
}

chrome.runtime.onMessage
