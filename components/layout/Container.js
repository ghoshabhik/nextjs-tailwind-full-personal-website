import Head from 'next/head'
import {useState} from 'react'

// import TopNav from '../../components/layout/TopNav'
import TopNavigation from '../../components/layout/TopNavigation'
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
                <link rel="icon" href="/images/site/favicon.ico" />
            </Head>
            <TopNavigation toggleMode={toggleMode} currentMode={currentMode}/>
            
            <div className="mx-auto dark:bg-gray-900 py-20 rounded shadow my-5">
                    {children}  
            </div>
            <Footer />
            
        </>
    )
}
