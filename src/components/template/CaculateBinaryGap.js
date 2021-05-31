
import { useState, useEffect } from 'react'
import Header from '../UI/Header'
import Quote from '../quote/Quote'
import CalculationContainer from '../calculation/CalculationContainer'
import ExamplesContainer from '../examples/ExamplesContainer'
import ModeSwitch from '../UI/ModeSwitch'

const CalculateBinaryGap = () => {

    const [ userProvided, setUserProvided ] = useState(false)

    return(
        <>          
            <Header/>
            <Quote />
            <ModeSwitch setUserProvided={setUserProvided}/>
            {
                !userProvided 
                ? <ExamplesContainer />
                : <CalculationContainer />   
            }  
        </>
    )
}

export default CalculateBinaryGap;