<div align="center">
    <a align="center" href="https://moralis.io" target="_blank">
      <img src="https://raw.githubusercontent.com/MoralisWeb3/moralis-analytics-js/main/assets/moralis-logo.svg" alt="Moralis Analytics" height=200/>
    </a>
    <h1 align="center">Moralis Analytics JS</h1>
  <p>
  </p>
  <p>
    A tiny Moralis analytics helper library.
  </p>
  <br/>
</div>

# 🚀 Quick start

If you're new to Moralis, check the [quickstart guide in the official docs](https://docs.moralis.io/docs/quickstart) on how to get started.

## 1. Install Moralis Analytics

Install the package via `npm`:

```shell
npm install @moralisweb3/analytics
```

Import Moralis Analytics:

```js
import { Analytics } from '@moralisweb3/analytics';
```

## 2. Create a new Analytics instance

```javascript
const analytics = new Analytics('MORALIS_LIVE_KEY');
```

## 3. Track your users

In the callback method of your authentication flow simply invoke the `analytics.address` method with the users address and any optional metadata.

```javascript
analytics.address(account.address, { provider: account.connector?.name });

// OR simply

analytics.address(account.address);
```
