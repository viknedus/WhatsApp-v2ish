import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { ThreeBounce } from "better-react-spinkit";

export default function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <WhatsAppIcon
          fontSize="large"
          // height={200}
          // width={80}
          color="primary"
        />{" "}
        <ThreeBounce color="#3cbc28" size={20} />
      </div>
    </center>
  );
}
