import React from 'react'
import { getMemes } from '../services/Api'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Meme from './Meme'

const Memes = () => {
    const [memes, setMemes] = useState([])
    useEffect(() => {
        const getData = async () => {
            let response = await getMemes();
            console.log(response.data.children)
            setMemes(response.data.children);
        }

        getData();
    }, [])

    console.log(memes)
    return (
        <Grid container margin={3}>
        {
            memes.map((meme) =>{
                return(
                <Grid item xs={2}> 
                    <Meme props={meme} /> 
                </Grid>)
            })
        }
        </Grid>
    )
}

export default Memes