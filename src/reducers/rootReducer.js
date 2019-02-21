const initState = {
    productsList: [
        {id: 1, species: 'Brachypelma', name: 'Boehmei', stock: 57, price: 15, stadium: 'L1/L2', img: 'b_boehmei', amount: 1},
        {id: 2, species: 'Brachypelma', name: 'Vagans', stock: 27, price: 5, stadium: 'L1/L3', img: 'b_vagans', amount: 1},
        {id: 3, species: 'Brachypelma', name: 'Albopilosum', stock: 43, price: 8, stadium: 'L2/L4', img: 'b_albopilosum', amount: 1},
        {id: 4, species: 'Brachypelma', name: 'Emilia', stock: 2, price: 40, stadium: 'L6', img: 'b_emilia', amount: 1},
        {id: 5, species: 'Brachypelma', name: 'Hamorii', stock: 1, price: 50, stadium: 'L6', img: 'b_hamorii', amount: 1},
        {id: 6, species: 'Acanthoscurria', name: 'Brocklehursti', stock: 6, price: 18, stadium: 'L4', img: 'a_brocklehursti', amount: 1},
        {id: 7, species: 'Acanthoscurria', name: 'Geniculata', stock: 26, price: 12, stadium: 'L2/L3', img: 'a_geniculata', amount: 1},
        {id: 8, species: 'Avicularia', name: 'Versicolor', stock: 83, price: 15, stadium: 'L1/L2', img: 'a_versicolor', amount: 1},
        {id: 9, species: 'Avicularia', name: 'Metalica', stock: 5, price: 35, stadium: 'L1/L2', img: 'a_metalica', amount: 1},
        {id: 10, species: 'Chromatopelma', name: 'Cyaneopubescens', stock: 40, price: 40, stadium: 'L1/L2', img: 'c_cyaneopubescens', amount: 1},
        {id: 11, species: 'Psalmopoeus', name: 'Irminia', stock: 10, price: 18, stadium: 'L2/L3', img: 'p_irminia', amount: 1},
        {id: 12, species: 'Pterinochilus', name: 'Murinus', stock: 30, price: 25, stadium: 'L1/L3', img: 'p_murinus', amount: 1},
        {id: 13, species: 'Poecilotheria', name: 'Regalis', stock: 2, price: 120, stadium: '4DC female', img: 'p_regalis', amount: 1},
        {id: 14, species: 'Poecilotheria', name: 'Metallica', stock: 1, price: 300, stadium: '3.5DC female', img: 'p_metallica', amount: 1},
        {id: 15, species: 'Grammostola', name: 'Pulchra', stock: 14, price: 50, stadium: 'L1/L2', img: 'g_pulchra', amount: 1},
        {id: 16, species: 'Grammostola', name: 'Rosea', stock: 21, price: 65, stadium: 'L2/L3', img: 'g_rosea', amount: 1},
    ],
    chartList: [
        {id: 1, species: 'Brachypelma', name: 'Boehmei', stock: 87, price: 15, stadium: 'L1/L2', img: 'b_boehmei', amount: 1}
    ],
    filterSpecies: '', filterOverall: ''
}
const rootReducer = (state = initState, action) => {
    
    if (action.type === 'ADD_TO_CHART'){
        if (state.chartList.filter(e => e.id === action.id).length > 0) {
            return { 
                ...state,
                chartList: state.chartList.map(
                    content => content.id === action.id ? {...content, amount: content.amount + 1} : content
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
    } else if (action.type === 'FILTER_SPECIES'){
        return { 
            ...state,
            filterSpecies: action.species
        }
    } else if (action.type === 'FILTER_OVERALL'){
        return { 
            ...state,
            filterOverall: action.overall
        }
    } else {
        return state
    }
}

export default rootReducer;