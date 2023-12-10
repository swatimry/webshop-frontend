import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import profilepic from "../../assests/profilepic.png";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Brewery</h4>
          <p>Brewing Happiness, One Cup at a Time</p>
          <p>
            Explore the freshly brewed exotic range of coffees and
            milkshakes,Click below to see menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={profilepic} alt="Founder" />
              <h3>Swati</h3>
            </div>
            <p>
              I am Swati Singh, the founder of Brewery,Brewery is my coffee
              dream come to life. With each cup, I share the passion that fuels
              my love for coffee. Join me in savoring the art of coffee at
              Brewery.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;
