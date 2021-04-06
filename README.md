# telia.chat.test-project
Trying a standalone implementation of telia faq and chat to test something before trying to mess with the consumerportal's servers/services.

## What this tries to solve
We have the Telia FAQ and Chat that we want to add. However, our project uses [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and it requires explicitly allowing any external resources. Anything inline requires a sha so we can verify the inline content is legitimate. Anything that creates an inline resource needs to have a nonce we approve of.

The ACE SDK and Chat are React app(s) that use a strange inline style element called [styled-components](https://styled-components.com/). This is incompatible with our CSP at this time, so we are here trying to find a way to make it work without compromising our CSP.

## Installation
1. Make sure to have node and npm installed.
2. Download or clone this repo.
3. Run `npm install`.
4. Run `npm run dev` to take it for a drive.
