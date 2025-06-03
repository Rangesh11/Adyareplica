import Leftpannal from "./Leftpannal";
import Form from "./Form";

const DemoPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <Leftpannal />
      <Form />
    </div>
  );
};

export default DemoPage;
