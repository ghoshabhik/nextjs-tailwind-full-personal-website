import {useTheme} from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '../../firebase/useUser'

export default function NavBar({currentMode}) {
    const {theme, setTheme} = useTheme()
    const [currentTheme, setCurrentTheme] = useState('light')
    const { user, logout } = useUser()


    return (
        <div className={currentMode === 'close' ? "bg-gray-300 dark:bg-gray-700 w-64 h-full py-10 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out z-50" : 
        "bg-gray-300 dark:bg-gray-700 w-64 h-full py-10 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-50"
        }>
            <Link href='/' passHref>
                <a className="cursor-pointer flex items-center text-2xl font-bold mb-20 p-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded">
                <svg fill="currentColor"  height="30px" version="1.1" 
                viewBox="0 0 48 48" width="30px" >
                <g id="Expanded"><g><g><path d="M35,48H11c-0.528,0-0.965-0.41-0.998-0.938l-2-32c-0.017-0.275,0.08-0.546,0.269-0.747S8.724,14,9,14h28     c0.276,0,0.54,0.114,0.729,0.315s0.286,0.472,0.269,0.747l-2,32C35.965,47.59,35.528,48,35,48z M11.939,46h22.121l1.875-30     H10.064L11.939,46z"/></g><g><path d="M39,16H7c-0.552,0-1-0.447-1-1V7c0-0.553,0.448-1,1-1h32c0.552,0,1,0.447,1,1v8C40,15.553,39.552,16,39,16z M8,14h30V8H8     V14z"/></g><g><path d="M37.02,8C37.014,7.999,37.007,8,37,8H9C8.679,8,8.377,7.846,8.189,7.585S7.95,6.988,8.051,6.684l2-6     C10.188,0.275,10.569,0,11,0h24c0.431,0,0.812,0.275,0.949,0.684l1.94,5.821C37.972,6.651,38.02,6.82,38.02,7     C38.02,7.553,37.572,8,37.02,8z M10.387,6h25.226l-1.333-4H11.721L10.387,6z"/></g><g><path d="M36.5,24h-27c-0.552,0-1-0.447-1-1s0.448-1,1-1h27c0.552,0,1,0.447,1,1S37.052,24,36.5,24z"/></g><g><rect height="2" width="25.5" x="10.25" y="34"/></g><g><path d="M26,30h-6c-0.552,0-1-0.447-1-1s0.448-1,1-1h6c0.552,0,1,0.447,1,1S26.552,30,26,30z"/></g></g></g>
                </svg>
                {'${abhik.ghosh}'}
                </a>
            </Link>
            
            <nav className="flex flex-col justify-between"> 
            
            <ul className="space-y-1">
                <li>
                {user ? <div className="bg-gray-100 dark:bg-gray-800 px-3 py-4 block text-xl font-bold"> Welcome {user.name}</div> : <></>}
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/project' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href='/snippet' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Snippets</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Photography</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' passHref>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">My Stats</a>
                    </Link>
                </li>
                {user ? <li>
                    <div className="flex-1 text-red-500" onClick={() => logout()}>
                        <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Logout</a>
                    </div>
                </li> :
                <li>
                <Link href='/auth' passHref>
                    <a className="cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 rounded px-3 py-4 block">Login</a>
                </Link>
            </li>
                }
            </ul>
                      
            </nav>
            <div className="bg-gray-100 dark:bg-gray-800 rounded px-3 my-10 flex items-center space-x-3">
                <button onClick={() => { 
                setTheme(theme === 'dark' ? 'light' : 'dark')
                setCurrentTheme(theme === 'dark' ? 'light' : 'dark')
                }}
                className="my-5"
                >{currentTheme === 'dark' ? <div className="flex space-x-4">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="ml-4"> Switch to light mode</span>
                </div> : 
                <div className="flex space-x-5">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span className="ml-4">Switch to dark mode</span>
                </div> } 
                </button>
            </div>
        </div>
    )
}

