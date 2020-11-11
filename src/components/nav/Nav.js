import React, { Component } from 'react';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import "./Nav.css"

const menu = (
    <Menu>
        <Menu.Item key="0">
            {/* {this.props.numberS} */}
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item key="2">3rd menu item</Menu.Item>
        <Menu.Item>
            {/* {this.props.numberS} */}
        </Menu.Item>
    </Menu>
);

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden:true
        };
    }

    componentWillUnmount() {
        this.wowo()
    }

    wowo = () => {
        if (this.props.numberS) {
            this.setState({
                hiddenS: 0
            })
        }
        else if (this.props.numberM) {
            this.setState({
                hiddenM: false
            })
        }
        else if (this.props.numberL) {
            this.setState({
                hiddenL: false
            })
        }
    }

    // getItems=()=>{
    //     this.setState({
    //         arr:this.props.arr
    //     })
    // }
    getS() {
        if (this.props.numberS) {
            return [
                <img width={100} src={this.props.url} />,
                <div>
                    <div className="itemName">{this.props.name}</div>
                    <div>{this.props.numberS}x<span className="itemPrice">{this.props.price}</span></div>
                    <div className="itemSize">Size:S</div>
                </div>

            ]
        }

    }
    getM() {
        if (this.props.numberM) {
            return [
                <img width={100} src={this.props.url} />,
                <div>
                    <div className="itemName">{this.props.name}</div>
                    <div>{this.props.numberM}x<span className="itemPrice">{this.props.price}</span></div>
                    <div className="itemSize">Size:M</div>
                </div>

            ]
        }

    }
    getL() {
        if (this.props.numberL) {
            return [
                <img width={100} src={this.props.url} />,
                <div>
                    <div className="itemName">{this.props.name}</div>
                    <div>{this.props.numberL}x<span className="itemPrice">{this.props.price}</span></div>
                    <div className="itemSize">Size:L</div>
                </div>
                
            ]
        }

    }

    handleDropdown=()=>{
        var hidden=!this.state.hidden
        this.setState({
            hidden:hidden
        })
    }

    render() {
        return (
            <div className="navbar">
                <button type="text" className="ant-dropdown-link" onClick={this.handleDropdown}>
                    My Cart ( {this.props.sum} )
                </button>

                <div className="cartItems" hidden={this.state.hidden}>
                    <div className="item">
                        {this.getS()}
                    </div>
                    <div className="item">
                        {this.getM()}
                    </div>
                    <div className="item">
                        {this.getL()}
                    </div>
                    {/* <div>
                    <img width={100} src={this.props.url}/>
                        <div>{this.props.numberM}x{this.props.price}</div>
                        <div>Size:M</div>
                    </div>
                    <div>
                    <img width={100} src={this.props.url}/>
                        <div>{this.props.numberL}x{this.props.price}</div>
                        <div>Size:L</div>  
                    </div> */}
                </div>

            </div>
        );
    }
}

export default Nav;