import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Image } from 'antd';

import './Main.css'
import Nav from '../../components/nav/Nav'
import Right from '../../components/Right'
import pic from '../../assets/pictures/1.jpg'


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            url:'https://cdn.shopify.com/s/files/1/0079/7379/7935/products/efee92_2c06eac7689d4221b03b1fc8c748c7d7_mv2_d_1800_1795_s_2_1024x1024@2x.jpg?v=1558913950',
            name:'',
            price:'',
            sum:0,
            size:'',
            numberS:0,
            numberM:0,
            numberL:0,

        }
    }


    getData=(name,price,sum,numberS,numberM,numberL,size)=>{
        this.setState({
            name:name,
            price:price,
            sum:sum,
            size:size,
            numberS:numberS,
            numberM:numberM,
            numberL:numberL,
        })
    }

    render() {
        return (
            <div>
                
                <div className="container">
                    <Nav url={this.state.url} size={this.state.size} name={this.state.name} price={this.state.price} sum={this.state.sum} numberS={this.state.numberS} numberM={this.state.numberM} numberL={this.state.numberL} />
                    <div className="body">
                        <div className="www"><Image width={400} src={pic}/></div>

                            

                            <Right className="ww" getData={this.getData}/>

                    
                    {/* {this.state.sum} */}
                    {/* {this.state.name},{this.state.price},sum:{this.state.sum},numberS:{this.state.numberS},numberM:{this.state.numberM},numberL:{this.state.numberL},{this.state.size} */}
                </div>
                </div>
                
            </div>


        );
    }
}

export default Main;