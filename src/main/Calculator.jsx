import React,{Component} from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'

const initialState={
    displayValue:'0',
    clearDisplay:false,
    operation: null,
    values:[0,0],
    current:false
}
export default class Calculator extends Component{
    state={...initialState}
    constructor(props){
        super(props)
        this.clear=this.clear.bind(this)
        this.setOperation=this.setOperation.bind(this)
        this.addDigit=this.addDigit.bind(this)
    }

    clear(){
        this.setState({...initialState})
    }


    setOperation(operation){
        console.log(this.state.values)
        if(!this.state.current){
            this.setState({operation, current:true, clearDisplay:true})
        }else{
            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]}${this.state.operation}${values[1]}`)
            } catch(e){
                values[0] = this.state.values[0]
                
                
            }
            
            this.setState({
                displayValue:values[0],
                operation: operation === '=' ? null:operation,
                current: operation ==='=' ? false:true,
                clearDisplay: this.state.current,
                values
            })
        }
    }
    addDigit(n){
        if(n==='.' && this.state.displayValue.includes('.')){
            return;
        }
        const clearDisplay = this.state.displayValue==='0'||this.state.clearDisplay
        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue,clearDisplay: false})

        if(n!=='.'){
            const i = this.state.current ? 1:0
            const newValue=parseFloat(displayValue)
            this.state.values[i]=newValue
        }
    }
    render(){
        return(
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label='AC' click={this.clear} triple/>
                <Button label='/'click= {this.setOperation} operation/>
                <Button label='7'click= {this.addDigit}/>
                <Button label='8'click= {this.addDigit}/>
                <Button label='9'click= {this.addDigit}/>
                <Button label='*'click= {this.setOperation} operation/>
                <Button label='4'click= {this.addDigit}/>
                <Button label='5'click= {this.addDigit}/>
                <Button label='6'click= {this.addDigit}/>
                <Button label='-'click= {this.setOperation} operation/>
                <Button label='1'click= {this.addDigit}/>
                <Button label='2'click= {this.addDigit}/>
                <Button label='3'click= {this.addDigit}/>
                <Button label='+'click= {this.setOperation} operation/>
                <Button label='0'click= {this.addDigit} double/>
                <Button label='.'click= {this.addDigit}/>
                <Button label='='click= {this.setOperation} operation/>



            </div>
        )
    }
}