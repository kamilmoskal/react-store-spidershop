const initState = {
    productsList: [
        {id: 1, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'b_boehmei', amount: 1},
        {id: 2, species: 'Brachypelma', name: 'Vagans', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 3, species: 'Brachypelma', name: 'Albopilosum', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 4, species: 'Brachypelma', name: 'Emilia', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 5, species: 'Brachypelma', name: 'Hamorii', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 6, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 7, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1},
        {id: 8, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'null', amount: 1}
    ],
    chartList: [
        {id: 1, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'b_boehmei', amount: 1},
        {id: 2, species: 'Brachypelma', name: 'cyasdhajasdjk', stock: 87, price: 15, stadium: 'L1/L2', img: 'b_boehmei', amount: 1}
    ]
}
const rootReducer = (state = initState, action) => {
    
    if (action.type === 'ADD_TO_CHART'){
        if (state.chartList.filter(e => e.id === action.id).length > 0) {
            return { 
                ...state,
                chartList: state.chartList.map(
                    (content, i) => i+1 === action.id ? {...content, amount: content.amount + 1} : content
                ),
            }
        } else {
            return {
                ...state,
                chartList: [...state.chartList, ...state.productsList.filter(e => e.id == action.id)]
            }
        }
    } else if (action.type === 'REMOVE_FROM_CHART'){
        return { 
            ...state,
            chartList: state.chartList.filter(e => e.id !== action.id)
        }
    } else {
        return state
    }
}

export default rootReducer;