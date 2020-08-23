export default(state,action) => {                   //state contains the state values and action contains the object send by dispatch
    switch(action.type){
        case 'DEL_TRANS' :
            return{
                ...state,                           //everthing in state
                transactions: state.transactions.filter( transaction => transaction.id !== action.payload)      //transactions is the one in the Global Context with same name 
            }
        case 'ADD_TRANS' :
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]               //Here we add transaction to the whole state
            }
        default:
            return state;
    }
}