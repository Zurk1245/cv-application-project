import { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            program: '',
            institution: '',
            startDate: '',
            endDate: ''
        }
    }

    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="Program / Course" />
                <br />
                <input type="text" className="input" placeholder="Institution" />
                <br />
                <input type="text" className="input" placeholder="Start Date" />
                <br />
                <input type="text" className="input" placeholder="End Date" />
            </div>            
        )
    }
}

export default Education;