import React from 'react'

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-b from-black to-transparent z-10"> 
        <img  className="w-32 sm:w-40 md:w-44 lg:w-48 h-auto transition-all duration-300" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix logo'/>
    </div>
  )
}

export default Header