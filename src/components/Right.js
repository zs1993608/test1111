import React, { Component } from 'react';

import './Right.css'

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Classic Tee',
            price:'$75.00',
            size:'',
            numberS:0,
            numberM:0,
            numberL:0,
            sum:0,
        }
    }

    onButtonClick=(size)=>{
        
        // var sum = this.state.sum+1
        this.setState({
            size:size,
            // sum:sum
        })
        
    }

    addToCart=()=>{
        var number = this.state.number+1
        this.setState({
            number:number,
        })
    }

    addData=()=>{
        let sum = this.state.sum+1
        let numberS = this.state.numberS
        let numberM = this.state.numberM
        let numberL = this.state.numberL
        this.setState({
            sum:sum,
        })

        if(this.state.size=='S'){
            numberS = this.state.numberS+1
            this.setState({
                numberS:numberS
            })
        }
        else if(this.state.size=='M'){
            numberM = this.state.numberM+1
            this.setState({
                numberM:numberM
            })
        }
        else if(this.state.size=='L'){
            numberL = this.state.numberL+1
            this.setState({
                numberL:numberL
            })
        }
        this.props.getData(this.state.name,this.state.price,sum,numberS,numberM,numberL,this.state.size)
    }
  

    render() {
        return (
            <div>
                {/* <RightDocs title={this.state.name} price={this.state.price}/>
                <AddToCart/> */}
                 {/* <div className="leftPictures">
                {/* <Image width={600} src={pic}/> */}
                {/* <img alt="Developer-Test-Minicart-Size-Click" src="https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/files/221745405.png?x-amz-meta-iv=4&amp;response-cache-control=max-age%3D2419200&amp;x-amz-meta-ck=daee10707631a9a3504f6cf055e0eb9a&amp;AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&amp;Expires=1606780800&amp;Signature=vWZVxw%2F5MW1ICyTu7w3UkCbWHFE%3D" height="731" width="1440" decoding="sync"> */}
            {/* </div> */} 


                <div className="title">
                    {this.state.name}
                </div>

                <div class="DividingLine"></div>

                <div className="price">
                    {this.state.price}
                </div>

                <div class="DividingLine"></div>

                <div className="text">
                    <p>
                        Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra
                        sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, 
                        consectetur adipiscing slit. Haec et tu ita posuistim, et verba vestra sunt. Quod
                        autem ratione actum est, id officium appellamus
                    </p>
                </div>

                <div className="size">
                    SIZE<span>*</span> <span className="sizec">{this.state.size}</span>
                </div>

                <div className="buttons">
                    <button id='1' onClick={()=>this.onButtonClick('S')}>S</button>
                    <button id='2' onClick={()=>this.onButtonClick('M')}>M</button>
                    <button id='3' onClick={()=>this.onButtonClick('L')}>L</button>
                </div>

                <button className="addToCart" onClick={this.addData}>ADD TO CART</button>
                {/* {this.state.sum}numbers:{this.state.numberS}numberM:{this.state.numberM}numberL:{this.state.numberL} */}

            </div>
        );
    }
}

export default Right;