import React, { Component } from 'react';
import './Nav.scss';
import { Menu, Input, Icon, Container, Dropdown, Button } from 'semantic-ui-react';
import ChartItem from '../../components/ChartItem/ChartItem';
import { connect } from 'react-redux';

class Nav extends Component {
    state = {
        activeItem: 'none', activeBurger: true
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768){
                this.setState({ activeBurger: true})
            } else {
                this.setState({ activeBurger: false})
            }
        })
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    onBurgerClick = () => this.setState({ activeBurger: !this.state.activeBurger })
    removeFromChartList = (id) => {
        this.props.removeFromChart(id);
    }
    render() {
    const { activeItem } = this.state;
    const { chartList } = this.props;
    let menuCollapsed = this.state.activeBurger ? '' : 'collapsed';
    let total = 0;
        return (
            <Menu stackable borderless>
                <Container>
                    <Menu.Item header>
                        <Icon name='bars' size="large" className='burger' onClick={this.onBurgerClick}/>
                        <span>I<Icon name='heart' />SPIDERS</span>
                        <Icon name='bars' size="large" style={{color: 'transparent'}}/>
                    </Menu.Item>

                    <Menu.Menu position='right' className={menuCollapsed}>
                        <Menu.Item>
                            <Input icon={{ name: 'search', link: true }} placeholder='Search...' />
                        </Menu.Item>

                        <Menu.Item name='spiders' active={activeItem === 'spiders'} onClick={this.handleItemClick}>
                        Spiders
                        </Menu.Item>

                        <Menu.Item name='type' active={activeItem === 'type'} onClick={this.handleItemClick}>
                        Type
                        </Menu.Item>

                        <Dropdown item simple button className='icon' icon='shop' text={`(${chartList.length})`}>
                            <Dropdown.Menu>
                         
                                {chartList.length ? chartList.map(item => {
                                    total += item.price * item.amount;
                                    return(
                                        <Dropdown.Item key={item.id}><ChartItem product={item} removeFromChartList={this.removeFromChartList}/></Dropdown.Item>
                                    )
                                }) : <Dropdown.Item>No items in chart</Dropdown.Item>}

                                {chartList.length ? <Dropdown.Item active>Total: ${total} </Dropdown.Item> : null}

                                <Button animated fluid size='small'>
                                    <Button.Content visible>View Chart</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>

                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        chartList: state.chartList
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        removeFromChart: (id) => { dispatch({ type: 'REMOVE_FROM_CHART', id }) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);