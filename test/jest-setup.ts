import { Options } from "aurelia-loader-nodejs";
import { globalize } from "aurelia-pal-nodejs";
import "aurelia-polyfills";

import global from "jsdom-global";
import * as path from "path";

Options.relativeToDir = path.join(__dirname, "unit");
global();
globalize();

