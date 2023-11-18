import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore/lite'
import { toast } from 'react-toastify'
import './index.scss'

const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const savePortfolio = async (portfolio: any) => {
    console.log(portfolio)
    const portfolioCollection = collection(db, 'portfolio')
    await addDoc(portfolioCollection, portfolio)
		toast.success('Successfully added')
    await form?.current?.reset()
  }

  const submitPortfolio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = form.current
      ? (form.current[0] as HTMLInputElement)?.value
      : ''
    const description = form.current
      ? (form.current[1] as HTMLTextAreaElement)?.value
      : ''
    const url = form.current ? (form.current[2] as HTMLInputElement)?.value : ''
    const image = form.current
      ? ((form.current[3] as HTMLInputElement)?.files?.[0] as File)
      : undefined

    const storageRef = ref(storage, `portfolio/${image?.name}`)

    if (image) {
      uploadBytes(storageRef, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((downloadUrl) => {
              savePortfolio({
                name,
                description,
                url,
                image: downloadUrl,
              })
            })
            .catch((error) => {
              console.log(error)
              savePortfolio({
                name,
                description,
                url,
                image: null,
              })
            })
        })
        .catch((error) => {
          console.log(error)
          savePortfolio({
            name,
            description,
            url,
            image: null,
          })
        })
    } else {
      savePortfolio({
        name,
        description,
        url,
        image: null,
      })
    }
  }

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea rows={5} placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url for demo" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <div className="btns">
          <button type="submit">Submit</button>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      </form>
    </div>
  )
}

export { Home }
