import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/styles'

const useStyles = ({
    typographyStyles: {
        flex: 1
    },
    buttonColor: {
        color: 'white'
    }
})

export class Header extends Component {
    render() {
        const { classes } = this.props
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography className={classes.typographyStyles}>Product Showcase</Typography>
                    <IconButton>
                        <StorefrontRoundedIcon className={classes.buttonColor}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(useStyles)(Header)
