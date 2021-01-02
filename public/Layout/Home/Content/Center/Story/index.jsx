import { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

const Story = [
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    story_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    story_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    story_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    story_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
    story_img:
      "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];
// Import icon
import ArrowRight_icon from "../../../../../img/icon/Nav_icon/ArrowRight_Icon";
import Add_icon from "../../../../../img/icon/Nav_icon_Right/Add_Filled_Icon";

const Story_Content = () => {
  const [move_Img, setMove_img] = useState(false);

  const moveImg_active = () => {
    return setMove_img(!move_Img);
  };
  return (
    <ul className="flex justify-center items-center space-x-2 relative mx-auto  max-w-3xl ">
      <li className="  bg-white h-auto w-28 rounded-lg shadow-md relative z-50 cursor-pointer transition ease-out pb-3">
        <div
          onMouseEnter={moveImg_active}
          onMouseOut={moveImg_active}
          className=" duration-300 absolute h-full w-full hover:bg-black  z-10 opacity-20 rounded-lg"
        />
        <div className="z-50 ">
          <img
            className={`${
              move_Img ? " " : ""
            } object-center rounded-t-lg  transform  duration-500 z-10 `}
            src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.0-9/42601117_10217033144171665_704951334687735808_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=plD7uC4gMqAAX8eMHTV&_nc_ht=scontent.ffco2-1.fna&oh=9a15724df4a078969c5808ce28fbd88a&oe=600E38F3"
          />
        </div>

        <div className=" absolute inset-x-0  mx-auto -mt-4  h-8 w-8 p-2 text-white bg-facebook_blue rounded-full ring-4 ring-white">
          <Add_icon />
        </div>
        <h2 className=" mt-5 mx-auto text-center w-full px-5 font-medium">
          Create a Story
        </h2>
      </li>

      {Story.map((item) => (
        <li
          key={item.id}
          className="bg-white h-48 w-28 rounded-lg shadow-md relative z-50 cursor-pointer transition ease-out pb-3"
        >
          <div
            onMouseEnter={moveImg_active}
            onMouseOut={moveImg_active}
            className=" duration-300 absolute h-full w-full hover:bg-black  z-10 opacity-20 rounded-lg"
          />
          <div className=" h-48 absolute">
            <img
              className={`${
                move_Img ? " " : ""
              } object-center object-cover rounded-lg h-full transform  duration-500 z-10 `}
              src={item.story_img}
            />
          </div>
          <div className="absolute inset-x-0 top-3 left-3   h-9 w-9   ring-facebook_blue ring-2 rounded-full ring-4 ring-white">
            <img
              src={item.user_photo}
              className=" object-left object-cover rounded-full h-full w-full"
            />
          </div>
          <h2 className=" absolute inset-x-0 bottom-2 mx-auto  text-center text-white z-50 capitalize ">
            {item.fName} {item.lName}
          </h2>
        </li>
      ))}
      <button
        type="button"
        className=" border border-gray-300 focus:outline-none hover:bg-gray-100 w-12 h-12 rounded-full bg-white flex justify-center items-center p-3.5 absolute top-1/3 right-0 z-50 shadow-md"
      >
        <ArrowRight_icon />
      </button>
    </ul>
  );
};

export default Story_Content;
