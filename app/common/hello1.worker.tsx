import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import HelloWorld1 from "~/routes/hello1";

const renderComponent = () => {
  const html = ReactDOMServer.renderToString(React.createElement(HelloWorld1));
  return html;
};

Comlink.expose({ renderComponent });
