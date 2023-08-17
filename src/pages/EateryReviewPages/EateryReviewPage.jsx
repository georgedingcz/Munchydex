import CreateReviewForm from "../../components/Review/CreateReviewForm";
import UpdateReviewForm from "../../components/Review/UpdateReviewForm";
import ReviewListPerUser from "../../components/Review/ReviewListPerUser";
import DeleteReviewForm from "../../components/Review/DeleteReviewForm";
import { Container, Tab, Tabs } from "react-bootstrap";

export default function EateryReview() {
  return (
    <Container>
      <Tabs defaultActiveKey="createReview" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createReview" title="Create Review">
          <CreateReviewForm />
        </Tab>
        <Tab eventKey="updateReview" title="Update Review">
          <UpdateReviewForm />
        </Tab>
        <Tab eventKey="deleteReview" title="Delete Review">
          <DeleteReviewForm />
        </Tab>
      </Tabs>
      <ReviewListPerUser />
    </Container>
  );
}
