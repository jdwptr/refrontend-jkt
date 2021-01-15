import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { ADMIN } from '../action'

import {
    Table,
    Button
} from 'react-bootstrap'

class TableProd extends React.Component {

    componentDidMount() {
        Axios.get(`http://localhost:2000/products`)
            .then((res) => {
                console.log(res.data)
                this.setState({produk: res.data})
            })
            .catch((err) => console.log(err))
    }

    render() {
        const {produk} = this.state

        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Serial</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produk.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.name}</td>
                                    <td>{item.serial}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button>EDIT</Button>
                                        <Button>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        date: state.user.date,
        name: state.user.name,
        serial: state.user.serial,
        stock: state.user.stock,
        price: state.user.price
    }
}

export default connect(mapStateToProps, { ADMIN })(TableProd)