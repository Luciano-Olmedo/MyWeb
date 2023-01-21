import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);

  }


  return (
    <header className='flex justify-between px-5 py-2 bg-violet-800  text-white sticky top-0 '>
      <a href="/" className="logo text-2xl font-bold">Luciano</a>
      {/* navegacion estandar  */}
      <nav className=' hidden md:block  '>
        <ul className='flex '>
          <li><a href='#About'>About</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Contact'>Contact</a></li>
          <li><a href='#Resume'>Resume</a></li>
        </ul>
      </nav>
      {/* navegacion Mobile */}
      <nav className={!toggle
        ? "mobile-nav left-[-100%] "
        : "mobile-nav left-0"
      }>
        <ul className='flex  flex-col'>
          <li><a href='#About'>About</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Contact'>Contact</a></li>
          <li><a href='#Resume'>Resume</a></li>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {
          toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
        }

      </button>

    </header>
  )
}

export default Header