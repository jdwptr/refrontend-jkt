import React from 'react'

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
            <Navbar>
                <Navbar.Brand href="#home">INVENTORY</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Total PRODUCT <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation