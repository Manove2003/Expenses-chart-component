import image from "./images/logo.svg";
import Barchart from "./bar";
import Data from './data.json';
function App() {

  const maxvalue=Math.max(...Data.map(o => o.amount));

  return (
    <div className="App">
        <div className="container">
              <div className="box1">
                  <div className="bal">
                    <p>My Balance</p>
                    <h1>$921.48</h1>
                  </div>
                  <img src={image} alt=""/>
              </div>


              <div className="box2">
                  <p className="box2para">Spending - Last 7 days</p>
                  <div className="Dataall" style={{display:'flex',gap:'1rem',alignItems:'end'}}>
                    {Data.map( day => (
                      <Barchart  days={day.day} amount={day.amount} isGreatestBar={day.amount===maxvalue} />
                    ))}
                  </div>
                  <div className="text">
                      <div>
                        <p className="total">Total this month</p>
                        <h1 className="bigtext">$478.33</h1>
                      </div>
                      <div>
                        <h1 className="smalltext">+2.4%</h1>
                        <p className="total">from last month</p>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default App;
