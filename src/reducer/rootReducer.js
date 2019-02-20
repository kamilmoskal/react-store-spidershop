const initState = {
    productsList: [
        {id: 1, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 2, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 3, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 4, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 5, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 6, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 7, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'},
        {id: 8, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2'}
    ]
}
const rootReducer = (state = initState, action) => {
    
    if (action.type === 'NEWS_LIST'){
        return {
            ...state,
         
        };
    } else {
        return state
    }
}

export default rootReducer;