import React, {useContext} from 'react'
import NoteContext from '../context/NoteContext';
const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { CurrentNote, updateNote } = props;
    return (
        <div className="col-md-12">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{CurrentNote.title}</h5> 
                        <i className="far fa-trash-alt mx-2" onClick={()=>{ console.log(CurrentNote); deleteNote(CurrentNote._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(CurrentNote)}}></i>
                    </div>
                    <p className="card-text">{CurrentNote.description}</p>
                    <p className="card-text">{CurrentNote.tag}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem