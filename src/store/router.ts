import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export const routerEnhancer = routerMiddleware(history);

export default connectRouter(history);
