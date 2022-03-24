import store from "./store/store";
import * as actions from './store/actionTypes'
import { productMarkAsDiscount } from "./store/product/action";
import { productAdded } from "./store/product/action";


store.subscribe(() => {
    console.log('Store changed!', store.getState());
});


store.dispatch(productAdded({
    name: "Product 1",
    price: 1500,
}));


store.dispatch(productAdded({
    name: "Product 2",
    price: 1000,
}));


store.dispatch(productAdded({
    name: "Product 3",
    price: 500,
}));

store.dispatch({
    type: actions.MARK_PRODUCT_AS_DISCOUNT,
    payload: {
        id: 2,
        hasDiscount: true
    }
});

store.dispatch( productMarkAsDiscount ({
    id: 3,
    hasDiscount: true
}));


// console.log(store.getState())