import FirebaseAuth from '../components/auth/FirebaseAuth'

const Auth = () => {
    return (
        <div className="flex justify-center mt-40 min-h-screen">
            <div className="w-auto h-full px-5 py-3 bg-gray-100 dark:bg-gray-700 rounded shadow-md">
                <FirebaseAuth />
            </div>
        </div>
    )
}

export default Auth