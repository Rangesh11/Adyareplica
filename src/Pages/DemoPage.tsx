import Leftpannal from "../Components/Showdemocomponent/Leftpannal";
import Form from "../Components/Showdemocomponent/Form";

const DemoPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Mobile: image at top, then form */}
      <div className="block md:hidden">
        <Form />
      </div>
      {/* Desktop: two columns */}
      <div className="hidden md:grid grid-cols-2 h-full">
        <Leftpannal />
        <Form />
      </div>
    </div>
  );
};

export default DemoPage;
