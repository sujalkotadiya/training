import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ViewPaste = () => {

  const { id } = useParams()

  const allpastes = useSelector((state) => state.paste.pastes)
  const paste = allpastes.find((p) => p._id === id)

  return (
    <div>
      <div className="flex flex-row gap-7">
        <input
          className="p-1 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="enter title here"
          value={paste?.title || ""}
          disabled
        />
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={paste?.content || ""}
          disabled
          placeholder="Enter Content Here"
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
