import { useState, useEffect } from 'react'
import '../../App.css';
import Examples from './Examples'

const ExamplesContainer = () =>{

 const [ randomGaps, setRandomGaps]=useState([])


    const generateRandomConvertions = () => {
        let randomConvertions = [];     
        for(let i=0; i<5; i++) {
            console.log("hola");
            let randomDecimal = parseInt(Math.random() * 1000, 10);
            let randomBinAndGap = calculateBinaryGap(randomDecimal)
            randomConvertions.push({
                decimal: randomDecimal,
                bin: randomBinAndGap.bin,
                gap: randomBinAndGap.gap 
            });
        }    
        console.log(randomConvertions)
        return setRandomGaps(randomConvertions);
      };

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
    return {bin, gap};
  }

  
 useEffect(() => {
     generateRandomConvertions()
    }
 , []);

    return randomGaps 
            && <Examples 
                randomGaps={randomGaps}
                generateRandomConvertions={generateRandomConvertions}
                />

}

export default ExamplesContainer;

