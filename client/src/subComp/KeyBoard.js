import React, {Component} from 'react';
import {Button} from 'reactstrap';


class KeyBoard extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstRowA :[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, './images/back.png'],
            firstRowB : ['!', '@', '#', '$', '%',  '&', '-', '+',  '*', '?', '../images/back.png'],
            secondRowA : ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            secondRowB : ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            thirdRowA : ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            thirdRowB : ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            fourthRowA : ['./images/shift.png', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
            fourthRowB : ['./images/shift.png', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'],
            isCaps:false,
            isSymbol:false
        }
    }

    allSymbol = () => {
        this.setState({
            isSymbol:!this.state.isSymbol
        })
    }

    allCaps = () => {
        this.setState({
            isCaps:!this.state.isCaps
        })
    }

    render(){
        return(
            <div className="KeybaordWrapper">
                    {
                        this.state.isSymbol ? 

                        <ul className="keyRow first">                    
                            {
                                this.state.firstRowB.map((e, index) =>
                                    index === 10 ?
                                    <li key={index}>
                                        <Button name='clear' color="link" className="keyButton">
                                            <img src={e} alt=''/></Button>
                                    </li>

                                    :
                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                    </li>
                            )}
                        </ul>

                        :

                        <ul className="keyRow first">                    
                            {
                                this.state.firstRowA.map((e, index) =>
                                    typeof(e) != "string" ?

                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                    </li>                                    

                                    :                                   

                                    <li key={index}>
                                    <Button name='clear' color="link" className="keyButton">
                                        <img src={e} alt=''/></Button>
                                    </li>
                            )}
                        </ul>
                    }

                    {
                        this.state.isCaps ? 

                        <>

                        <ul className="keyRow second">
                            {
                                this.state.secondRowB.map((e, index) =>                        
                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                    </li>
                            )
                            }
                        </ul>

                        <ul className="keyRow third">
                            {
                                this.state.thirdRowB.map((e, index) =>                        
                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                    </li>
                            )
                            }
                        </ul>

                        <ul className="keyRow fourth">
                            {
                                this.state.fourthRowB.map((e, index) =>                        
                                    index !== 0 ?
                                    <li key={index}>
                                        <Button name={e } color="link" className="keyButton">
                                            {e}</Button></li>
                                    :
                                    <li key={index}>
                                    <Button name='caps' onClick={this.allCaps} color="link" 
                                    className={this.state.isCaps ? 'keyButton active' : 'keyButton'}>
                                    <img src={e} alt=''/></Button></li>
                            )
                            }
                        </ul>
                        </>

                        :
                        <>
                        <ul className="keyRow second">
                            {
                                this.state.secondRowA.map((e, index) =>                        
                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                </li>
                            )}
                        </ul>

                        <ul className="keyRow third">
                            {
                                this.state.thirdRowA.map((e, index) =>                        
                                    <li key={index}>
                                        <Button name={e} color="link" className="keyButton">
                                        {e}</Button>
                                    </li>
                            )}
                        </ul>

                        <ul className="keyRow fourth">
                            {
                                this.state.fourthRowA.map((e, index) =>                        
                                    index !== 0 ?
                                    <li key={index}>
                                        <Button name={e } color="link" className="keyButton">
                                            {e}</Button></li>
                                    :
                                    <li key={index}>
                                    <Button name='caps' onClick={this.allCaps} color="link" 
                                    className={this.state.isCaps ? 'keyButton active' : 'keyButton'}>
                                    <img src={e} alt=''/></Button></li>
                            )}
                        </ul>
                        </>
                    }

                    <ul className="keyRow fifth">
                        <li><Button name='back' color="link" className="keyButton" type="button">
                                Back</Button></li>
                            <li><Button name='back' color="link" className="keyButton" type="button">
                            Space</Button></li>
                            <li><Button name='back' color="link" type="button"
                            className={this.state.isSymbol ? 'active keyButton' : 'keyButton'} 
                                onClick={this.allSymbol}>
                            .?!&amp;</Button></li>
                    </ul>
            </div>
        )
    }

}

export default KeyBoard;