import { useState } from 'react'
import '../../App.css';
import Calculation from './Calculation'

const CalculationContainer = () =>{
    
  const[decimalInput, setDecimalInput]=useState(0); 
  const[binaryGap, setbinaryGap]=useState({ binary: null, gap: null }); 

  
  const calculateBinaryGap = (decimal) => {

    if(decimal){
      var bin = Math.abs(decimal).toString(2),
        gap = 0,
        partialGap;
    
    for (var i = 0; i < bin.length; i++) {
      partialGap = 0;
      while (bin[i] === "0") {
        ++partialGap && ++i;
      }
      gap = Math.max(gap, partialGap);
    }}
    console.log(bin,gap)
    return { binary: bin, gap: gap };
  }

  const calculateInputsGap = () => {
    const calculatedGap = calculateBinaryGap(decimalInput)
    setbinaryGap({ 
                binary: calculatedGap.binary, 
                gap: calculatedGap.gap 
            })
  }
 
  const handleChange=(event)=>{
    setDecimalInput(event.target.value)
    console.log(decimalInput)
  }
    return <Calculation 
            setDecimalInput={setDecimalInput}
            binaryGap={binaryGap}
            calculateInputsGap={calculateInputsGap}
            handleChange={handleChange}
            />
 
}

export default CalculationContainer;

