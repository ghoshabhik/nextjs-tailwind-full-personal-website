import Read from '../components/firestore/Read'
import Write from '../components/firestore/Write'

export default function Home() {
  return (
    <div >
      <main className="lg:w-3/6 mx-auto mb-10">
        <div className="text-center">HELLO WORLD from INDEX PAGE</div>
        <Read />
        <Write />
       </main>
    </div>
  )
}
