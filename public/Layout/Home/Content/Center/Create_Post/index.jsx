import React from "react";

import Post_Content from "./Post/index";

const Post = [
  {
    id: 1,
    fName: "elon ",
    lName: "musk",
    user_photo:
      "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
    public_time: "1h",
    title: "Dogecoin on the moon!!🚀 🚀 🚀  🌑🌑 🚀  🚀 🚀",
    geoIp_address: "new york (USA)",
    with_post: "crypto",
    post_img:
      "https://images.vice.com/motherboard/content-images/article/12266/1400183979256723.jpg?crop=1xw:0.9xh;center,center",
    like: "3",
  },
  {
    id: 2,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    public_time: "30 minutes",
    title: "New iPhone 12!!",
    geoIp_address: "cupertino (USA)",
    with_post: "Apple",
    post_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    like: "112",
  },
];

const Create_Post = () => {
  return (
    <React.Fragment>
      <div className="space-y-5">
        <div className="w-full h-auto pt-3 bg-white rounded-lg shadow mx-auto flex flex-col justify-center items-center space-y-4 relative  divide-y divide-gray-300 px-5">
          <div className="flex w-full space-x-3  ">
            <img
              className=" w-10 h-10 rounded-full"
              src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.0-9/42601117_10217033144171665_704951334687735808_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=plD7uC4gMqAAX8eMHTV&_nc_ht=scontent.ffco2-1.fna&oh=9a15724df4a078969c5808ce28fbd88a&oe=600E38F3"
            />
            <input
              type="text"
              className=" placeholder-gray-600 flex-1  bg-gray-200 hover:bg-menu_top_right_hover cursor-pointer px-5 rounded-full"
              placeholder="What's on your mind , Mark?"
            />
          </div>

          <div className=" w-full flex justify-center items-center ">
            <ul className="flex justify-between w-full px-12 py-5 text-gray-600">
              <li className="flex space-x-2 items-center">
                <img
                  src="../../../../../img/icon/Post_icon/Newpost_icon.png"
                  className=" w-8 h-8 object-cover object-top "
                />
                <span className="capitalize ">live video</span>
              </li>
              <li className="flex space-x-2 items-center">
                <img
                  src="../../../../../img/icon/Post_icon/Newpost_icon.png"
                  className=" w-8 h-8 object-cover object-center"
                />
                <span className="capitalize">photo/video</span>
              </li>
              <li className="flex space-x-2 items-center">
                <img
                  src="../../../../../img/icon/Post_icon/Newpost_icon.png"
                  className=" w-8 h-8 object-cover object-bottom"
                />
                <span className="capitalize">feeling/activity</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="bg-white h-auto shadow rounded-lg py-3 px-5 flex items-center space-x-4 ">
            <button
              type="button"
              className="flex items-center text-center px-4 py-2 rounded-full  text-blue-500 ring-2 ring-blue-200 font-medium"
            >
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/IxcgCPTMO9J.png"
                className="object-center object-top object-cover w-7 h-6 mr-2"
              />
              <span className="capitalize">create room</span>
            </button>
            <li className="relative ">
              <img
                className=" rounded-full h-10 w-10 border border-gray-400"
                src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.0-9/42601117_10217033144171665_704951334687735808_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=plD7uC4gMqAAX8eMHTV&_nc_ht=scontent.ffco2-1.fna&oh=9a15724df4a078969c5808ce28fbd88a&oe=600E38F3"
              />
              <span className="absolute bottom-0 right-0  w-2.5 h-2.5 ring ring-white bg-green-600 rounded-full" />
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          {Post.map((item) => (
            <Post_Content key={item.id} data={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create_Post;
