import React, {ReactNode} from 'react';

type TButton = {
    children: ReactNode,
    type: 'primary' | 'secondary',
    onClick?: void
}

const Button = ({children, type = 'primary', onClick}: TButton) => {
        let style: string

    switch (type) {
        case 'secondary':
            style = 'h-10 w-fit border-2 border-green-400 bg-white  text-green-400 hover:bg-green-400 hover:text-white transition rounded-2xl text-lg px-10'
            break;
        default:
            style = 'h-10 w-fit border-2 border-green-400 bg-green-400 text-white rounded-2xl text-lg px-10 hover:bg-white transition hover:text-green-400 '
    }

    return (
        <button onClick={() => onClick} className={style}>
            {children}
        </button>
    );
};

export default Button;
