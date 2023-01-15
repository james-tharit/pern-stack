import server from "./src/server";

const port = 3001;

const startServer = () => {
  try {
    server.listen(port, () => console.log("Starting server on port " + port));
  } catch (err) {
    console.log("server err: " + err);
  }
};

startServer();
