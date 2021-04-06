# telia.chat.test-project
Trying a standalone implementation of telia faq and chat to test something before trying to mess with the consumerportal's servers/services.

## What this tries to solve
We have the Telia FAQ and Chat that we want to add. However, our project uses [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and it requires whitelisting any external resources. Anything inline requires a sha so we can verify the inline content is legitimate. Anything that creates an inline resource needs to have a nonce we approve of.

## Installation
1. Make sure to have node and npm installed.
2. Download or clone this repo.
3. Run `npm install`.
4. Run `npm run dev` to take it for a drive.
