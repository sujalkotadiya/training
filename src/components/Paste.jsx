// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { removeFromPastes } from "../redux/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// const paste = () => {

//   const pastes = useSelector((state) => state.paste.pastes);
//   console.log(pastes)
//   const [searchTerm, setSearchTerm] = useState('')
//   const dispatch = useDispatch()

//   const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

//   function handleDelete(pasteId) {
//     dispatch(removeFromPastes(pasteId))
//   }

//   return (
//     <div>
//       <input
//         className="p-2 rounded-2xl min-w-[600px] mt-5"
//         type="search"
//         placeholder="search here"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="flex flex-col gap-5 mt-5">
//         {filteredData.length > 0 &&
//           filteredData.map(
//             (paste) => {
//               return (
//                 <div key={paste._id}
//                   className="border ">
//                   <div>
//                     {paste.title}
//                   </div>
//                   <div>
//                     {paste.content}
//                   </div>
//                   <div className="flex flex-row gap-4 justify-evenly">
//                     <button>
//                       <Link to={`/?pasteId=${paste?._id}`}>
//                       edit</Link>
//                     </button>
//                     <button>
//                       <Link to={`/pastes/${paste?._id}`}>
//                       view</Link>
//                     </button>
//                     <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
//                     <button onClick={()=>{
//                       navigator.clipboard.writeText(paste?.content)
//                       toast.success("copied to clipboard")
//                     }}>Copy</button>
//                     <button>Share</button>
//                   </div>
//                   <div>
//                     {paste.createdAt}
//                   </div>
//                 </div>
//               )
//             }
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default paste




const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  return (
    <div className="container mx-auto p-4">
      <input
        className="w-full p-2 border rounded-md mb-4"
        type="text"
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-y-4">
        {filteredPastes.length > 0 ? (
          filteredPastes.map((paste) => (
            <div key={paste._id} className="p-4 border rounded-md">
              <h3 className="font-bold text-lg mb-2">{paste.title}</h3>
              <p className="mb-2 text-gray-600">{paste.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Link to={`/?pasteId=${paste._id}`} className="text-blue-500 hover:underline">
                    Edit
                  </Link>
                  <Link to={`/pastes/${paste._id}`} className="text-blue-500 hover:underline">
                    View
                  </Link>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="text-red-500 hover:underline">
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied to clipboard");
                    }}
                    className="text-green-500 hover:underline">
                    Copy
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Created At: {paste.createdAt}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No pastes found</p>
        )}
      </div>
    </div>
  );
};

export default Paste;