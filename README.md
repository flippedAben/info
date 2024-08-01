# Deploying to GitHub Pages

This example supports deploying a statically exported Next.js application to GitHub Pages.

The `out` directory should not be ignored by version control.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example github-pages nextjs-github-pages
# or
yarn create next-app --example github-pages nextjs-github-pages
# or
pnpm create next-app --example github-pages nextjs-github-pages
```

### Develop

To locally test your changes,

```bash
npm run dev
```

Then, go to `http://localhost:3000/vgm`.

### Deploy to GitHub Pages

1. Make changes. Commit and push to `main`.
1. `npm run deploy`

Go the the URL, and you should see your changes appear shortly.

```bash
https://<github-user-name>.github.io/<github-project-name>/
```
