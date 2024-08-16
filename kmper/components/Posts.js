import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Snapshot } from "recoil";
import { db } from "../firebase";
import Post from "./Post"
// import {logo} from './asset/logo.jpg'

// const posts = [{
//     id:'123',
//     username:'gautampankuta',
//     userImg:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.sproutsocial.com%2Fuploads%2F2022%2F06%2Fprofile-picture.jpeg&imgrefurl=https%3A%2F%2Fsproutsocial.com%2Fglossary%2Fprofile-picture%2F&tbnid=3K-Ql4EMgl5OaM&vet=12ahUKEwjenZyU3KD7AhVOKrcAHUnYDsAQMygFegUIARDpAQ..i&docid=3SVzkdn9_4WJzM&w=1200&h=1588&q=profile%20pic&ved=2ahUKEwjenZyU3KD7AhVOKrcAHUnYDsAQMygFegUIARDpAQ",
//     img:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
//     caption: "this is dope !",
// },
// {
//     id:'123',
//     username:'gautampankuta',
//     userImg:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.sproutsocial.com%2Fuploads%2F2022%2F06%2Fprofile-picture.jpeg&imgrefurl=https%3A%2F%2Fsproutsocial.com%2Fglossary%2Fprofile-picture%2F&tbnid=3K-Ql4EMgl5OaM&vet=12ahUKEwjenZyU3KD7AhVOKrcAHUnYDsAQMygFegUIARDpAQ..i&docid=3SVzkdn9_4WJzM&w=1200&h=1588&q=profile%20pic&ved=2ahUKEwjenZyU3KD7AhVOKrcAHUnYDsAQMygFegUIARDpAQ",
//     img:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
//     caption: "this is dope !",
// },
// ];

function Posts(){ 

    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
        onSnapshot(
            query(collection(db, 'posts'),orderBy('timestamp', 'desc')),
            (snapshot) =>{
            setPosts(snapshot.docs);
            }
            ),
            [db]
    );

        // console.log(posts);
    return (
        <div>
            {posts.map((post => (
                <Post 
                key={post.id} 
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
                />
            )))}
            
        </div>
    );
}

export default Posts;