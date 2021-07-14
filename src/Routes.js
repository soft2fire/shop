import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Component/Shop";
import Cart from "./Component/Cart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <Route path="/" component={App} />
                    <Route path="/shoppingCart" component={Cart} />
                    <Route exact path="/shop" component={Shop} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;