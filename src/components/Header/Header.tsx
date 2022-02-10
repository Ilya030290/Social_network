import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img_header}
                 src={'https://img1.freepng.ru/20180827/zii/kisspng-logo-product-design-brand-green-kenzie-amp-apos-s-corner-spotify-logo-from-html-c-5b846bbccb6741.0860103115354049888332.jpg'}
                 alt={'logo'}/>
        </header>
    );
}

export default Header;