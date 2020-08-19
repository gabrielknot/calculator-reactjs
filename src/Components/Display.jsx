import React from 'react'
import './Display.css'
import Aimation from './Test'
export default props=>{
    const decimal=num=>{
        try{    
            const decimal=parseInt(/^[0-9]*?(?:[\.,])([0-9]*?)$/g.exec(num.toString())[1])
            if(isNaN(decimal)){
                return('.')
            }else{
                return('.'+decimal)
            }
        }catch(e){
            return('')
        }
    }
    return(
    <div className='display'><Aimation duration={1} value={parseFloat(props.value)}/>{decimal(props.value)}</div>
    )
}