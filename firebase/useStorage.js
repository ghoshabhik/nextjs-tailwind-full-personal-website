import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const useStorage = (file) => {
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    // console.log(file)
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images')
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      // console.log('UseStorage ---', file)
      await collectionRef.doc(file.name).set({ url, createdAt});
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;