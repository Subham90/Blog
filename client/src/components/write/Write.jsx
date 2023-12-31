import "./write.css"
import  { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Write() {

  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");
  const [file,setFile]= useState(null);
  const {user} =useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const newPost = {
      username :user.username,
      title,
      desc,
    };
     if(file)
     {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;

      try{
       await axios.post("https://blog-backend-ho92.onrender.com/api/upload", data);
      }
      catch(err){
      }
     }
     try{
      const res = await axios.post("https://blog-backend-ho92.onrender.com/api/posts", newPost);
      navigate("/post/" + res.data._id);
     }catch(err){}
  };
  return (
    <div className="write">
      {file && (
      <img 
      className="writeImage"
      src={URL.createObjectURL(file)} alt=""
      />
      )}
      
      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="addIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="writeFormGroup">
            <textarea
                placeholder="Tell your story....."
                type="text"
                className="writeInput writeText"
                onChange={(e) => setDesc(e.target.value)}
            ></textarea>
        </div>
        <button className="Submitbutton" type="submit">Publish</button>
      </form>
    </div>
  )
}
