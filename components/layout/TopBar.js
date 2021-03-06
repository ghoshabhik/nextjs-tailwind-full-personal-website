import Link from 'next/link'

export default function TopBar({toggleMode}){
    return (
        <div className="bg-gray-300 dark:bg-gray-700 w-screen flex justify-between items-center md:hidden">
            <div>
                <Link href='/' passHref>
                    <a className="cursor-pointer flex items-center text-2xl font-bold p-5 ">
                    <svg fill="currentColor"  height="30px" version="1.1" 
                    viewBox="0 0 48 48" width="30px" >
                    <g id="Expanded"><g><g><path d="M35,48H11c-0.528,0-0.965-0.41-0.998-0.938l-2-32c-0.017-0.275,0.08-0.546,0.269-0.747S8.724,14,9,14h28     c0.276,0,0.54,0.114,0.729,0.315s0.286,0.472,0.269,0.747l-2,32C35.965,47.59,35.528,48,35,48z M11.939,46h22.121l1.875-30     H10.064L11.939,46z"/></g><g><path d="M39,16H7c-0.552,0-1-0.447-1-1V7c0-0.553,0.448-1,1-1h32c0.552,0,1,0.447,1,1v8C40,15.553,39.552,16,39,16z M8,14h30V8H8     V14z"/></g><g><path d="M37.02,8C37.014,7.999,37.007,8,37,8H9C8.679,8,8.377,7.846,8.189,7.585S7.95,6.988,8.051,6.684l2-6     C10.188,0.275,10.569,0,11,0h24c0.431,0,0.812,0.275,0.949,0.684l1.94,5.821C37.972,6.651,38.02,6.82,38.02,7     C38.02,7.553,37.572,8,37.02,8z M10.387,6h25.226l-1.333-4H11.721L10.387,6z"/></g><g><path d="M36.5,24h-27c-0.552,0-1-0.447-1-1s0.448-1,1-1h27c0.552,0,1,0.447,1,1S37.052,24,36.5,24z"/></g><g><rect height="2" width="25.5" x="10.25" y="34"/></g><g><path d="M26,30h-6c-0.552,0-1-0.447-1-1s0.448-1,1-1h6c0.552,0,1,0.447,1,1S26.552,30,26,30z"/></g></g></g>
                    </svg>
                    {'${abhik.ghosh}'}
                    </a>
                </Link>
            </div>
            <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700" onClick={()=> toggleMode()}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        </div>
    )
}
