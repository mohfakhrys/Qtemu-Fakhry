import React, { Component } from 'react';
import axios from 'axios';

class NextMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.state.filterText="";
  }
  componentDidMount() {
    axios
      .get("https://swapi.co/api/people")
      .then(response => this.setState({ people: response.data.results }));
  }

  render() {
    const {nextM0, nextM1, nextM2, nextM3, nextM4,
          nextM5, nextM6, nextM7, nextM8, nextM9, }=this.props;
    const{people}=this.state
    let filterByHeight = people.length !== 0 ?
        people.filter(data=>{
            return data.height >= 150
        })
        :
        []

    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{nextM0}</h5>
        <div className="next-meetup border p-3 m-3">
          <p className="font-weight-bold">{nextM1}</p>
          <p className="text-black-50">{nextM2}</p>
          <p>
            {nextM3}<br/>
            {nextM4}<br/>
            {nextM5}<br/>
            {nextM6}<br/>
            <br/>
            {nextM7}<br/>
            <br/>
            {nextM8}
            <br/>
            <br/>
            {nextM9}
            <br/>
            {
            filterByHeight.length !== 0 ?
                filterByHeight.map(result => {
                    return (
                    <React.Fragment key={result.name}>
                        <span className= "spacing=10dp">              
                          {result.name},
                        </span>
                    </React.Fragment>
                    )
                })
            :
            <h5>wait......</h5>
            }
            </p>
        </div>
      </div>
    );
  }
}

export default NextMeetup;
