import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDiscription] = useState('');


    const handleChange = (e) =>{

        const {name, value} = e.target

        if(name === 'taskName'){
            setTaskName(value)
        }else {
            setDiscription(value)
        }

    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDiscription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }
    

    return(
        <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text"  className="form-control" value = {taskName} onChange={handleChange} name='taskName' />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea rows="5" className="form-control" value = {description} onChange={handleChange} name='description'></textarea>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                    <Button  color="primary" onClick={handleUpdate}>Update</Button>{' '}
                    <Button color='secondary' onClick={toggle}> Cancel
                    </Button>
                    </ModalFooter>
                </Modal>
        </div>
    );
}

export default EditTask;