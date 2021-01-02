import Story_content from "./Story/index";
import Create_Post from "./Create_Post/index";

const Content_Center = () => {
  return (
    <div className=" w-full px-3 flex flex-col space-y-7  ">
      <div>
        <Story_content />
      </div>
      <div className="max-w-3xl w-full mx-auto px-5">
        <Create_Post />
      </div>
    </div>
  );
};

export default Content_Center;
