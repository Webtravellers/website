import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, ModalBody, ModalHeader, Progress } from "reactstrap";
import LocationService from "../../services/locationService";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const NewLocationCommentModal = ({ newComment, setNewComment }) => {
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const locationService = new LocationService();
  const { user } = useSelector((state) => state.auth);
    console.log(id)
  const newCommentHandler = () => {
    setLoading(true);
    const data = {
      comment: comment,
      user: user._id,
      score: score,
    };
    locationService
      .newCommentAtLocation(id, data)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setComment("");
        setNewComment(false);
        setLoading(false);
      });
  };
  console.log(score)
  return (
    <Modal
      isOpen={newComment}
      onClosed={() => setNewComment(false)}
      maxWidth="xl"
    >
      <div className="d-flex flex-column ">
        <ModalHeader>
          <span className="font-medium">Yorum Yap</span>
        </ModalHeader>

        <ModalBody className="d-flex justify-items-center flex-column modal-w ">
          <div className="d-flex flex-column bg-white">
            <div className="py-3">
              <textarea
                className=""
                placeholder="Write a comment..."
                name="comment"
                cols="40"
                rows="12"
                value={comment}
                onChange={(val) => setComment(val.target.value)}
              ></textarea>
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="simple-controlled"
                size="large"
                value={score}
                onChange={(event, newValue) => {
                  setScore(newValue);
                }}
              />
              <div className="d-flex align-items-center justify-content-between">
                <button
                  onClick={() => newCommentHandler()}
                  disabled={loading}
                  className="bg-success text-white px-6  rounded  hover:drop-shadow-lg "
                >
                  {loading ? "Paylaşılıyor..." : "Paylaş"}
                </button>
                <button
                  onClick={() => setNewComment(false)}
                  disabled={loading}
                  className="bg-danger text-white px-6  rounded  hover:drop-shadow-lg "
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default NewLocationCommentModal;
