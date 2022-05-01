import React, {ChangeEvent, useState} from 'react';
import s from './ProfileStatus.module.css';
import {Input} from "@mui/material";



export const ProfileStatus = () => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('I am a human');

    const onChangeEditMode = () => {
        setEditMode(!editMode);
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let newStatus = event.currentTarget.value;
        setStatus(newStatus);
    }

    return (
        <div className={s.profileStatus}>
            {!editMode
                ? <div>
                    <span className={s.status}>My status:</span>
                    <span className={s.statusText} onDoubleClick={onChangeEditMode}>{status}</span>
                </div>
                : <div>
                    <Input onBlur={onChangeEditMode}
                           autoFocus={true}
                           onChange={onChangeInputValue}
                           value={status}
                    />
                </div>
            }

        </div>
    );
};

