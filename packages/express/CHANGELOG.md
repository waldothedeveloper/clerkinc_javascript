# Change Log

## 1.0.1-beta.0

### Patch Changes

- Introduce [Express](https://expressjs.com/) specific Clerk SDK called `@clerk/express`. The SDK exposes the following APIs: ([#2918](https://github.com/clerk/javascript/pull/2918)) by [@dimkl](https://github.com/dimkl)

  - `clerkClient`: Default [`@clerk/backend`](https://clerk.com/docs/references/backend/overview) client initialized from environment variables and used to make backend API requests
  - `clerkMiddleware`: Centralized middleware that authenticates all requests without blocking them (also triggers handshake mechanism)
  - `getAuth`: Utility to retrieve the auth state from a request (requires `clerkMiddleware` to be executed)
  - `requireAuth`: Middleware that returns HTTP 401 response when request is signed-out

  Also all the top level exports from `@clerk/backend` are re-exported from `@clerk/express`.

- Updated dependencies [[`63dfe8dc9`](https://github.com/clerk/javascript/commit/63dfe8dc92c28213db5c5644782e7d6751fa22a6), [`d22e6164d`](https://github.com/clerk/javascript/commit/d22e6164ddb765542e0e6335421d2ebf484af059)]:
  - @clerk/backend@1.0.0-beta.33
