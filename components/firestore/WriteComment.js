import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const WriteComment = ({slug, dataToBeWritten}) => {
    const { user } = useUser()
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('comments')
                .doc(slug) 
                .set({
                    comment: dataToBeWritten,
                    time_stamp: firebase.firestore.Timestamp.now(),
                    user: user
                })
                .then(console.log('comment added'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div >
            <button onClick={sendData} className="px-4 w-auto h-10 bg-purple-200 dark:bg-purple-700 rounded-full hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                Send Data To Cloud Firestore
            </button>
        </div>
    )
}

export default WriteComment