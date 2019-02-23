import React from 'react';
import './Filters.scss';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PaginationBar from '../PaginationBar/PaginationBar';
import { optionsAllSpecies } from '../../selectors/optionsAllSpecies';

//static data for filter dropdown
/* const options_species = [
    { text: 'Acanthoscurria', value: 'Acanthoscurria' },
    { text: 'Avicularia', value: 'Avicularia' },
    { text: ` Brachypelma (${3})`, value: 'Brachypelma' },
    { text: 'Chromatopelma', value: 'Chromatopelma' },
    { text: 'Psalmopoeus', value: 'Psalmopoeus' },
    { text: 'Pterinochilus', value: 'Pterinochilus' },
    { text: 'Poecilotheria', value: 'Poecilotheria' },
    { text: 'Grammostola', value: 'Grammostola' },
] */
const options_overall = [
    { text: 'Price: from the lowest', value: 'Price-L' },
    { text: 'Price: from the highest', value: 'Price-H' },
    { text: 'Name: from A to Z', value: 'Name-A' },
    { text: 'Name: from Z to A', value: 'Name-Z' },
]

const Filters = (props) => {
    const { productsList, currentPage, productsOnPage, options_species} = props;
    return (
      <div className="filters">
        <div className="filters__left">
          <Dropdown placeholder='Species' clearable selection options={options_species} onChange={(e, {value}) => {props.filterSpecies(value)}}/>
          <Dropdown placeholder='Filter' clearable selection options={options_overall} onChange={(e, {value}) => {props.filterOverall(value)}}/>
        </div>
        <div className="filters__right">
          <p>page {currentPage} of {Math.ceil(productsList.length / productsOnPage)} </p>
          <PaginationBar productsList={productsList} productsOnPage={productsOnPage} currentPage={currentPage}/>
        </div>
      </div>
    )
  
}
const mapStateToProps = (state) => {
  return {
    options_species: optionsAllSpecies(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    filterSpecies: (species) => { dispatch({ type: 'FILTER_SPECIES', species }) },
    filterOverall: (overall) => { dispatch({ type: 'FILTER_OVERALL', overall }) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters);
