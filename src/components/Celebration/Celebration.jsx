import Snowfall from "react-snowfall";
import Nav from "../Nav/Nav";


const Celebration = () => {
    return (
       <>
       <Nav></Nav>
        <div>
           <Snowfall
  // Changes the snowflake color
  color="red"
  // Applied to the canvas element
  style={{ background: '#000000' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={10000}
/>
        </div>
       </>
    );
};

export default Celebration;