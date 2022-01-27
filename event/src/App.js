import logo from './logo.svg';
import './App.css';
import EventList from './EventList/EventList';
import EventForm from './EventList/EventForm';
import Typography from "@material-ui/core/Typography";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Typography variant="h3"> Liste des evenements </Typography>
       <hr/>
       <p>form area</p>
       <EventList />


    

      </header>
    </div>
  );
}

export default App;
