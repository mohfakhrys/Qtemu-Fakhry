import React,{Component} from 'react'

class JoinUs extends Component{
    render(){
        return(
            <div>
                <form>
                <h3 className="mt-2"><center>Want Joint Meet Up</center></h3>
                <div className="form-group ml-3 mr-3">
                    <label for="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
                    </input>
                </div>
                <div className="form-group ml-3 mr-3">
                    <label for="inputAddress">address</label>
                    <input type="Address" className="form-control" id="inputAddress" placeholder="Address">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary mt-3 ml-3">Submit</button>
                <button type="cencel" className="btn btn-danger ml-2 mt-3" >Cancel</button>
             </form>
             <h1 className="mt-3"><center>who will be joined</center></h1>
            </div>
        );
    }
}

export default JoinUs;