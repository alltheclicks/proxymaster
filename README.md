# Proxy Switcher Chrome Extension

Proxy Switcher is a Chrome extension that allows users to easily switch between proxy servers and disable proxy connections when needed. It provides a simple and user-friendly interface for selecting proxies, fetched from a specified server.

## Features

- Fetch proxy list from a specified server
- Easily switch between proxies from a dropdown menu
- Disable proxy connection with a single click
- Modern and visually appealing design

## Setup and Installation

To set up and test the Proxy Switcher Chrome extension, follow these steps:

1. Clone the repository to your local machine.
2. Modify the `serverURL` in `background.js` to point to your server containing the proxy list.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top-right corner.
5. Click "Load unpacked" and select the directory containing the Proxy Switcher extension files.
6. Verify that the extension is successfully installed and its icon appears in the toolbar.

To package and publish the extension on the Chrome Web Store, follow the [official guide provided by Google](https://developer.chrome.com/docs/webstore/publish/).
