import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Header from "~/Components/header";

Comlink.expose({
  async renderComponent(componentCode: any) {
    const Component = eval(componentCode);
    const html = ReactDOMServer.renderToString(React.createElement(Component));
    return html;
  },
});
