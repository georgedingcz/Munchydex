import { Accordion } from "react-bootstrap";

export default function SiteIntro() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is Munchydex?</Accordion.Header>
        <Accordion.Body>
        Here you are, reading this entry, expecting a creative explanation for the website, but alas! It is just a jumble of text. All it was for me was to try out the accordion feature.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
