import More_icon from "../../../../../../img/icon/Nav_icon/More_Filled_Icon";
import Share_icon from "../../../../../../img/icon/Post_icon/Share";
import Chat_icon from "../../../../../../img/icon/Post_icon/Chat_icon";
import Like_icon from "../../../../../../img/icon/Post_icon/Like_icon";

const Post = (props) => {
  const item = props.data;
  return (
    <div className="h-auto w-full  bg-white rounded-lg shadow space-y-3">
      <div className="px-5">
        <nav className=" w-full h-auto py-3 flex justify-between ">
          <div className="flex justify-start space-x-3 ">
            <img
              src={item.user_photo}
              className="w-11 h-11 object-center object-cover rounded-full"
            />
            <div>
              <h2 className="text-md capitalize font-semibold">
                {item.fName} {item.lName}
                <span className="ml-1 mr-1 font-normal">with </span>
                {item.with_post}
              </h2>

              <p className="text-sm text-gray-500 ">
                {item.public_time} - {item.geoIp_address}
              </p>
            </div>
          </div>
          <div className="h-8 w-8 p-1 text-gray-600 hover:bg-menu_top_right rounded-full cursor-pointer">
            <More_icon />
          </div>
        </nav>
        <h2 className="text-md">{item.title}</h2>
      </div>
      <div>
        <img src={item.post_img} />
        <div className="px-5">
          <div className="py-4 flex justify-between ">
            <div className=" flex justify-center items-center ">
              <ul className="flex space-x-0 mr-3">
                <li>
                  <img src="../../../../../../img/icon/Post_icon/Emoji/like_icon.svg" />
                </li>
                <li>
                  <img src="../../../../../../img/icon/Post_icon/Emoji/heart_icon.svg" />
                </li>
                <li>
                  <img src="../../../../../../img/icon/Post_icon/Emoji/laugh_icon.svg" />
                </li>
              </ul>
              {item.like}
            </div>
            <div className="flex justify-center items-center space-x-3 text-gray-500">
              <div>
                <a href="" className="hover:underline">
                  20 Comment
                </a>
              </div>
              <div>
                <a href="" className="hover:underline">
                  8901 Share
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3  border-t  p-1">
            <div className="w-full ">
              <img src="" />
              <a
                href=""
                className="hover:bg-menu_top_right py-2 rounded-lg w-full text-center flex justify-center items-center"
              >
                <div className="w-5 h-5 mr-2">
                  <Like_icon />
                </div>
                Like
              </a>
            </div>
            <div className="w-full ">
              <img src="" />
              <a
                href=""
                className="hover:bg-menu_top_right py-2 rounded-lg w-full text-center flex justify-center items-center"
              >
                <div className="w-5 h-5 mr-2">
                  <Chat_icon />
                </div>
                Comment
              </a>
            </div>
            <div className=" w-full">
              <a
                href=""
                className="hover:bg-menu_top_right py-2 rounded-lg w-full text-center flex justify-center items-center"
              >
                <div className="w-5 h-5 mr-2">
                  <Share_icon />
                </div>
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
