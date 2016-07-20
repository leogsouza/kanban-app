import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

/*class App extends React.Component{
    
    render() {
        const {notes} = this.props;

        return (
            <div>                
                <button className="add-note" onClick={ this.addNote}>+</button>
                <Notes 
                    notes={notes} 
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote} 
                    onDelete={this.deleteNote} 
                />
            </div>
        );
    }

    addNote = () => {
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New Task'
        });        
    }

    deleteNote = (id, e) => {
        // Avoiding bubble to edit
        e.stopPropagation();

        this.props.NoteActions.delete(id);
    }

    activateNoteEdit = (id) => {
        this.props.NoteActions.update({id, editing: true});
    }

    editNote = (id, task) => {
        const {NoteActions} = this.props;

        NoteActions.update({id, task, editing: false});
    }
}*/
const App = ({LaneActions, lanes}) => {
    const addLane = () => {
        LaneActions.create({
            id: uuid.v4(),
            name: 'New Lane'
        });
    }

    return (
        <div>
            <button className="add-lane" onClick={addLane}>+</button>
            <Lanes lanes={lanes} />
        </div>
    );
};



export default connect(({lanes}) => ({
    lanes
}), {
    LaneActions
})(App)
