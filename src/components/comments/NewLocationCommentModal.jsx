import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, ModalBody, ModalHeader, Progress } from "reactstrap";
import LocationService from "../../services/locationService";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import LocationPage from "../../pages/LocationPage";
import { useTranslation } from "react-i18next";

const NewLocationCommentModal = ({ newComment, setNewComment }) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const locationService = new LocationService();
  const { user } = useSelector((state) => state.auth);
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
        setScore("")
        setComment("");
        setNewComment(false);
        setLoading(false);
      });
  };
  return (
    <Modal
      isOpen={newComment}
      onClosed={() => setNewComment(false)}
      maxWidth="xl"
    >
      <div className="d-flex flex-column ">
        <ModalHeader>
          <span className="font-medium">{t("new-comment-modal.leave-a-comment")}</span>
        </ModalHeader>

        <ModalBody className="d-flex justify-items-center flex-column modal-w ">
          <div className="d-flex flex-column bg-white">
            <div className="py-3">
              <textarea
                className=""
                placeholder={t("new-comment-modal.write-a-comment-placeholder")}
                name="comment"
                cols="40"
                rows="12"
                value={comment}
                onChange={(val) => setComment(val.target.value)}
              ></textarea>
              <Typography component="legend">{t("new-comment-modal.give-score")}</Typography>
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
                  {loading ? `${t("new-comment-modal.sharing")}` : `${t("new-comment-modal.share")}`}
                </button>
                <button
                  onClick={() => setNewComment(false)}
                  disabled={loading}
                  className="bg-danger text-white px-6  rounded  hover:drop-shadow-lg "
                >
                  {t("new-comment-modal.cancel")}
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
