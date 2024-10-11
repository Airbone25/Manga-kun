
function Create(){
    return(
        <div className="create-manga-page">
            <div className="create_manga">
                <h2>Create New Manga</h2>
                <p>To publish your work, you need to have the rights to the content and you agree to the Terms of Service.</p>

                <form>
                    <h4 id="title-tag">Title</h4>
                    <input type="text" id="title" name="title" placeholder="Enter a title"/>

                    <h4 id="des-tag">Description</h4>
                    <textarea name="description" id="description" placeholder="Enter description"></textarea>

                    <h4 id="manga-tag">Add Manga: </h4>
                    <input type="url" name="manga" id="manga" placeholder="Paste PDF url"/>

                    <label id="lic-label">
                        <input type="checkbox" name="license" id="license" />
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