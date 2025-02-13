import React,{useState} from 'react';
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Hello.css";

const Navbar = () => (

  <div className="navbar">
    <h1>Grass</h1>
    

    <div className="icons">
      
<button type="button" class="btn btn-primary active">HOME </button>
{/* <button type="button" class="btn btn-secondary">Bikes</button> */}
{/* <button type="button" class="btn btn-success">Sport-Bike</button> */}
{/* <button type="button" class="btn btn-danger">Sunflower</button> */}
{/* 


<button type="button" class="btn btn-warning">More</button> */}
{/* <button type="button" class="btn btn-info"><i class="fa-solid fa-id-badge"></i></button> */}

<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-id-badge"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header text-center">
    <h5 id="offcanvasRightLabel">Profile</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

  <form class="form-floating">
  <i class="fa-solid fa-user"></i>

  <input type="text" class="form-control mt-5" id="floatingInputValue" placeholder="name@example.com" value="Gowtham" />
  {/* <label for="floatingInputValue">Input with value</label> */}

  <input type="phone" class="form-control mt-4" id="floatingInputValue" placeholder="name@example.com" value="69***8" />

  <input type="text" class="form-control mt-4" id="floatingInputValue" placeholder="name@example.com" value="Public Account" 
  />
</form>

<label class="mt-5">To Upload a file </label>
<input type='file' class='mt-2'/>

  </div>
   </div>
  </div>
  </div>
);

const Sidebar = () => (
  <div className="sidebar">
    <button><a href="#">Home</a></button>
    <button><a href="#">Profile</a></button>
    <button><a href="#">Account</a></button>
    <button><a href="#">Setting</a></button>
  </div>
);


const postsData = [
  {
    id: 1,
    username: "vijay",
    image: "l1.webp",
    likes: 5,
    comments: 5,
  },
  {
    id: 2,
    username: "manikandaprabu",
    image: "l2.webp",
    likes: 20,
    comments: 8,
  },
  {
    id: 3,
    username: "praveen", 
    image: "l3.webp",
    likes: 3,
    comments: 2,
  },
  {
    id: 4,
    username: "gokul",
    image: "l4.webp",
    likes: 4,
    comments: 2,
  }, {
    id: 5,
    username: "nillavan",
    image: "l5.webp",
    likes: 5,
    comments: 2,
  }, {
    id: 6,
    username: " gowtham",
    image: "l6.webp",
    likes: 7,
    comments: 2,
  }, {
    id: 7,
    username: "jaga",
    image: "l7.webp",
    likes: 9,
    comments: 2,
  }, {
    id: 8,
    username: "manikandan",
    image: "l8.webp",
    likes: 1,
    comments: 2,
  },
  {
    id: 9,
    username: " Arun...",
    image: "l9.webp",
    likes: 6,
    comments: 2,
  }, {
    id: 1,
    username: "vijay",
    image: "l1.webp",
    likes: 5,
    comments: 5,
  },
  {
    id: 2,
    username: "manikandaprabu",
    image: "l2.webp",
    likes: 20,
    comments: 8,
  },
  {
    id: 3,
    username: "praveen", 
    image: "l3.webp",
    likes: 3,
    comments: 2,
  },
  {
    id: 4,
    username: "gokul",
    image: "l4.webp",
    likes: 4,
    comments: 2,
  }, {
    id: 5,
    username: "nillavan",
    image: "l5.webp",
    likes: 5,
    comments: 2,
  }, {
    id: 6,
    username: " gowtham",
    image: "l6.webp",
    likes: 7,
    comments: 2,
  }, {
    id: 7,
    username: "jaga",
    image: "l7.webp",
    likes: 9,
    comments: 2,
  }, {
    id: 8,
    username: "manikandan",
    image: "l8.webp",
    likes: 1,
    comments: 2,
  },
  {
    id: 9,
    username: " Arun...",
    image: "l9.webp",
    likes: 6,
    comments: 2,
  },
  
  
];


const Feed = () => {
  // const [likes, setLikes] = useState(5);
  // const [liked, setLiked] = useState(false);
  // const [comments, setComments] = useState(0);

  const [posts, setPosts] = useState(postsData);
  const [isSorted, setIsSorted] = useState(false);

  const navigate = useNavigate(); // ✅ Define navigate


  // Toggle Like Function
  // const handleLike = () => {
  //   setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  //   setLiked((prevLiked) => !prevLiked);
  // };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + (post.liked ? -1 : 1), liked: !post.liked }
          : post
      )
    );
  };

  const handleSort = () => {
    const sortedPosts = [...posts].sort((a, b) =>
      isSorted ? a.likes - b.likes : b.likes - a.likes
    );

    setPosts(sortedPosts);
    setIsSorted(!isSorted); // Toggle sorting order
  };

    
  return (
    
    <div className="d-flex flex-wrap justify-content-center ml-">
    {posts.map((post) => (
      <div key={post.id} className="card mt-2 ml-10 shadow" style={{ width: "400px" }}>
        <div className="card-header d-flex align-items-center">
        <i class="fa-solid fa-user-secret"></i>
          <strong>{post.username}</strong>
        </div>
        <div className="card-body">
          <img src={post.image} alt="Post" className="img-fluid rounded" />
        </div>
        <div className="card-footer d-flex justify-content-between h-100">
          <button
            className={`btn ${post.liked ? "btn-primary" : "btn-light"}`}
            onClick={() => handleLike(post.id)}
          >
            <FaThumbsUp className="me-1" /> {post.liked ? "Unlike" : "Like"} ({post.likes})
          </button>
          
          
         

      {/* <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Post</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.text}</td>
              <td>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

          {/* <button className="btn btn-light" onClick={() => navigate("/comment")}>
            <FaComment className="me-1" /> Comment ({post.comments})
          </button> */}

<button className="btn btn-primary" onClick={() => navigate("/comment")}>
        <i className="bi bi-chat-dots"></i> Comment
      </button>

          <button className="btn btn-primary " onClick={handleSort}>
          <i class="fa-solid fa-sort"></i>  
                {/* {isSorted ? "(low)" : "(high)"} */}
       </button>

        </div>
      </div>
    ))}
  </div>
);
};







  // <div className="feed">
  //   <div className="post">
  //     <h2>User 1</h2>
  //     <p>This is a post content.</p>
  //   </div>
  //   <div className="post">
  //     <h2>User 2</h2>
  //     <p>This is another post content.</p>
  //   </div>
  // </div>


const Frontpage = () => (

 <div className='body1'> 
  <div className="app">
    <Navbar />
    <div className="main">
      <Sidebar />
      <Feed />
    </div>
  </div>
  </div>  
);

export default Frontpage;