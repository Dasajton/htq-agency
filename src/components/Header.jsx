import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuLink from './MenuLink'
import DropDownLink from './DropDownLink'

const Header = () => {
    const links = [
        { path: '/about-us', label: 'Über Uns' },
        { path: '/services', label: 'Unser Service' },
        { path: '/cooperation', label: 'Kooperation' },
        { path: '/contact', label: 'Kontakt' },
    ]
    // Toggle Dropdown Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Close Dropdown Menu on Window Resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isMenuOpen])

    return (
        <>
            <nav className="navbar w-[100vw] h-[5rem] bg-white px-4 flex justify-between items-center shadow-sm shadow-blue-600 fixed top-0">
                <Link to="/">
                    <span className="logo text-5xl font-bold text-black">
                        HT
                        <span className="text-5xl font-bold text-blue-600">
                            Q
                        </span>
                    </span>
                </Link>
                <ul className="navbar-list hidden gap-6 text-xl md:flex md:items-center">
                    {links.map((link, index) => (
                        <MenuLink key={index} to={link.path}>
                            {link.label}
                        </MenuLink>
                    ))}
                </ul>
                <button
                    className="dropdown-btn md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <img
                            src="/icons/close-icon.svg"
                            alt="Close Menu"
                            className="close-menu"
                        />
                    ) : (
                        <img
                            src="/icons/burger-icon.svg"
                            alt="Burger Menu"
                            className="burger-menu"
                        />
                    )}
                </button>
                {isMenuOpen && (
                    <div className="dropdown-menu flex flex-col items-center justify-evenly bg-blue-600 border border-blue-700 rounded shadow-sm shadow-blue-700 mx-auto py-2 w-3/4 h-[32rem] absolute z-50 top-24 right-0 left-0 overflow-y-auto">
                        {links.map((link, index) => (
                            <DropDownLink
                                key={index}
                                toggleMenu={toggleMenu}
                                to={link.path}
                            >
                                {link.label}
                            </DropDownLink>
                        ))}
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header
