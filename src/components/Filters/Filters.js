import React, { Component } from 'react';
import './Filters.scss';
import { Dropdown, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

const species = [
    { key: 1, text: ` Brachypelma (${3})`, value: 'Brachypelma' },
    { key: 2, text: 'Acanthoscurria', value: 'Acanthoscurria' },
    { key: 3, text: 'Avicularia', value: 'Avicularia' },
    { key: 4, text: 'Chromatopelma', value: 'Chromatopelma' },
    { key: 5, text: 'Psalmopoeus', value: 'Psalmopoeus' },
    { key: 6, text: 'Pterinochilus', value: 'Pterinochilus' },
    { key: 7, text: 'Poecilotheria', value: 'Poecilotheria' },
    { key: 8, text: 'Grammostola', value: 'Grammostola' },
]
const options = [
    { key: 1, text: 'Price: from the lowest', value: 'Price-L' },
    { key: 2, text: 'Price: from the highest', value: 'Price-H' },
    { key: 3, text: 'Name: from A to Z', value: 'Name-A' },
    { key: 4, text: 'Name: from Z to A', value: 'Name-Z' },
]

class Filters extends Component {
  state = { 
    filterSpecies: '', filterOverall: ''
  }
  changeFilterSpecies = (e, { value }) => {
    this.setState({ filterSpecies: value }, () => {
      this.props.filterSpecies(this.state.filterSpecies)
    })
  }
  changeFilterOverall = (e, { value }) => {
    this.setState({ filterOverall: value }, () => {
      this.props.filterOverall(this.state.filterOverall)
    })
  }
  render() {
    return (
      <div>
        <Dropdown placeholder='Species' clearable selection options={species} onChange={this.changeFilterSpecies}/>
        <Dropdown placeholder='Filter' clearable selection options={options} onChange={this.changeFilterOverall}/>

        <Divider />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    filterSpecies: (species) => { dispatch({ type: 'FILTER_SPECIES', species }) },
    filterOverall: (overall) => { dispatch({ type: 'FILTER_OVERALL', overall }) }
  }
}

export default connect(null,mapDispatchToProps)(Filters);
