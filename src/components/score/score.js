import React  from 'react';
import {styleScore} from './../../styles/styleScore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Score = (props) =>{
    const response = props.answers.split(',');
    const score =  props.questions.filter((item , index)=>(response[index] === item.correct_answer))    
    return(
        <Grid style={styleScore.container} container spacing={1}>
            <Grid item xs={4} style={styleScore.scoreContainer}>
                <div style={styleScore.score}>
                    <h3 style={styleScore.titleScore}>
                        {`SCORE ${score.length} / 10`}
                    </h3>
                </div>
            </Grid>
            <Grid item xs={4} style={styleScore.containerQuestion}>
            {
                props.questions.map((item , index) =>{
                    return(
                        <Grid key={index} container spacing={1}
                            style={{
                                backgroundColor : (response[index] === item.correct_answer) ? '#0bad0061' : '#ff5050d9',
                                marginBottom : '10px',                      
                                borderRadius : '10px',
                                paddingLeft :'10px'
                            }}                    
                        >
                            <Grid item xs={1}>
                                <span>
                                    {(response[index] === item.correct_answer) ? '+' : '-'}
                                </span>
                            </Grid>
                            <Grid item xs={11}>
                                <span>
                                    {item.question}
                                </span>
                            </Grid>
                        </Grid>
                    )
                })
            }                                   
            </Grid>
            <Grid item xs={4} style={styleScore.playAgainConatier}>
                <Button href='/home' style={styleScore.playAgain}>
                    PLAY AGAIN?
                </Button>
            </Grid>
        </Grid>
    )    
}