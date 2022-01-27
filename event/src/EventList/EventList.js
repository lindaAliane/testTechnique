import React, {Component} from "react";
import EventForm from "./EventForm";

const api_url = 'http://localhost:3000/api/v1/events'

class EventList extends Component {
constructor(props){
    super(props)
    this.state ={
        items: []
    }
    // get the items from the api
}

componentDidMount (){
this.getTasks();
}

getTasks(){
 fetch(api_url)
 .then(response => response.json())
 .then(response_items => {
this.setState ({
    items: response_items
})

 })
}

render() {
    return(
        <div>
        <ul>
        
        <ul>
<li>event 1</li>
<li>event 2</li>

        </ul>
        </ul>
        </div>
        )
    }
}
export default EventList;