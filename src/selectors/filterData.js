import { createSelector } from 'reselect';

const getProductList = state => state.productsList;
const getFilterSpecies = state => state.filterSpecies;
const getFilterOverall = state => state.filterOverall;

export const filterProductList = createSelector(
  [getFilterSpecies, getFilterOverall, getProductList],
  (species, overall, productsList) => {
    let sortedList;
    switch (species) {
      case '':
        if(overall === 'Price-L'){
            return productsList.filter(() => true).sort((a, b) => a.price - b.price); 
        } else if (overall === 'Price-H') {
            return productsList.filter(() => true).sort((a, b) => b.price - a.price);
        } else if (overall === 'Name-A'){
            return productsList.filter(() => true).sort((a, b) => a.species.localeCompare(b.species))
        } else if (overall === 'Name-Z'){
            return productsList.filter(() => true).sort((a, b) => b.species.localeCompare(a.species))
        }
        return productsList
      case 'Brachypelma':
        sortedList = productsList.filter(product => product.species === 'Brachypelma');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Acanthoscurria':
        sortedList = productsList.filter(product => product.species === 'Acanthoscurria');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Avicularia':
        sortedList = productsList.filter(product => product.species === 'Avicularia');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Chromatopelma':
        sortedList = productsList.filter(product => product.species === 'Chromatopelma');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Psalmopoeus':
        sortedList = productsList.filter(product => product.species === 'Psalmopoeus');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Pterinochilus':
        sortedList = productsList.filter(product => product.species === 'Pterinochilus');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Poecilotheria':
        sortedList = productsList.filter(product => product.species === 'Poecilotheria');
        filterOverall(sortedList, overall);
        return sortedList
      case 'Grammostola':
        sortedList = productsList.filter(product => product.species === 'Grammostola');
        filterOverall(sortedList, overall);
        return sortedList
    }
  }
)

const filterOverall = (sortedList, overall) => {
    if(overall === 'Price-L'){
        return sortedList.sort((a, b) => a.price - b.price); 
    } else if (overall === 'Price-H') {
        return sortedList.sort((a, b) => b.price - a.price);
    } else if (overall === 'Name-A'){
        return sortedList.sort((a, b) => a.name.localeCompare(b.name))
    } else if (overall === 'Name-Z'){
        return sortedList.sort((a, b) => b.name.localeCompare(a.name))
    }
}