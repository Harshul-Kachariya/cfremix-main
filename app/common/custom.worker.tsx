import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Customcomponents from "~/routes/custom";

const renderComponent = () => {
  const html = ReactDOMServer.renderToString(
    React.createElement(Customcomponents)
  );
  return html;
};

Comlink.expose({ renderComponent });
