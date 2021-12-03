import { Component } from "react";

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            email: '',
            profile: '',
        }
    }

    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="Name" />
                <br />
                <input type="text" className="input" placeholder="Position" />
                <br />
                <input type="text" className="input" placeholder="Email" />
                <br />
                <textarea name="" id="" cols="20" rows="5" placeholder="Profile"></textarea>
            </div>
        )
    }
}

export default Information;