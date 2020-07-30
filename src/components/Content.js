import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import SampleCard from './SampleCard'
import { withStyles } from '@material-ui/styles'

const useStyles = ({
    containerStyles: {
        paddingTop: '1rem'
    }
})

export class Content extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.containerStyles} container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <SampleCard 
                    title='Headphones'
                    subtitle='$29.99'
                    avatarSrc='https://b3h2.scene7.com/is/image/BedBathandBeyond/286022568122478p?$imagePLP$&wid=256&hei=256'
                    imageSrc='https://images-na.ssl-images-amazon.com/images/I/41srzfxYpXL._AC_.jpg'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard
                        title='Alexa'
                        subtitle='$149.99'
                        avatarSrc='https://i.pinimg.com/originals/ac/15/3e/ac153e57de9eb2f26bd66de841d4091c.png'
                        imageSrc='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261cv11d.jpg'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard
                        title='Umbreon Keychain'
                        subtitle='$14.99'
                        avatarSrc='https://static.myfigurecollection.net/pics/figure/big/549265.jpg'
                        imageSrc='https://images.gameinfo.io/pokemon/256/197-00.png'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard
                        title='Macbook Pro'
                        subtitle='$399.99'
                        avatarSrc='https://lh3.googleusercontent.com/proxy/1jkcGPM0krRO44pL9LAAaqfkORx-QegC24fYi5HZeiyBn9_P8oC70vDN8FLhV9s4XEw7PnnfdjVEU0eWyCBHlKozbaSFBI2i'
                        imageSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=892&hei=820&&qlt=80&.v=1587460552755'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SampleCard
                        title='Coffee Maker'
                        subtitle='$49.99'
                        avatarSrc='https://b3h2.scene7.com/is/image/BedBathandBeyond/254631367355716p?$imagePLP$&wid=256&hei=256'
                        imageSrc='https://www.krupsusa.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjExNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2g2NC8xMzg4MDU4NTU1MTkwMi5iaW58M2ViMWQwZWY0ZmFjZTMyMjkyNWFmN2I2YjRiMmNkZDRmNmZlNDI1ZGQ2YzIxZGE3ZDExYjQxMmNlYmVjMDYzOQ'
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Content)
