import Carousel from "react-bootstrap/Carousel";
import CardHome from "../UI/CardHome";
import workoutImg from "../Assests/images/workout.jpg";
import healthContentImg from "../Assests/images/health-content.jpg";
import styles from "./Homepage.module.css";
import { bgcolor } from "@mui/system";

const Homepage = () => {
  const page = [
    {
      id: 1,
      title: "Workout Plans",
      description:
        "Managing and creating weekly workout plans for your convenience",
      image: workoutImg,
    },
    {
      id: 2,
      title: "Health Content",
      description: "Managing and creating health content for you routine",
      image: healthContentImg,
    },
  ];

  return (
    <div className={styles.homepage}>
      <Carousel variant="dark" interval={null} indicators={null}>
        <Carousel.Item>
          <CardHome
            title={page[0].title}
            description={page[0].description}
            images={page[0].image}
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardHome
            title={page[1].title}
            description={page[1].description}
            images={page[1].image}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homepage;
