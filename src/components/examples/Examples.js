import '../../App.css';

const Examples = ({ randomGaps, generateRandomConvertions }) =>(
  <div className="examples__container">
    <h2 className="examples__title">Some Examples</h2>
    <p className="examples__text-card">
      Please find below some random examples of decimal numbers' binary gaps
    </p>
    <div>
      <div className="examples__random-gaps">
        { randomGaps.map( rg => <div className="examples__random-row">
                                    <div className="examples__decimal">
                                      <p>
                                        {rg.decimal}
                                      </p>
                                    </div>
                                    <div className="examples__bin">
                                      <p>
                                        {rg.bin}
                                      </p>
                                    </div>
                                    <div className="examples__gap">
                                      <p>
                                        {rg.gap}
                                      </p>
                                    </div>
                               </div>)}
      </div>
      <button className="examples__refresh-button" 
            onClick={generateRandomConvertions}>
              Refresh
      </button>
    </div>
  </div>
  )

export default Examples;