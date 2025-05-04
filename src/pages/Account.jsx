import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row style={{ display: "block" }}>
        <Heading as="h3">Update user data</Heading>
        <p style={{ marginTop: "10px" }}>Update user data form</p>
      </Row>

      <Row style={{ display: "block" }}>
        <Heading as="h3">Update password</Heading>
        <p style={{ marginTop: "10px" }}>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;
