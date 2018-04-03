import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import { connect } from 'react-redux';
import './App.css';
import { getAllNotes } from '../../actions';

import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    const props = this.props;
    console.log('App props', this.props)
    return (
      <div className="App">
        <Sidebar />
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/users'>Register</Link>
        </div>
        <div className="Notes-Section">
          <header>Your Notes: </header>
          <div className="Notes-Container">
            {props.state.notes.map((note, index) => <NotesList id={index} note={note}/>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { getAllNotes })(App);
