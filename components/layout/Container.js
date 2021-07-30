import Head from 'next/head'
import {useState} from 'react'
import { useRouter } from 'next/router';

// import TopNav from '../../components/layout/TopNav'
import TopNavigation from '../../components/layout/TopNavigation'
import Footer from '../../components/layout/Footer'

export default function Container(props) {

    const [currentMode, setCurrentMode] = useState("close")
    const {children} = props
    const router = useRouter();

    const toggleMode = () => {
        if(currentMode === 'close'){
            setCurrentMode('open')
        } else{
            setCurrentMode('close')
        }
    }

    const meta = {
        title: 'Abhik Ghosh – Developer, architect, writer.',
        description: `A data solution architect, Cloud enthusiast and course creator.`,
        image: 'https://abhikghosh.in/images/site/banner.png',
        type: 'website'
      };

    return (
        <>
            <Head>
                <link rel="icon" href="/images/site/favicon.ico" />

                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://abhikghosh.in${router.asPath}`} />
                <link rel="canonical" href={`https://abhikghosh.in${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Abhik Ghosh" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@avik5324" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <TopNavigation toggleMode={toggleMode} currentMode={currentMode}/>
            
            <div className="mx-auto dark:bg-gray-900 py-20 rounded shadow my-5">
                    {children}  
            </div>
            <Footer />
            
        </>
    )
}
