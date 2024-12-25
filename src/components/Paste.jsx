import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

const paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes)
  const [searchTerm, setSearchTerm] = useState('')
  // const dispatch = useDispatch()

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div key={paste.id}
                  className="border ">
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className="flex flex-row gap-4 justify-evenly">
                    <button>Edit</button>
                    <button>View</button>
                    <button>Delete</button>
                    <button>Copy</button>
                    <button>Share</button>
                  </div>
                  <div>
                    {paste.createdAt}
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default paste
