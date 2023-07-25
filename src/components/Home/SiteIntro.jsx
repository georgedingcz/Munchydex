import { Accordion } from "react-bootstrap";

export default function SiteIntro() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is Munchydex?</Accordion.Header>
        <Accordion.Body>
          <h2>Welcome to Munchydex, your ultimate foodie destination!</h2>
          <p>
            If you're a passionate food lover, an adventurous eater, or simply
            seeking delightful culinary experiences, you've come to the right
            place. Munchydex is a one-of-a-kind website that curates an
            extensive database of food categories, eateries, and genuine reviews
            from food enthusiasts like yourself.
          </p>
          <p>
            Discover a diverse world of flavors and cuisines as Munchydex takes
            you on a gastronomic journey like no other. Whether you're craving
            savory street food, exploring haute cuisine, or indulging in
            delectable desserts, our user-friendly interface allows you to
            easily navigate through a treasure trove of dining options.
          </p>
          <p>
            What sets Munchydex apart is its community-driven approach. We
            believe in the power of real food experiences shared by real people.
            That's why our platform is fueled by honest reviews and ratings from
            fellow foodies, ensuring that you get authentic insights before you
            set out to satisfy your taste buds.
          </p>
          <p>
            Looking for the best pizza joint in town or the hidden gem that
            serves mouthwatering dim sum? Munchydex has got you covered. Our
            meticulously organized food categories and eateries directory make
            it a breeze to find your ideal culinary destination, whether you're
            at home or traveling abroad.
          </p>
          <p>
            So, whether you're a connoisseur seeking new epicurean heights or a
            casual diner looking for a reliable spot to enjoy a great meal,
            Munchydex is here to elevate your dining experiences. Join our
            community today, and let's embark on a flavorful adventure together!
            Bon appétit!
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
