import React from 'react';
import { NavLink } from 'react-router-dom';

const NotesList = props => {
        return (
            <div className='list-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='notes-section'>
                    <h3 className='notes-title'>Your Notes:</h3>
                    {props.notesList.map((eachNote) => {
                        return (
                            <div key={eachNote._id} className='each-note'>
                                <h4 className='each-note-title'>{eachNote.title}</h4>
                                <p>{eachNote.textBody}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
}
export default NotesList;