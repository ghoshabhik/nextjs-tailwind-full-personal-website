import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'
import { useUser } from '../../firebase/useUser'

export default function TopNavigation({toggleMode, currentMode}){

    const {theme, setTheme} = useTheme()
    const { user, logout } = useUser()
    const [currentTheme, setCurrentTheme] = useState('light')
    const [navBar, setNavBar] = useState(false)
    const [currentRoute, setCurrentRoute] = useState('')
    const router = useRouter()
    
    
    useEffect(() => {
        if(router.pathname === '/'){
            setCurrentRoute('home')
        }
        if(router.pathname.includes('about')){
            setCurrentRoute('about')
        }
        if(router.pathname.includes('photography')){
            setCurrentRoute('photography')
        }
        if(router.pathname.includes('snippet')){
            setCurrentRoute('project')
        }
        if(router.pathname.includes('blog')){
            setCurrentRoute('blog')
        }
        
        const handleScroll = () => {
          if(window.scrollY > 40){
            setNavBar(true)
          } else{
            setNavBar(false)
          }
        }
    
    window.addEventListener('scroll', handleScroll)
    },[router])

    // console.log(currentRoute)

    return (
        <div className={navBar ? 'fixed top-0 w-full z-10 mx-auto backdrop-filter backdrop-blur-md' : 
        ''}>
        <div className=" border-b-2 border-gray-200 dark:border-gray-700">
            <div className="lg:w-3/5 mx-auto flex justify-between items-center">
                <div className="">
                    <Link href='/' passHref>
                        <a className="cursor-pointer flex items-center lg:text-3xl text-3xl font-light p-3">
                        <Image 
                        src="/images/site/profile1.jpg"
                        width={48}
                        height={48}
                        className="relative z-30 inline object-cover w-12 h-12 border-4 border-gray-500 rounded-full"
                        alt="Profile Picture"
                        /> 
                        </a>
                        
                    </Link>
                </div>
                <div className="flex justify-end space-x-4">
                <nav className="lg:flex justify-between items-center hidden text-lg"> 
                    <ul className="space-x-4 flex justify-between items-center">
                        <li >
                            <Link href='/' passHref>
                                <a className={currentRoute === 'home' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Home</a>
                            </Link>
                        </li>
                        <li >
                            <Link href='/snippet' passHref>
                                <a className={currentRoute === 'project' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Projects</a>
                            </Link>
                        </li>
                        <li >
                            <Link href='/blog' passHref>
                                <a className={currentRoute === 'blog' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Blog</a>
                            </Link>
                        </li>
                        <li >
                            <Link href='/photography' passHref>
                                <a className={currentRoute === 'photography' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Photography</a>
                            </Link>
                        </li>
                        <li >
                            <Link href='/about' passHref>
                                <a className={currentRoute === 'about' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Bio</a>
                            </Link>
                        </li>
                        
                        {user ? <li >
                            <div className="inline text-red-700 bg-red-200 dark:text-red-200 dark:bg-red-700 px-3 py-2 rounded" onClick={() => logout()}>
                                <a className="inline cursor-pointer">{user.name.split(" ")[0]}(Logout)</a>
                            </div>
                        </li> :
                        <li >
                        <Link href='/auth' passHref>
                            <a className="cursor-pointer">Login</a>
                        </Link>
                    </li>
                        }
                    </ul>
                        
                </nav>
                <div className="flex items-center justify-between">
                    
                    <button onClick={() => { 
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                        setCurrentTheme(theme === 'dark' ? 'light' : 'dark')
                        }}
                        className=""
                        >{currentTheme === 'dark' ? <div className="flex space-x-4">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> 
                        </div> : 
                        <div className="flex space-x-5">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg> 
                        </div> } 
                    </button>
                    <button className="p-3 focus:outline-none lg:hidden" onClick={()=> toggleMode()}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                </div>
            </div>
            <div className={`lg:w-3/5 mx-auto bg-gray-400 dark:bg-gray-600 rounded-md px-10 py-4 ${currentMode === 'close' ? 'hidden' : 'flex flex-col'}`}>
                <div className="mr-2 block lg:hidden text-center mt-3">{user ? <div className="font-semibold text-purple-700 bg-purple-200 dark:text-purple-200 dark:bg-purple-700 px-2 py-1 rounded"> Hello, {user.name}</div> : <></>}</div>
                <nav className="flex flex-col justify-between"> 
                    <ul className="space-y-3 text-center lg:text-left">
                    <li onClick={() => toggleMode('close')}>
                            <Link href='/' passHref>
                                <a className={currentRoute === 'home' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Home</a>
                            </Link>
                        </li>
                        <li onClick={() => toggleMode('close')}>
                            <Link href='/snippet' passHref>
                                <a className={currentRoute === 'project' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Projects</a>
                            </Link>
                        </li>
                        <li onClick={() => toggleMode('close')}>
                            <Link href='/blog' passHref>
                                <a className={currentRoute === 'blog' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Blog</a>
                            </Link>
                        </li>
                        <li onClick={() => toggleMode('close')}>
                            <Link href='/photography' passHref>
                                <a className={currentRoute === 'photography' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Photography</a>
                            </Link>
                        </li>
                        <li onClick={() => toggleMode('close')}>
                            <Link href='/about' passHref>
                                <a className={currentRoute === 'about' ? 'highlighted-link cursor-pointer' : 'cursor-pointer'}>Bio</a>
                            </Link>
                        </li>
                        
                        {user ? <li onClick={() => toggleMode('close')}>
                            <div className="inline text-red-700 bg-red-200 dark:text-red-200 dark:bg-red-700 px-3 py-2 rounded" onClick={() => logout()}>
                                <a className="inline cursor-pointer">Logout</a>
                            </div>
                        </li> :
                        <li onClick={() => toggleMode('close')}>
                        <Link href='/auth' passHref>
                            <a className="cursor-pointer">Login</a>
                        </Link>
                    </li>
                        }
                    </ul>
                            
                    </nav>
            </div>
        </div>
        </div>
    )
}
