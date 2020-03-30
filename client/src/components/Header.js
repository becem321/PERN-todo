import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <div className="text-center mt-4 jumbotron">
            <h1 >
                PERN Todo
            </h1>
            <p>
            The PERN stack consists of PostgreSQL,
            Express, React, and Node.js.
            </p>
            </div>
        </Fragment>
    )

}


export default Header;