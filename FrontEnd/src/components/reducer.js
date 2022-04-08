export const initialState = {
    basket: []
};
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => (((item.pprice)*item.quantity) + amount), 0);

const reducer =  (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.pid === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn('Cant remove this product(id: ${action.id})as its not in basket!')
            }
            return {
                ...state,
                basket: newBasket
            };
        case "REMOVE_ITEM": {
            return Object.assign({}, state, {
                items: [...state.items.filter(item => item.id !== action.pid)],
            });
        };
        case "ADD_QUANTITY":
            console.log("ADD_QUANTITY")
            let Items = [...state.basket]
             Items.filter(item => Number(item.pid) === Number(action.id)).map( i => {
                if(i.p_qty>=(i.quantity + 1)){
                    console.log(i.quantity)
                    i.quantity = i.quantity + 1
                }  
            })
            return Object.assign({}, state, {
                basketItem: Items,
            });
        case "MINUS_QUANTITY":
            console.log("MINUS_QUANTITY")
            let BasketItems = [...state.basket]
            BasketItems.filter(item => Number(item.pid) === Number(action.id)).map(i => {
                console.log(i.quantity)
                if (i.quantity === 1) {
                    BasketItems = [...state.basket.filter(item => Number(item.pid) !== Number(action.id))]
                }
                else {
                    i.quantity = i.quantity - 1
                }
            })
            return Object.assign({}, state, {
                basketItem: BasketItems,
            });
        default:
            return state;
    }
};
export default reducer;