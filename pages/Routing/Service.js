import BrandIdentity from "../New/BrandIdentity";
import Digital from "../New/Digital";
import Design from "../New/Dsign";
import { Row, Col } from "antd";
function Service() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          background: "linear-gradient(to bottom right , #2196f3 , #009688)",
          color: "#fff",
        }}
      >
        This is a Service page
      </h1>
      <Row>
        <Col span={8}>
          <BrandIdentity />
        </Col>
        <Col span={8}>
          <Digital />
        </Col>
        <Col span={8}>
          <Design />
        </Col>
      </Row>
    </div>
  );
}
export default Service;
