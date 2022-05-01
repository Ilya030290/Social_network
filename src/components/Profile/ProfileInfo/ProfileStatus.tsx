import React, {useState} from 'react';
import s from './ProfileStatus.module.css';
import {Input} from "@mui/material";


type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({status}) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    const onChangeEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <div className={s.profileStatus}>
            {!editMode
                ? <div>
                    <span className={s.status}>My status:</span>
                    <span className={s.statusText} onDoubleClick={onChangeEditMode}>{status}</span>
                </div>
                : <div>
                    <Input defaultValue={""}
                           onBlur={onChangeEditMode}
                           autoFocus={true}
                    />
                </div>
            }

        </div>
    );
};

