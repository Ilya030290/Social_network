import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';
import {Input} from "@mui/material";

type ProfileStatusPropsType = {
    profileStatus: string
    updateUserProfileStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({profileStatus, updateUserProfileStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(profileStatus);

    useEffect(()=>{
        if (status !== profileStatus) {
            setStatus(profileStatus);
        }
    }, [profileStatus])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserProfileStatus(status);
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let newStatus = event.currentTarget.value;
        if(newStatus) {
            setStatus(newStatus);
        }
    }

    return (
        <div className={s.profileStatus}>
            {!editMode
                ? <div>
                    <span className={s.status}>Status:</span>
                    <span className={s.statusText} onDoubleClick={activateEditMode}>{profileStatus}</span>
                </div>
                : <div>
                    <Input onBlur={deactivateEditMode}
                           autoFocus={true}
                           onChange={onChangeInputValue}
                           value={status}
                    />
                </div>
            }
        </div>
    );
};

