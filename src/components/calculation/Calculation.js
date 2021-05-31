
const Calculation = ({ handleChange,binaryGap, calculateInputsGap }) =>(

        <div className="calculation__container">
            <p className="calculation__instruction-text">   
                Please introduce a decimal number to convert it into binary and the calculate de binary gap
            </p>
            <input onChange={handleChange} className="calculation__input" />
            <button onClick={calculateInputsGap} className="calculation__button">CALCULATE</button>
            <div>
                { 
                    binaryGap && (
                        <div className="calculation__output">
                             { binaryGap !== 0 
                             && (<>
                                    <p> Binary Number : {binaryGap.binary}</p>
                                    <p> Binary Gap : {binaryGap.gap}</p>
                                </>)}
                        </div> )
                }     
                </div>
        </div>
        )

export default Calculation;