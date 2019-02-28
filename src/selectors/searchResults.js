import { createSelector } from 'reselect';

const getProductsList = state => state.productsList;
const getSearchValue = state => state.searchValue;

export const searchResults = createSelector(
  [getProductsList, getSearchValue],
  (productList, searchValue) => {

    let searchResults = []
    //filter items from all products, depending on value
    let filteredResults = productList.filter(product => product.species.toLowerCase().indexOf(searchValue) > -1 || product.name.toLowerCase().indexOf(searchValue) > -1)
    //transform to desire data format
    filteredResults.forEach(result => {
        searchResults.push({
            id: `${result.id}`,
            title: `${result.name}`,
            description: `${result.species}`,
            image: require(`../img/${result.img}.jpg`),
            price: `$${result.price}`
        })
    })
    
    return searchResults.slice(0,5)
  }
)
