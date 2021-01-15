import React from 'react'

import TableProd from '../pages/tableProd'

class Home extends React.Component {
    render () {
        return (
            <div style={styles.container}>
                {/* <h1>HOME</h1> */}
                <TableProd/>
            </div>
        )
    }
}

const styles= {
    container: {
        marginTop: '70px',
    }
}

export default Home