import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import "./Profile.css"; // Add the CSS file for styling

const Profile = () => {
  const { user, setUser, handleError } = useAuthContext();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    username: user.username,
    displayName: user.displayName,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const formData = new FormData(event.target);
    const { username, displayName } = Object.fromEntries(formData.entries());

    if (username.length > 0 && displayName.length > 0) {
      try {
        setLoading(true);
        const response = await axiosInstance.put(`/users/${user._id}`, {
          username,
          displayName,
        });
        const { data } = response;
        setUser(data);
        toast.success("Profile updated successfully");
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    }

    setValidated(true);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Edit Profile</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={fields.username}
              placeholder="Username"
              onChange={(e) =>
                setFields({ ...fields, username: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              required
              name="displayName"
              value={fields.displayName}
              type="text"
              onChange={(e) =>
                setFields({ ...fields, displayName: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 justify-content-md-center">
          <Col md="auto">
            <Button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
