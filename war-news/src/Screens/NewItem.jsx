import "../style/styles.css";
import Box from "@mui/material/Box";

// import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { getDonation, updateDonation, deleteDonation } from "../HTTP/http.js";
// import ClipLoader from "react-spinners/ClipLoader";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

const NewItem = () => {
  //   const [id, setId] = useState("");
  //   const [donation, setDonation] = useState(null);
  //   const [notFound, setNotFound] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [isEditing, setIsEditing] = useState(false);
  //   const [editedDonation, setEditedDonation] = useState(null);
  //   const [successMessage, setSuccessMessage] = useState("");
  //   const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  //   useEffect(() => {
  //     if (editedDonation && successMessage) {
  //       const timeout = setTimeout(() => {
  //         setSuccessMessage("");
  //       }, 3000);

  //       return () => clearTimeout(timeout);
  //     }
  //   }, [editedDonation, successMessage]);

  //   const handleInputChange = (event) => {
  //     setId(event.target.value);
  //   };

  //   const handleSearch = () => {
  //     setLoading(true);
  //     getDonation(id)
  //       .then((data) => {
  //         if (data) {
  //           setDonation(data);
  //           setNotFound(false);
  //         } else {
  //           setDonation(null);
  //           setNotFound(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setNotFound(true);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (id.trim() !== "") {
  //       handleSearch();
  //     } else {
  //       setDonation(null);
  //       setNotFound(false);
  //     }
  //   };

  //   const handleEdit = () => {
  //     setIsEditing(!isEditing);
  //     setEditedDonation(donation);
  //   };

  //   const handleEditChange = (event) => {
  //     const { name, value } = event.target;
  //     setEditedDonation((prevDonation) => ({
  //       ...prevDonation,
  //       [name]: value,
  //     }));
  //   };

  //   const handleEditSubmit = (event) => {
  //     event.preventDefault();
  //     updateDonation(editedDonation)
  //       .then(() => {
  //         setDonation(editedDonation);
  //         setIsEditing(false);
  //         setSuccessMessage("Donation updated successfully !");
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   const handleDelete = () => {
  //     setDeleteConfirmation(true);
  //   };

  //   const handleConfirmDelete = () => {
  //     deleteDonation(id)
  //       .then(() => {
  //         setSuccessMessage("Donation deleted successfully !");
  //         setDonation(null);
  //         setId("");
  //       })
  //       .catch((err) => console.log(err));
  //     setDeleteConfirmation(false);
  //   };

  //   const handleCancelDelete = () => {
  //     setDeleteConfirmation(false);
  //   };

  return (
    <Box className="content-box">
      <h1 className="title">New Article</h1>
      <Box className="items-container">new item</Box>
    </Box>
  );
};

export default NewItem;
