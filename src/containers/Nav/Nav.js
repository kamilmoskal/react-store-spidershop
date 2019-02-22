import React, { Component } from 'react';
import './Nav.scss';
import { Menu, Input, Icon, Container, Dropdown, Button, Transition } from 'semantic-ui-react';
import ChartItem from '../../components/ChartItem/ChartItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalPriceChart } from '../../selectors/totalPriceChart';

class Nav extends Component {
    state = {
        activeItem: 'none', activeBurger: true, clickEffect: true
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
    componentDidUpdate(prevProps){
        if (prevProps.chartList !== this.props.chartList && prevProps.chartList.length <= this.props.chartList.length){
        // if chart product.amount is changed and product.length is equal or increase do animation on chart btn
            this.setState({ clickEffect: !this.state.clickEffect })
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    onBurgerClick = () => this.setState({ activeBurger: !this.state.activeBurger })
    removeFromChartList = (id) => {
        this.props.removeFromChart(id);
    }
    
    render() {
    const { activeItem, clickEffect } = this.state;
    const { chartList, totalPrice } = this.props;
    let menuCollapsed = this.state.activeBurger ? '' : 'collapsed';
        return (
            <Menu stackable borderless>
                <Container>
                    <Menu.Item header>
                        <Icon name='bars' size="large" className='burger' onClick={this.onBurgerClick}/>
                        <Link to='/'><span>I<Icon name='heart' />SPIDERS</span></Link>
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

                            <Transition animation='pulse' duration={500} visible={clickEffect}>
                        <Dropdown item simple button className='icon' icon='shop' text={`(${chartList.length})`}>
                            <Dropdown.Menu>
                         
                                {chartList.length ? chartList.map(item => {
                                    return(
                                        <Dropdown.Item key={item.id}><ChartItem product={item} removeFromChartList={this.removeFromChartList}/></Dropdown.Item>
                                    )
                                }) : <Dropdown.Item>No items in chart</Dropdown.Item>}

                                {chartList.length ? <Dropdown.Item active style={{textAlign: "right"}}>Total: ${totalPrice} </Dropdown.Item> : null}

                                <Button animated fluid size='small' as={Link} to='/chart'>
                                    <Button.Content visible>View Chart</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>

                            </Dropdown.Menu>
                        </Dropdown>
                            </Transition>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        chartList: state.chartList,
        totalPrice: totalPriceChart(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        removeFromChart: (id) => { dispatch({ type: 'REMOVE_FROM_CHART', id }) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);