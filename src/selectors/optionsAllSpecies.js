import { createSelector } from 'reselect';

const getProductsList = state => state.productsList;

export const optionsAllSpecies = createSelector(
  [getProductsList],
  (productList) => {
    //get array of species from productList
    let arrayOfSpecies = productList.map(item => item.species); 
    
    //get object of unique species and it's number of duplicate
    let counts = {};
    arrayOfSpecies.forEach(e => { counts[e] = (counts[e] || 0)+1; });

    //get arrays of unique species and number of duplicates
    let arrayOfDuplicates = Object.values(counts)
    let arrayOfUniqueSpecies = Object.keys(counts);

    //transform above to desire data format
    let options_species = [];
    for(let i=0; i < arrayOfUniqueSpecies.length; i++){
        let item = {text: `${arrayOfUniqueSpecies[i]} (${arrayOfDuplicates[i]})`, value: arrayOfUniqueSpecies[i]}
        options_species.push(item);
    }
    
    return options_species
  }
)

