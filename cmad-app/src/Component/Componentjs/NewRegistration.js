import React from 'react' 
class StudentRegistraton extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        Registration:[],
        Name:'',
        Rollno:'',
       SelectDepartment : 'Computer System' ,
       Seat: 0  
      }
    
}
GetStudentData = (event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })

}
handleChange = (event)=>{
    this.setState({SelectDepartment:event.target.value})
    if(this.state.SelectDepartment == 'Computer System'){
        this.state.seat = 3
    }
    else if(this.state.SelectDepartment == 'Chemical Engineering'){
        this.state.seat = 4
    }
}

    OnSubmit = ()=>{
        console.log(this.state.seat)
      
        if(this.state.Registration .length <= this.state.seat && this.state.Name!=''&&this.state.Rollno!=''){
    let Arr = [...this.state.Registration];
    let obj = {
        name:this.state.Name,
        RollNo:this.state.Rollno
    }
    Arr.push(obj)
    
    this.setState({
        Registration:Arr,
        Name:'',
        Rollno:''
    })
}


}


render(){
    // console.log(this.state.Seat) 
    // console.log(this.state.Registration)

    
        // console.log(this.state.Rollno)
    return(
    <div>

        <select value = {this.state.SelectDepartment} onChange={ (event)=>this.handleChange(event)}>
      
        <option value = 'Computer System'>Computer System</option>
        <option value = 'Chemical Engineering'>Chemical Engineering</option>
        <option value = 'Electronic Engineering'>Electronic Engineering</option>
      </select><br/>
        <label>Name : </label>
        <input name = 'Name' type = 'text' value ={this.state.Name} onChange = {(event)=>this.GetStudentData(event)}/><br/>
        <label>Roll no : </label>
        <input name = 'Rollno' type = 'text' value ={this.state.Rollno} onChange={(event)=>this.GetStudentData(event)}/><br/>
        <input type = 'button'  value = 'Submit' onClick = {this.OnSubmit}/>
    </div>
    )
}

}
export default StudentRegistraton