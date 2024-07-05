import React from "react";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import "./tailwind.css";
import Index from "./routes/_index";
import Header from "./Components/header";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <Header /> */}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
