import Head from 'next/head'
import {useState} from 'react'

import NavBar from '../../components/layout/NavBar'
import TopBar from '../../components/layout/TopBar'
import Footer from '../../components/layout/Footer'

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
            <div className="relative md:flex">
                <div className="fixed h-auto ">
                    <TopBar toggleMode={toggleMode}/>
                    <NavBar currentMode={currentMode}/>
                </div>
                <div className="w-64"></div>
                <div className="flex-1 w-full bg-gray-50 dark:bg-gray-800 pt-20">
                    {children}  
                </div>
            </div>
            <div className="flex flex-row">
                <div className="lg:w-64"></div>
                <div className="flex-1"><Footer /></div>
                
            </div>
            
        </>
    )
}
