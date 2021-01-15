import React from 'react'
import Axios from 'axios'

import {
    Navbar,
    Nav,
    Button,
    Dropdown
    // Image,
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Navigation extends React.Component {

    componentDidMount () {
        Axios.get(`http://localhost:2000/products`)
        .then((res) => {
          console.log(res.data[0])
        })
        .catch((err) => console.log(err))
      }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Inventory</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Total Product <a href="#login"></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation