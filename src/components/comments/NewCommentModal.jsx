import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Modal, ModalBody, ModalHeader, Progress } from 'reactstrap';
import PostService from '../../services/postService';


const NewCommentModal = ({ newComment, setNewComment }) => {
    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState("")
    const { posId } = useParams()
    const postService = new PostService()

    const newCommentHandler = () => {
        const data = {}
        postService.newCommentAtPost(posId, data)

    }
    console.log(comment);
    return (
        <Modal isOpen={newComment} onClosed={() => setNewComment(false)} maxWidth='xl'>
            <div className="d-flex flex-column ">
                <ModalHeader>
                    <span className="font-medium">Yorum Yap</span>
                </ModalHeader>

                <ModalBody className="d-flex justify-items-center flex-column modal-w ">

                    <div className="d-flex flex-column  bg-white">
                        <div className="py-3">
                            <textarea
                                className=""
                                placeholder="Write a comment..."
                                name="comment"
                                cols="40"
                                rows="12"
                                value={comment}
                                onChange={val => setComment(val.target.value)}
                            >
                            </textarea>

                            <div className="d-flex align-items-center justify-content-between">
                                <button onClick={""} disabled={loading} className="bg-success text-white px-6  rounded  hover:drop-shadow-lg ">
                                    {loading ? "Paylaşılıyor..." : "Paylaş"}
                                </button>
                                <button onClick={() => setNewComment(false)} disabled={loading} className="bg-danger text-white px-6  rounded  hover:drop-shadow-lg ">İptal</button>
                            </div>

                        </div>

                    </div>
                </ModalBody>
            </div>

        </Modal>
    )
}

export default NewCommentModal