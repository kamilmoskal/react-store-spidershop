import React, { Component } from 'react';
import './Nav.scss';
import { Menu, Input, Icon, Container, Dropdown, Button } from 'semantic-ui-react';

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
    render() {
        const { activeItem } = this.state
        let menuCollapsed = this.state.activeBurger ? '' : 'collapsed';
       
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

                        <Dropdown item button className='icon' icon='shop' text='(0)'>
                            <Dropdown.Menu>
                         
                                <Button animated fluid size='small'>
                                    <Button.Content visible>Go to</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                             
                                <Dropdown.Item>No items in chart</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <Menu.Item name='chart' active={activeItem === 'chart'} onClick={this.handleItemClick}>
                        Chart (0)
                        </Menu.Item> */}
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
    }

export default Nav;