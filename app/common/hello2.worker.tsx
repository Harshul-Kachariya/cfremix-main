import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import HelloWorld2 from "~/routes/hello2";

const renderComponent = () => {
  const html = ReactDOMServer.renderToString(React.createElement(HelloWorld2));
  return html;
};

Comlink.expose({ renderComponent });
