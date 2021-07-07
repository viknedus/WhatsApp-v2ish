import { WhatsApp } from "@material-ui/icons";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <WhatsApp
          // style={{ marginBottom: 10 }}
          height="200px"
          width="200px"
          color="primary"
        />
        <Circle color="#3cbc28" size={250} />
      </div>
    </center>
  );
}

export default Loading;
