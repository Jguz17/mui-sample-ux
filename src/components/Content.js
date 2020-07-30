import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import SampleCard from './SampleCard'

export class Content extends Component {
    render() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard/>
                </Grid>
            </Grid>
        )
    }
}

export default Content
