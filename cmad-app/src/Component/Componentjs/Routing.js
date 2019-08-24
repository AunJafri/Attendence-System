import React from 'react'  
import MainPage from './index' 
import SignIn from './Sign-In'
 class Router extends React.Component{
    //  state = {
    //      LogIn : <MainPage   ChangePage = {(a)=>this.SignInPage(a)}/>,
    //      Placeholder:''
    //  }
    //  SignInPage = ( SetPlaceholder) =>{
         
    //      this.setState({
    //         Placeholder:SetPlaceholder,
    //         LogIn:<SignIn placeHolder = {this.state.Placeholder} SignIn ={this.state.LogIn} />,
            
    //         })

    //  }
     render(){
        //  console.log(this.state.Placeholder)
        let shiftPage = <MainPage/>
        
         return(
             <div>
                 {shiftPage}
             </div>
         )
     }
 }
export default Router