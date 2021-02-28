var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "react-dom"], function (require, exports, react_1, react_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    react_dom_1 = __importDefault(react_dom_1);
    const App = () => {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("p", null, "Typescript project")));
    };
    react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
});
