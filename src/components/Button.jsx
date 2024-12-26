import React from 'react'

const Button = ({id , title , leftIcon , rightIcon, classes , onClick}) => {
  return (
    <button  id = {id} className={`${classes}  w-fit z-10 rounded-full group relative px-7 py-3 bg-yellow-300 text-white overflow-hidden`}>
        {leftIcon}

        <span className='relative incline-flex font-robert-medium text-xs uppercase'>

            <div>
                {title}
            </div>

        </span>

        {rightIcon}
    </button>
    
  )
}

export default Button