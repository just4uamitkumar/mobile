import React, {Component} from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Button } from 'reactstrap';

class NumKey extends Component{

    constructor(){
        super();

        this.state = {
            numList : [1, 2, 3, 4, 5, 6, 7, 8, 9,  0 , <FaRegTimesCircle/>]
        }
    }

    render(){

        return(
            <div className="numKey">
                <div className="keyWrap">
                    <ul>
                        {
                            this.state.numList.map((e, index) => 

                                typeof(e) === 'object' ?
                                <li key={index}><Button name={e} color="secondary" type="button"
                                    onClick={this.props.clearInput}>{e}</Button>
                                </li>
                                :

                                <li key={index}><Button name={e} color="info" type="button" 
                                    onClick={this.props.numClick}>{e}</Button>
                                </li>
                                
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}



export default NumKey;