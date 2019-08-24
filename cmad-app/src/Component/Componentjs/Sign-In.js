import React from 'react' 
import '../ComponenetCss/AdminLogIn.css'
class SignIn extends React.Component{
    state = {
    UserId : '',
    Password : ''
    }
    getSignInData = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
            })
         }
         CheckID = () =>{
             if(this.props.SignIn == 'Admin' && this.state.UserId == 'Aun' && this.state.Password == '123456'){
                 console.log('welcome Admin')
             }
             else if(this.props.SignIn == 'Student' && this.state.UserId == 'Aun' && this.state.Password == '123456' ){
                 console.log('welcome Student')
             }
             else{
                 console.log('wrong ID or Password')
             }
         }
  
    
    render(){
             
        return(
                <div className = 'AdminLoginInput'>
                

                    <input   name = 'UserId' type = 'text' placeholder = {this.props.placeHolder}  onChange = {(event)=>this.getSignInData(event)}/><br/>
                    <input   name = 'Password' type = 'text' placeholder = 'Password'  onChange = {(event)=>this.getSignInData(event)}/><br/>
                    <input type = 'button' value = 'SignIn' onClick = {this.CheckID} />
                </div>
        )
    }
}
export default SignIn





