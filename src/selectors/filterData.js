import { createSelector } from 'reselect';

const getProductList = state => state.productsList
const getFilterState = state => state.filterState

export const filterProductList = createSelector(
  [getFilterState, getProductList],
  (state, productsList) => {
    switch (state) {
      case '':
        return productsList
      case 'Brachypelma':
        return productsList.filter(product => product.species === 'Brachypelma')
      case 'Acanthoscurria':
        return productsList.filter(product => product.species === 'Acanthoscurria')
      case 'Avicularia':
        return productsList.filter(product => product.species === 'Avicularia')
      case 'Chromatopelma':
        return productsList.filter(product => product.species === 'Chromatopelma')
      case 'Psalmopoeus':
        return productsList.filter(product => product.species === 'Psalmopoeus')
      case 'Pterinochilus':
        return productsList.filter(product => product.species === 'Pterinochilus')
      case 'Poecilotheria':
        return productsList.filter(product => product.species === 'Poecilotheria')
      case 'Grammostola':
        return productsList.filter(product => product.species === 'Grammostola')
    }
  }
)