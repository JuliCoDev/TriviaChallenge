import React from 'react';
import {Score} from './../score/score';
import {stylesQuestion} from './../../styles/styleQuestions';
import CircularProgress from '@material-ui/core/CircularProgress';

export class Questions extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            questions:[],
            loading : true,
            item : 0,
            result : '',            
        }
    }

    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then(response => response.json())
            .then(questionJson => this.setState ({questions : questionJson.results , loading : false}))
    }

    sendResponse(res){
        if(res){
            document.getElementById(`${res}`).checked=false;
            this.setState({result : this.state.result + `${res},` , item : this.state.item+1})
        }        
    }

    render(){

        if(this.state.loading){
            return <CircularProgress style={{margin :'auto'}}/>
        }

        const {questions , item ,result } = this.state;
        
        if(item < questions.length){
            return(
                <div style={stylesQuestion.container}>
                    <div>
                         <h1 style={stylesQuestion.categoryTitle}>{questions[item].category}</h1>
                         <div style={{padding : '10px'}}>
                             <h3 style={stylesQuestion.question}>{questions[item].question}</h3>
                             <div style={stylesQuestion.answerContainer}  >           
                                <label style={stylesQuestion.answer}>                      
                                    <input  type='radio' id='True' onClick={this.sendResponse.bind(this, 'True')} />
                                    True
                                </label>
                             </div>
                             <div style={stylesQuestion.answerContainer}>                                                                 
                                <label style={stylesQuestion.answer}>
                                    <input type='radio' id='False' onClick={this.sendResponse.bind(this, 'False')}/>
                                    False
                                </label>
                             </div>
                         </div>
                    </div>
                    <div style={stylesQuestion.footer}>
                         <span>{`${item+1} - ${questions.length}`}</span>
                    </div>
                </div>              
             )
        } 
        
        return(<Score answers={result} questions={questions}/>)
    }
}

