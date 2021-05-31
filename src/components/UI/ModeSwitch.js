const ModeSwitch = ({ setUserProvided }) => (
    
    <div className="mode-switch__container">
        <button className="mode-switch__button" onClick={() => setUserProvided(false)}>Examples</button>
        <button className="mode-switch__button" onClick={() => setUserProvided(true)}>Calculate</button>
    </div>
)

export default ModeSwitch;