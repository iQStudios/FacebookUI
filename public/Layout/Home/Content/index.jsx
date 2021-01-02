import Content_Left from "./Left/index";
import Content_Center from "./Center/index";
import Content_Right from "./Right/index";

const ContentHome = () => {
  return (
    <div className="border   p-3 h-auto grid grid-cols-4 ">
      <div>
        <Content_Left />
      </div>
      <div className=" col-span-2">
        <Content_Center />
      </div>
      <div>
        <Content_Right />
      </div>
    </div>
  );
};

export default ContentHome;
