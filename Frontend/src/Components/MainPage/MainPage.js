import React, { Component } from 'react'
import "./MainPage.css";
import Post from '../Post/Post';
import upload from '../../images/images/upload.png';
import { storage, auth } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            progressBar: "",
        }
    }
    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        // let data = [
        //     {
        //         "postId": "123456",
        //         "userName": "Khush",
        //         "postImageURL": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        //         "timeStamp": "12345",
        //         "likes": "1234"


        //     },
        //     {
        //         "postId": "123456",
        //         "userName": "Khush",
        //         "postImageURL": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        //         "timeStamp": "12345",
        //         "likes": "1234"


        //     },
        //     {
        //         "postId": "123456",
        //         "userName": "Khush",
        //         "postImageURL": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        //         "timeStamp": "12345",
        //         "likes": "1234"


        //     },
        //     {
        //         "postId": "123456",
        //         "userName": "Khush",
        //         "postImageURL": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        //         "timeStamp": "12345",
        //         "likes": "1234"


        //     }
        // ];
          const thisContext = this;
          fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(data => {
                thisContext.setState({ postArray: data })
    });
        
        
        //this.setState({ postArray: data });
    }
    upload = (event) => {
        let image = event.target.files[0];
        const thisContext = this;
        if (image == null || image == undefined)
            return;
        const storageRef = ref(storage, 'images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({ progressBar: progress });
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors

            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                   
                    
                    let payload = {
                        "postId": Math.floor(Math.random() * 100000).toString(),
                        "userName":"Khush",
                        "userId": JSON.parse( localStorage.getItem("users")).uid,
                        "postPath": downloadURL,
                        "timestamp": new Date().getTime(),
                        "likeCount": 0
                    }

                    const requestOptions = {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    }

                    fetch("http://localhost:8080/post", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            thisContext.getPost();
                        })
                        .catch(error => {

                        })

                });
            }
        );
    }

    render() {
        return (
            <div>
                <div style={{ "textAlign": "center", "margin": "10px" }}>
                    <div className="fileupload">
                        <label for="file-upload">
                            <img src={upload} className='mainpage_uploadicon' />
                        </label>
                        <input onChange={this.upload} id="file-upload" type="file" />
                    </div>
                </div>
                <div className="upload_text">{this.state.progressBar}</div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} profileImage={item.profileImage} postImage={item.postPath} likes={item.likes} />
                    ))
                }

            </div>
        );

    }
}
export default MainPage;