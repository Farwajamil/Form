import BrandIdentity from "./New/BrandIdentity";
import Digital from "./New/Digital";
import Design from "./New/Dsign";
import {Row,Col} from 'antd';
function index() {
  return (
    <Row>
        <Col span={8}>
      <BrandIdentity />
      </Col>
      <Col span={8}>
      <Digital />
      </Col>
      <Col span={8}>
      <Design/>
      </Col>
      </Row>
  );
}
export default index;
