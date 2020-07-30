import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export class Header extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography>This is my header</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
