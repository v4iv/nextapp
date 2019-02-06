import React from 'react'
import Link from 'next/link';

const HomePage = props => {
    return (
        <div>
            Hello, World!
            <br/>
            <Link href='/stars'><a>Stars</a></Link>
        </div>
    );
}

export default HomePage
