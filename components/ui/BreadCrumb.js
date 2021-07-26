import Link from 'next/link'

const BreadCrumb = ({links}) => {
    console.log(links.length)
    return (
        <div className="">
            {links.map((link, index) => (
            <Link href={'/' + link.linkUrl} passHref key={index}>
                <span className="text-purple-400 dark:text-purple-700 cursor-pointer uppercase" >
                        { link.name } &nbsp;/&nbsp;
                </span>
            </Link>
        ))}
        </div>
    )
}

export default BreadCrumb
