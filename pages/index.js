import Read from '../components/firestore/Read'
import Write from '../components/firestore/Write'

export default function Home() {
  return (
    <div >
      <main className="">
        <div className="text-center">HELLO WORLD from INDEX PAGE</div>
        <Read />
        <Write />
       </main>
    </div>
  )
}
