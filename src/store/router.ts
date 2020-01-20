/* istanbul ignore file */
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();
export const reducer = connectRouter(history);
export const enhancer = routerMiddleware(history);
export default reducer;
