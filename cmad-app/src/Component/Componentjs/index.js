import React from 'react'
import SignIn from './Sign-In';
import '../ComponenetCss/index.css'

class MainPage extends React.Component{
    state = {
        LogIn : '',
        PlaceHolder:''
    }
    SignInPage = (NextPage,b) => {
        this.setState({
            LogIn:NextPage,
            PlaceHolder:b 
        })

    }



    render(){ 
        let changePage  = null
        if( this.state.LogIn === 'Admin' || this.state.LogIn === 'Student'){

                 changePage = <SignIn placeHolder = {this.state.PlaceHolder} SignIn ={this.state.LogIn} />
                 
                }
 

        
        return(
            <div>
                <input type = 'button' value  = 'Admin' onClick = {()=>this.SignInPage('Admin','Admin ID')}/>
                <input type = 'button' value =  'Student' onClick = {()=> this.SignInPage( 'Student','Student ID')}/>
                {changePage}
            </div>
        )
    }
}
export default MainPage
















































