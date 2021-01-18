import React, { useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

     const activeMode = () => {
        setEditMode(true)
    }

    const deactiveMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
            setStatus (e.currentTarget.value)

    }

        return (
            <div>
                {!editMode ?
                    <div> <b> Status : </b><span onDoubleClick={activeMode}>{props.status || "----------"}</span></div>
                    : <div><input onChange={onChangeStatus} autoFocus={true} onBlur={deactiveMode}
                                  value={status}/></div>
                }
            </div>
        );
    }


export default ProfileStatusWithHook;