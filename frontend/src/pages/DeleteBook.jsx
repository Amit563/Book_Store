import BackButton from "../component/BackButton"
import { useState } from "react"
import Spinner from "../component/Spinner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteSubmit = () => {
        setLoading(true)
        axios.delete(`http://localhost:7000/books/${id}`).then(() => {
            setLoading(false);
            navigate("/");
        }).catch((error) => {
            setLoading(false);
            alert("An error happended. Please Check console")
        })
    }
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col items-center border-2 border-sky-400 rounder-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl">Are You sure you want to delete this book</h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full " onClick={handleDeleteSubmit}>
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteBook