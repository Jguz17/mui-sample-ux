import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'

export class Main extends Component {
    render() {
        return (
            <div>
                <Grid container direction='column'>
                    <Grid item>
                        <Header/>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={0} sm={2}/>
                        <Grid item xs={12} sm={8}>
                            this is where content will be this is where content will be this is where content will be
                            this is where content will be this is where content will be this is where content will be
                        </Grid>
                        <Grid item xs={0} sm={2}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Main