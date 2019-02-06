import React, {Component, Fragment} from 'react'
import Link from 'next/link';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {stars: null, visible: false}
    }

    handleClick = async () => {
        const res = await fetch('https://api.github.com/repos/v4iv/gatsby-starter-business')
        const json = await res.json()
        this.setState({stars: json.stargazers_count, visible: true})
    }

    render() {
        return (
            <Fragment>
                Hello, World!
                <br/>
                <Link href='/stars'><a>Stars</a></Link>
                <br/>
                <br/>
                <button onClick={this.handleClick}>Click Me</button>
                <br/>
                <br/>
                {this.state.visible &&
                <div>Stars: {this.state.stars}</div>
                }
            </Fragment>
        );
    }
}

export default HomePage
