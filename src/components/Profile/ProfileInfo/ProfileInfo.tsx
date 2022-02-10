import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img_content}
                     src={'https://images.wallpaperscraft.ru/image/single/krasivyj_pejzazh_gory_ozero_priroda_93318_1600x900.jpg'}
                     alt={'img_content'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;