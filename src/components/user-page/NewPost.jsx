import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal, ModalBody, ModalHeader, Progress } from 'reactstrap';
import { NEW_POST_RESET } from '../../constants/postConstants';
import PostService from '../../services/postService';
import { addNewPost, clearErrors } from '../../store/actions/postActions';


const NewPost = ({ newPost, setNewPost }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { loading, success, error } = useSelector((state) => state.newPost);
    const [loading, setLoading] = useState(false)
    const { id: userId } = useSelector((state) => state.auth);
    const [postImage, setPostImage] = useState("");
    const [postPreview, setPostPreview] = useState("");
    const [caption, setCaption] = useState("");
    const [dragged, setDragged] = useState(false);

    const handleDragChange = () => {
        setDragged(!dragged);
    }

    const handleFileChange = (e) => {
        const reader = new FileReader();
        setPostImage("");
        setPostPreview("")
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPostPreview(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
        setPostImage(e.target.files[0]);
    }

    const newPostSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        if (!postImage) {
            toast.error("Select Image");
            setLoading(false)
            return
        }
        if (!caption.trim()) {
            toast.error("Empty Caption");
            setLoading(false)
            return
        }

        const formData = new FormData();

        formData.set("photo", postImage);
        formData.set("caption", caption)

        const postService = new PostService()
        postService.newPost(userId, formData)
            .then(res => {
                console.log(res.data)
                toast.success(res.data.message);
            })
            .catch(err => {
                console.log(err.response.data)
                toast.error(err.response.data.message);
            })
            .finally(() => {
                setPostImage("");
                setPostPreview("");
                setCaption("");
                setNewPost(false)
                setLoading(false)
            })

        // dispatch(addNewPost(formData));
    }

    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //         dispatch(clearErrors());
    //     }
    //     if (success) {
    //         toast.success("Post Shared");
    //         dispatch({ type: NEW_POST_RESET });
    //         setNewPost(false)

    //         setPostImage("");
    //         setPostPreview("");
    //         setCaption("");
    //     }
    // }, [dispatch, error, success, navigate]);
    return (
        <Modal isOpen={newPost} onClosed={() => setNewPost(false)} maxWidth='xl'>
            <div className="d-flex flex-column ">
                <ModalHeader>
                    <span className="font-medium">Yeni Gönderi Oluştur</span>
                </ModalHeader>

                <ModalBody className="d-flex justify-items-center flex-column modal-w ">

                    {postImage ?
                        <div className="bg-black max-width-40rem ">
                            <img draggable="false" className="max-width-40rem" src={postPreview} alt="post" />
                        </div>
                        :
                        <div onDragEnter={handleDragChange} onDragLeave={handleDragChange} className={`${dragged && 'opacity-40'}  bg-white`}>
                            <svg aria-label="Icon to represent media such as images or videos" color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                            <p className="text-xl">Drag photos and videos here</p>
                            <label className="d-block max-width-40rem">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="" />
                            </label>
                        </div>
                    }

                    <div className="d-flex flex-column  bg-white">
                        <div className="py-3">
                            <textarea
                                className=""
                                placeholder="Write a caption..."
                                name="caption"
                                cols="40"
                                rows="12"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}                            >
                            </textarea>

                            <div className="d-flex align-items-center justify-content-between">
                                <button onClick={newPostSubmitHandler} disabled={loading || !postImage} className="bg-success text-white px-6  rounded  hover:drop-shadow-lg ">
                                    {loading ? "Paylaşılıyor..." : "Paylaş"}
                                </button>
                                <button onClick={() => setNewPost(false)} disabled={loading} className="bg-danger text-white px-6  rounded  hover:drop-shadow-lg ">İptal</button>
                            </div>

                        </div>

                    </div>
                </ModalBody>
            </div>

        </Modal>
    )
}

export default NewPost