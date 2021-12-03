import { Component } from "react";
import Information from './Components/generalInfo';
import Education from './Components/educationXP';
import Work from './Components/workXP';

class App extends Component {
  render() {
    return (
      <div className="App">

        <section id="input">

          <h2 className="section-title">Personal Information</h2>
          <Information />

          <h2 className="section-title">Education</h2>
          <Education />

          <h2 className="section-title">Work Experience</h2>
          <Work />

        </section>

        <section className="output">

          

        </section>

      </div>
    );
  }
  
}

export default App;
