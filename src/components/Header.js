import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import { makeStyles, withStyles } from '@material-ui/styles'

const useStyles = ({
    typographyStyles: {
        flex: 1
    }
})

export class Header extends Component {
    render() {
        const { classes } = this.props
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography className={classes.typographyStyles}>This is my header</Typography>
                    <StorefrontRoundedIcon/>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(useStyles)(Header)
