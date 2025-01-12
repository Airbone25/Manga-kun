import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './contexts/LoginContext'
import Loading from './Loading'

function Create(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [manga, setManga] = useState('')
    const [cover, setCover] = useState('')
    const [license, setLicense] = useState(false)

    const [isLoading,setIsLoading] = useState(false)

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user'))

    function handleSubmit(e){
        e.preventDefault()
        if(user == null){
            navigate('/')
            return
        }
        const newManga = new FormData()
        newManga.append('title',title)
        newManga.append('description',description)
        newManga.append('author',author)
        newManga.append('manga',manga)
        newManga.append('cover',cover)
        newManga.append('license',license)
        postManga(newManga)
        setTitle('')
        setDescription('')
        setAuthor('')
        setManga('')
        setCover('')
        setLicense(false)
    }

    async function postManga(newManga){
        try{
            const res = await fetch(`${import.meta.env.VITE_URL}/api`,{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
                body: newManga
            })
            if(!res.ok){
                throw new Error('Failed to post manga')
            }
            setIsLoading(true)
            navigate('/')
        }catch(error){
            console.error(error)
        }
    }

    return isLoading ? (<Loading/>) : (
        <div className="create-manga-page">
            <div className="create_manga">
                <h2>Create New Manga</h2>
                <p>To publish your work, you need to have the rights to the content and you agree to the Terms of Service.</p>

                <form onSubmit={handleSubmit}>
                    <h4 id="title-tag">Title</h4>
                    <input type="text" id="title" name="title" placeholder="Enter a title" value={title} onChange={e=>setTitle(e.target.value)} autoComplete="off" required/>

                    <h4 id="des-tag">Description</h4>
                    <textarea name="description" id="description" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Enter description" required></textarea>

                    <h4 id="title-tag">Author's Name: </h4>
                    <input type="text" id="title" name="author" placeholder="Enter author's name" value={author} onChange={e=>setAuthor(e.target.value)} autoComplete="off" required/>

                    <h4 id="manga-tag">Add Manga: </h4>
                    <input type="file" name="manga" id="manga" placeholder="Paste PDF url" accept='.pdf' onChange={e=>setManga(e.target.files[0])} autoComplete="off" required/>

                    <h4 id="manga-cover-tag">Upload Cover: </h4>
                    <input type="file" name="cover" id="cover" accept="image/*" onChange={e=>setCover(e.target.files[0])} required/>

                    <label id="lic-label">
                        <input type="checkbox" name="license" id="license" checked={license} onChange={e=>setLicense(e.target.checked)} required/>
                        <h4 id="lic-tag">I have the rights to publish this content.</h4>
                    </label>

                    <input type="submit" value="Add Manga" id="submit"/>
                    <a href="/" id="cancel-manga">Cancel</a>
                </form>
            </div>
        </div>
    )
}

export default Create