import Link from 'next/link'
import Image from 'next/image';

function Tick(){
    return(
        <svg className="inline w-6 h-6 pb-1 text-green-500" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function Uni(){
    return(
        <svg className="inline w-6 h-6 pb-1 text-blue-500" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
    )
}

export default function About() {
  return (
    <div className="xl:w-3/6 lg:w-5/6 mx-auto mb-10 px-2 xl:px-0">
        <div className="mb-5">
          <p className="font-bold text-3xl xl:text-4xl tracking-tight mb-4 text-black dark:text-white">Bio</p>
          <p className=" text-gray-600 dark:text-gray-400">
          This page summerizes my professional and technology experiences, and highlights different roles I have progressed through 
          over past few years in software industry. You can download my resume on this page for details. Or even better,
          drop by to say hello here on the <Link href={'/contact'} passHref><a className="highlighted-link">contact page →</a></Link></p>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg py-10 px-2 md:px-10 mt-10 lg:text-lg">
                <p className="mb-5">I am a Data Solution Architect with over 13 years of experience in software
                    engineering. I have
                    led
                    design, development and management of IT Solution for many fortune five hundred companies, SMBs
                    and
                    startups during my service in this industry.
                </p>
                <p className="mb-5">
                    I am commited to help organizations achieve maximum benefits from their technology investments
                    and
                    push their IT operational boundaries. I have helped several customers discovering their wealth
                    in
                    data, monitizing and setting up analytical platforms, in cloud migration journey and simplifying
                    legacy systems integration while keeping their data and infrastructure secured than ever before.
                    Cost and resource optimization is and has always been a key focus area for me.
                </p>
                <p className="mb-10">I have a deep passion towards clean code and efficient design techniques. I am a life-long
                    learner
                    and an avid reader. I love to contribute to the community by means of blogging, speaking at
                    forums
                    and meetups, on stackoverflow, dev.to etc. When I am not working, I enjoy travelling and
                    photography. Because, at the end of the day, life is all about seeing, learning and being a
                    better
                    version of yourself. 🙂</p>
                   
                <div className="mt-10">
                    <a className="py-2 px-4 rounded-md
                    dark:bg-blue-800 bg-blue-200 text-gray-700 dark:text-gray-200"
                        href="https://docs.google.com/document/d/2121uAJ0N6VhN-h-YW9858Xae1RF09qjpWdXOReTz-1j_uA/edit?usp=sharing"
                        >Download Resume →</a>
                </div>
                    
                <div className="mt-10">
                    <hr className="dark:text-blue-400 text-blue-700" />
                    <p className="dark:text-blue-400 text-blue-700 font-semibold pb-5">PROFESSIONAL EXPERIENCE</p> 
                    <p>
                        <span className="font-semibold">Data Architect - </span>Experience in Datawarehouse schema design, ETL solution architecting, Apache Spark Streaming Data pipeline redesign. Tools evaluation for data platform modernization. Cloud integration and orchastration with Azure Data Factory, Databricks. Complete solution architecting for Metadata Magangement in Azure Data Catalog. Implementanting and securing consumption layer and Data APIs<br/>
                        <span className="font-semibold">Data Engineer - </span>Developed optimal data pipeline architecture for Datawarehouse solutions. Built infrastructure required for optimal extraction, transformation, and loading of data and Data APIs from a wide variety of data sources using SQL, No SQL and Azure technologies. Created data tools for analytics and data scientist team members. Optimized data delivery and re-designed infrastructure for greater scalability<br/>
                        <span className="font-semibold">Application Developer - </span>Strong experience in Java Application Development with Struts, Spring, Hibernate, Springboot. <br/>
                    </p>
                </div>
                <div className="mt-5">
                    <hr className="dark:text-blue-400 text-blue-700"/>
                    <p className="dark:text-blue-400 text-blue-700 font-semibold pb-5">SKILLS &amp; EXPERTISE</p> 
                    <p>
                        <span className="font-semibold"><Tick /> Conventional ETL - </span>Talend Big Data, SSIS<br/>
                        <span className="font-semibold"><Tick /> Storage/ Data Lake - </span>HDFS, S3, Azure Blob Storage<br/>
                        <span className="font-semibold"><Tick /> RDBMS - </span>SQL Server<br/>
                        <span className="font-semibold"><Tick /> No SQL - </span>MongoDB, Cassandra<br/>
                        <span className="font-semibold"><Tick /> Metadata Management - </span>Talend, Azure Data Catalog<br/>
                        <span className="font-semibold"><Tick /> Stream Processing - </span>Spark Streaming, Apache Kafka<br/>
                        <span className="font-semibold"><Tick /> Batch Processing - </span>Apache Spark, Spring Batch, Talend DI<br/>
                        <span className="font-semibold"><Tick /> Language - </span>Java, Groovy, Python<br/>
                        <span className="font-semibold"><Tick /> Framework - </span>Microservices - Spring Boot, Spring Cloud, Flask<br/>
                        <span className="font-semibold"><Tick /> Integration - </span>Apache Camel, Apache Karaf<br/>
                        <span className="font-semibold"><Tick /> Caching - </span>Redis<br/>
                        <span className="font-semibold"><Tick /> Search - </span>Elasticsearch<br/>
                    </p>
                </div>
                <div className="my-5">
                    <hr className="dark:text-blue-400 text-blue-700"/>
                    <p className="dark:text-blue-400 text-blue-700 font-semibold pb-5">EDUCATION</p> 
                    <p>
                        <Uni /> <span className="font-semibold">Bachelor of Technology in Electrical Engineering(2003 - 2007)</span> - <a href="https://makautwb.ac.in/" target="_blank" rel="noreferrer" className="dark:text-blue-400 text-blue-700">West Bengal University of Technology, Kolkata</a><br/>
                        <Uni /> <span className="font-semibold">Post Graduate Diploma in Data Science(2018 - 2019)</span> - <a href="https://www.iiitb.ac.in/" target="_blank" rel="noreferrer" className="dark:text-blue-400 text-blue-700">International Institute of Information Technology, Bangalore</a>
                    </p>
                </div>
            </div>
            

          <p className="font-bold text-3xl xl:text-4xl tracking-tight mb-4 text-black dark:text-white mt-20">Beyond work,</p>
          <p className=" text-gray-600 dark:text-gray-400">
          To myself sane in this fast paced world. </p>

            <div className="border border-gray-300 dark:border-gray-700 rounded-lg py-10 px-2 md:px-10 mt-10">
                    <p className="mb-10">Its not so long ago I started with long run. The city has its effect on me, I
                        guess. At work, I met many of my collegues and friends, who are pro marathon runners. I was so
                        inspired looking at their passion towards running that I decided to give it a try. I did run
                        before but not with the goal of loving to run. I&apos;m still building on my techniques but I love
                        the fact that I enjoy running. Specially runnning early in the morning has a calming effect
                        throughout the day. I have participated in several half marathons in Mumbai, India. Hoping to
                        get qualified for my first 42.6KM in next TMM and then someday in the future - NYC marathon 🙂.
                    </p>
                    <p className="">
                        So thats runnning, but I find a great deal of happiness in photography too. I feel,
                        photography is an emotional expression of an individual. You see more intensive red colors after
                        drinking coffee - thats science but you cannot see colors like Eliot Porter(who by the way,
                        known to be the first man in american arts to shoot color photos in 1938 ), so thats art. To me,
                        photography is a way to reflect yourself. Its so amazing, so liberating. During my stay in
                        Seattle, WA, I met so many passionate photographers - by the dark lake at midnight waiting for
                        the glimpse of our milky way galaxy, lugging huge weight on the way up to mountain in search for
                        a perfect landscape shot, ignoring snow, ice, rain to see the city when it rains. Ansel Adam,
                        Michael Malford and there are many more who inspired the world to create art through
                        photography. I dont know, whether I create art or snapshots. But I love my photography.🙂
                    </p>
                </div>
            
                <div className="flex items-center justify-start space-x-4 mt-20 
                border border-gray-300 dark:border-gray-700 rounded-lg py-10 px-2 md:px-10 
                bg-blue-50 dark:bg-gray-800">
                <div className=" pt-2"><Image
                    alt="Abhik Ghosh"
                    height={60}
                    width={60}
                    src="/images/site/profile1.jpg"
                    className="rounded-full"
                    /></div>
                <div><p className=" text-gray-600 dark:text-gray-400">
                Hey, If you have come this far, definitely you`&apos;d like to say hello here on this <Link href={'/contact'} passHref><a className="highlighted-link">contact page →</a></Link> AND It was nice to meet you, have a great day!
                </p></div>
                
                
                </div>
                
                

        </div>
        
      </div>
  )
}
