
const reducer = (state, action)=> {
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: []}
        case 'REMOVE_ITEM':
            return {...state, cart: state.cart.filter((item)=> item.id !== action.payload)}
        case 'INCREASE':
            let tempCart = state.cart.map((item)=> {
               if (item.id === action.payload){
                   return {...item, amount: item.amount + 1}
               }
               return item
            })
            return {...state, cart: tempCart}
        case 'DECREASE':
            let tempCart2 = state.cart.map((item)=> {
                if (item.id === action.payload){
                    return {...item, amount: item.amount - 1}
                }
                return item
            }).filter((item)=> item.amount !== 0)
            return {...state, cart: tempCart2}
        case 'GET_TOTAL':
            let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
                const {price, amount} = cartItem
                const itemTotal = price * amount
                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            }, {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2))

            return {...state, total, amount}
        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading: false}
        case 'LOADING':
            return {...state, loading: true}
        default : return  state
    }
}
export default reducer