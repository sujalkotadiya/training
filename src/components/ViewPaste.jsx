// import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

// const ViewPaste = () => {

//   const { id } = useParams()

//   const allpastes = useSelector((state) => state.paste.pastes)
//   const paste = allpastes.find((p) => p._id === id)

//   return (
//     <div>
//       <div className="flex flex-row gap-7">
//         <input
//           className="p-1 rounded-2xl mt-2 w-[66%] pl-4"
//           type="text"
//           placeholder="enter title here"
//           value={paste?.title || ""}
//           disabled
//         />
//       </div>
//       <div className="mt-8">
//         <textarea
//           className="rounded-2xl mt-4 min-w-[500px] p-4"
//           value={paste?.content || ""}
//           disabled
//           placeholder="Enter Content Here"
//           rows={20}
//         />
//       </div>
//     </div>
//   )
// }

// export default ViewPaste



const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((p) => p._id === id);

  return (
    <div className="container mx-auto p-4">
    {paste ? (
      <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Title : {paste.title}</h2>
        <p className="whitespace-pre-wrap text-gray-700 mb-4">Content : {paste.content}</p>
        <p className="text-sm text-gray-500">Created At : {new Date(paste.createdAt).toLocaleString()}</p>
        <Link to={"/pastes"} >
        <button className="py-1 border px-5 mt-3 rounded shadow-md bg-blue-500 hover:bg-blue-600 text-white">Back</button>
        </Link>
      </div>
    ) : (
      <p className="text-center text-gray-600">Paste not found</p>
    )}
  </div>
  );
};

export default ViewPaste;
