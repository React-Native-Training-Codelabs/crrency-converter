import React from "react";
import Navigation from "./config/Navigation";

import { api } from "./util/api";

api("/latest?base=USD")
  .then((res) => console.log("Res: ", res))
  .then((err) => console.log("error", err));

export default () => <Navigation />;
