// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useSearchParams } from "react-router-dom"
// import { addToPastes, updateToPastes } from "../redux/pasteSlice"

import toast from "react-hot-toast";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

// const Home = () => {
//   const [title, setTitle] = useState('')
//   const [value, setValue] = useState('')
//   const [serchParams, setSearchParams] = useSearchParams()
//   const pasteId = serchParams.get("pasteId")
//   const dispatch = useDispatch()
//   const allPastes = useSelector((state) => state.paste.pastes)

//   useEffect(() => {
//     if (pasteId) {
//       const paste = allPastes.find((p) => p._id === pasteId)
//       setTitle(paste.title)
//       setValue(paste.content)
//     }
//   }, [pasteId])

//   function createPaste() {
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteId ||
//         Date.now().toString(36),
//       createdAt: new Date().toISOString()
//     }


//     if (pasteId) {
//       dispatch(updateToPastes(paste))
//     } else {
//       dispatch(addToPastes(paste))
//     }

//     setTitle('')
//     setValue('')
//     setSearchParams({})

//   }



//   return (
//     <div>
//       <div className="flex flex-row gap-7">
//         <input
//           className="p-1 rounded-2xl mt-2 w-[66%] pl-4"
//           type="text"
//           placeholder="enter title here"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <button
//           onClick={createPaste}
//           className="p-2 rounded-2xl mt-2">
//           {
//             pasteId ? "Update My Paste" : "Add My Paste"
//           }
//         </button>

//       </div>
//       <div className="mt-8">
//         <textarea
//           className="rounded-2xl mt-4 min-w-[500px] p-4"
//           value={value}
//           placeholder="Enter Content Here"
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//         />
//       </div>
//     </div>
//   )
// }

// export default Home




// Home Component
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  const handlePasteAction = () => {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          className="w-full p-2 mb-2 border rounded-md"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Enter content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={6}
        ></textarea>
        <button
          onClick={handlePasteAction}
          className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {pasteId ? "Update Paste" : "Add Paste"}
        </button>
      </div>
    </div>
  );
};

export default Home;