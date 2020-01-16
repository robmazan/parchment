const jsonServer = require("json-server");
const server = jsonServer.create();
const generate = require("./generate");
const router = jsonServer.router(generate());
const middlewares = jsonServer.defaults({
  static: "build"
});
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const Keycloak = require("keycloak-connect");
const keycloak = new Keycloak(
  { store: memoryStore },
  {
    realm: "parchment",
    "auth-server-url": "http://keycloak.mshome.net:8080/auth",
    "ssl-required": "external",
    resource: "parchment-server",
    "public-client": true,
    "confidential-port": 0
  }
);

server.use(middlewares);

server.use(
  session({
    secret: "NOT FOR PRODUCTION :)",
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

server.use(keycloak.middleware({
    logout: "/logout"
}));

server.get("/login", keycloak.protect(), (req, res) => {
    res.redirect("/");
});

server.get("/api/user", keycloak.protect(), (req, res) => {
    const tokenContent = req.kauth.grant.access_token.content;
    res.send({
        username: tokenContent.name,
        firstname: tokenContent.given_name,
        lastname: tokenContent.family_name,
        roles: tokenContent.realm_access.roles,
    })
    res.end();
});

const ROLE_ADMIN = "realm:admin";
const ROLE_AUTHOR = "realm:author";
const ROLE_EDITOR = "realm:editor";

const protectAuthors = keycloak.protect(ROLE_ADMIN);
const protectPosts = keycloak.protect((token, req) => {
    if (req.method === "PUT") {
        // Author and editor can edit post
        return token.hasRole(ROLE_AUTHOR) || token.hasRole(ROLE_EDITOR);
    } else {
        // Only author can create / delete
        return token.hasRole(ROLE_AUTHOR);
    }
});

const protectCategories = keycloak.protect(ROLE_EDITOR);
const protectDefault = keycloak.protect();

server.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
        if (req.method === "GET") {
            next();
            return;
        }
        if (req.path.startsWith("/api/authors")) {
            return protectAuthors(req, res, next);
        }
        if (req.path.startsWith("/api/posts")) {
            return protectPosts(req, res, next);
        }
        if (req.path.startsWith("/api/categories")) {
            return protectCategories(req, res, next);
        }
        return protectDefault(req, res, next);
    } else {
        next()
    }
});

server.use("/api", router);

server.listen(3333, () => {
  console.log("JSON Server is running");
});
