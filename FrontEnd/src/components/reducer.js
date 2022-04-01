export const initialState={
    basket:[],
    user:null
};
//Selector
export const getBasketTotal=(basket)=>basket?.reduce((amount,item)=>item.pprice+amount,0);

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
                let newBasket=[...state.basket];
                if (index>=0)
                {
                    newBasket.splice(index,1);
                }
                else{
                    console.warn('Cant remove this product(id: ${action.id})as its not in basket!')
                }
            return{
                ...state,
                basket:newBasket
            };
            case "REMOVE_ITEM": {
                return Object.assign({}, state, {
                  items: [...state.items.filter(item => item.id !== action.pid)],
                });
              }
        default:
            return state;
    }
};
export default reducer;