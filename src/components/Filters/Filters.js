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
    { key: 1, text: 'Price: from the lowest', value: 1 },
    { key: 2, text: 'Price: from the highest', value: 2 },
    { key: 3, text: 'Name: from A to Z', value: 3 },
    { key: 4, text: 'Name: from Z to A', value: 4 },
]

class Filters extends Component {
  state = { 
    filterStatus: '' 
  }
  handleChange = (e, { value }) => {
    this.setState({ filterStatus: value }, () => {
      this.props.changefilterStatus(this.state.filterStatus)
    })
  }
  render() {
    console.log(this.state.filterStatus)
    return (
      <div>
        <Dropdown placeholder='Species'  clearable selection options={species} onChange={this.handleChange}/>
        <Dropdown placeholder='Filter' clearable selection options={options} />

        <Divider />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    changefilterStatus: (status) => { dispatch({ type: 'CHANGE_FILTER_STATUS', status }) }
  }
}

export default connect(null,mapDispatchToProps)(Filters);
