import Search_icon from "../../../../img/icon/Search_Icon";
import Camera_icon from "../../../../img/icon/Camera_icon";
import More_icon from "../../../../img/icon/Nav_icon/More_Filled_Icon";

const List_Contact = [
  {
    id: 1,
    fName: "steve",
    lName: "jobs",
    status: "online",
    user_photo:
      "https://www.ilmessaggero.it/photos/MED/92/78/3579278_1121_steve_jobs_bellini_666x340.jpg",
  },
  {
    id: 2,
    fName: "elon",
    lName: "musk",
    status: "occupied",
    user_photo:
      "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
  },
  {
    id: 2,
    fName: "mark",
    lName: "zuckerberg",
    status: "online",
    user_photo:
      "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
  },
  {
    id: 3,
    fName: "jack",
    lName: "ma",
    status: "online",
    user_photo:
      "https://www.startupmag.it/wp-content/uploads/2020/07/jack-ma.jpg",
  },
];

const Content_Right = () => {
  return (
    <div className="h-auto w-full divide-y-2 divide-gray-300">
      <ul className=" px-1 pr-5 py-4">
        <div className="flex justify-between items-center">
          <h2 className="capitalize font-medium text-xl text-gray-500 mb-2">
            contacts
          </h2>
          <ul className="grid grid-cols-3 gap-2">
            <li className="rounded-full p-2 py-2 hover:bg-menu_top_right_hover cursor-pointer flex items-center  justify-center ">
              <Camera_icon />
            </li>
            <li className=" rounded-full p-2 hover:bg-menu_top_right_hover cursor-pointer">
              <Search_icon />
            </li>
            <li className=" rounded-full hover:bg-menu_top_right_hover cursor-pointer w-9 h-9 p-1">
              <More_icon />
            </li>
          </ul>
        </div>
        {List_Contact.map((item) => (
          <li
            key={item.id}
            className="flex space-x-3 justify-start items-center hover:bg-content_menu_hover  py-2 px-2 rounded-lg cursor-pointer "
          >
            <div className="relative">
              <img
                src={item.user_photo}
                className=" rounded-full h-9 w-9 object-cover"
              />
              <span
                className={`${
                  item.status == "online" ? "bg-green-600" : "bg-yellow-500"
                } w-2.5 h-2.5 ring-2 ring-white  rounded-full absolute bottom-0 right-0`}
              />
            </div>

            <h2 className="font-medium capitalize">
              {item.fName} {item.lName}{" "}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content_Right;
