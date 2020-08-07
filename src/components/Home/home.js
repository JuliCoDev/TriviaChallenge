import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {styles} from './../../styles/styleHome';

export const Home = () =>{
    return(
        <Grid container spacing={1} style={styles.styleContainer}>  
            <Grid container spacing={1}>                                    
                <Typography  style={styles.styleTitle} variant="h2" component="h2">
                    Welcome to the Trivia Challenge!
                </Typography>                
                <Typography style={styles.styleTitle} variant="h3" component="h3">
                    You will be presented with 10 True or False questions
                </Typography>
                <Typography style={styles.styleTitle} variant="h4" component="h4">
                    Can you score 100%?
                </Typography>            
            </Grid>
            <Button style ={styles.begin} variant="contained" href="/questions" color="primary">
                BEGIN
            </Button>
        </Grid>
    )
}
