document.getElementById('proxyList').addEventListener('change', function () {
    const proxy = this.value;
    chrome.runtime.sendMessage({ action: 'setProxy', proxy: proxy });
  });
  
  document.getElementById('disableProxy').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'disableProxy' });
  });
  
  chrome.runtime.sendMessage({ action: 'getProxies' }, function (response) {
    const proxyList = document.getElementById('proxyList');
    response.proxies.forEach(function (proxy) {
      const option = document.createElement('option');
      option.value = proxy;
      option.text = proxy;
      proxyList.add(option);
    });
  });
  