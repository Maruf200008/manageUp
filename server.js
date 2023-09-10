const auth = require("json-server-auth");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


// Bind the router db to the app
server.db = router.db;

server.use(middlewares);

const rules = auth.rewriter({
    users: 640,
    task: 660,
 
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(9000);
