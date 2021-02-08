import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import App from "../containers/App";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const markup = renderToString(
    <StaticRouter location={req.url}x>
      <App />
    </StaticRouter>
  );

  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="description" content="This is SSR app with React">
      <meta name="robots" content="noindex, nofollow">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>SSR with REACT</title>
      <script src="/bundle.js" defer></script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)      
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});