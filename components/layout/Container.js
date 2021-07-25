import Head from 'next/head'
import {useState} from 'react'

import NavBar from '../../components/layout/NavBar'
import TopBar from '../../components/layout/TopBar'

export default function Container(props) {

    const [currentMode, setCurrentMode] = useState("close")
    const {children} = props

    const toggleMode = () => {
        if(currentMode === 'close'){
            setCurrentMode('open')
        } else{
            setCurrentMode('close')
        }
    }

    return (
        <>
            <Head>
                <title>Abhik Ghosh | Personal Website</title>
                <meta name="description" content="Personal website to showcase my work, projects and writing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="lg:w-3/5 mx-auto px-3 lg:px-0">
                THIS IS A CONTAINER
                <NavBar />
                {children}
            </div> */}
            <div className="relative min-h-screen md:flex">
                <TopBar toggleMode={toggleMode}/>
                <NavBar currentMode={currentMode}/>
                <div className="flex-1 bg-gray-200 dark:bg-gray-800 pt-20">
                    {children}
                </div>
            </div>
        </>
    )
}
