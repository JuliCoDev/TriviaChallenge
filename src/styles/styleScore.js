import Score from './2203.gif'

export const styleScore  ={
    container :{
        backgroundColor : '#fffffff5',
        padding :'10px',
        borderRadius : '40%'
    },
    scoreContainer:{
        minWidth : '350px',
        margin : 'auto'        
    } ,
    score:{        
        top: '30%',
        height : '200px',
        width : '200px',
        borderRadius :'100%',       
        backgroundImage: `url(${Score})`,
        color : 'rgb(10 5 90)',
        fontSize: '1.5em',
        margin : 'auto'
        
    },
    titleScore :{
        marginTop : '40%',
        display : 'inline-block'
    },
    containerQuestion:{
        display:'inline-block',
        width : '40%',
        minWidth :'350px',
        margin : 'auto',
        overflowWrap: 'break-word',
        textAlign : 'left'
    },
    playAgainConatier:{
        minWidth : '350px',
        margin : 'auto'
    },
    playAgain:{
        top: '30%',
        height : '200px',
        width : '200px',
        borderRadius :'100%',       
        backgroundColor : 'rgb(151 149 255 / 71%)',
        color : 'rgb(10 5 90)',
        fontSize: '1.5em'       
    },
    answers:{
        display:'inline-block',
        width:'10%'
    },
    question:{
        display:'inline-block',
        width:'90%'    
    }  
}    