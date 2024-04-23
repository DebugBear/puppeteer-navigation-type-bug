This repo is a reproduction of a bug on navigation types in Puppeteer.

In `v22` it doesn't correctly catch a back navigation as type `back_forward` and instead detects it as `navigation`.

To test:

```
cd 22.6.5
npm install
node main
// See `navigation` logged

cd 21.0.1
npm install
node main
// See `back_forward` logged
```
