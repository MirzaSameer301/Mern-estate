import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase.js";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc,setFilePerc]=useState(0)
  const [fileUploadError,setFileUploadError]=useState(false)
 const [formData,setFormData]=useState({})


  // firebase Storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')



  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log()



    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     setFilePerc(Math.round(progress))
    },
    (error)=>{
      setFileUploadError(error)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(
        (downloadURL)=>
        setFormData({...formData, avatar:downloadURL})
      )
    })
   };

  return (
    <div className="max-w-lg p-3 mx-auto ">
      <h1 className="font-semibold text-center my-7 text-3xl">Profile</h1>
      <form className="flex flex-col p-7 gap-4">
        <input
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="rounded-full w-20 h-20 self-center  object-cover cursor-pointer mt-2"
        />
        <p className="text-sm self-center">
          {fileUploadError ?
          <span className="text-red-700">Error in Uploading Image(Image must be less than 2MB)</span>
          : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          )
          : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded</span>
          )
          : ""
        }
        </p>
        <input
          placeholder="username"
          type="text"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          placeholder="email"
          type="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          placeholder="password"
          id="password"
          type="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
        <form>
          <div className="flex justify-between mt-2">
            <span className="text-red-700 cursor-pointer">Delete Account</span>
            <span className="text-red-700 cursor-pointer">Sign out</span>
          </div>
        </form>
      </form>
    </div>
  );
}
