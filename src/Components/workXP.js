import { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            position: '',
            tasks: '',
            startDate: '',
            endDate: '',
        }
    }

    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="Company" />
                <br />
                <input type="text" className="input" placeholder="Position" />
                <br />
                <input type="text" className="input" placeholder="Main Tasks" />
                <br />
                <input type="text" className="input" placeholder="Start Date" />
                <br />
                <input type="text" className="input" placeholder="End Date" />
            </div>              
        )
    }
}

export default Work;