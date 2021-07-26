import Head from 'next/head'
import {useState} from 'react'

import TopNav from '../../components/layout/TopNav'
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

            <TopNav toggleMode={toggleMode} currentMode={currentMode}/>
            <div className="mx-auto bg-gray-50 dark:bg-gray-800 py-20 rounded shadow my-10">
                    {children}  
            </div>
            <Footer />
            
        </>
    )
}
