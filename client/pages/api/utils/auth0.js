import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.domain,
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret,
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000/",
  scope: "openid profile",
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret:
      "asssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: false,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false,
  },
});
