import ArrowDown_icon from "../../../../img/icon/Nav_icon/ArrowDown._Icon";

const Menu_list1 = [
  {
    id: 1,
    title: "codid-19 information center",
    icon: "Covid",
  },
  {
    id: 2,
    title: "friends",
    icon: "Friends",
  },
  { id: 3, title: "facebook pay", icon: "Facebook_Pay" },
  { id: 4, title: "marketplace", icon: "Marketplace" },
];
const Menu_list_shourtcuts = [
  {
    id: 1,
    title: "bitcoin italia",
    icon: "bitcoin",
  },
];
const Content_Left = () => {
  return (
    <div className=" h-auto w-full divide-y-2 divide-gray-300">
      <ul className=" px-1 pr-5 py-4">
        <li className="flex space-x-2 justify-start items-center hover:bg-content_menu_hover  py-2 px-2 rounded-lg cursor-pointer">
          <img
            src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.0-1/p148x148/42601117_10217033144171665_704951334687735808_n.jpg?_nc_cat=102&ccb=2&_nc_sid=dbb9e7&_nc_ohc=OUE_aZ-nMl4AX_ETkG1&_nc_ht=scontent.ffco2-1.fna&tp=6&oh=b6939ec4216c6226e5cec981473a0589&oe=600A0F2A"
            className=" rounded-full h-9 w-9"
          />
          <h2 className="font-medium">Mark Ma</h2>
        </li>
        {Menu_list1.map((item) => (
          <li
            key={item.id}
            className="flex space-x-3 justify-start items-center capitalize hover:bg-content_menu_hover py-2 px-2  rounded-lg cursor-pointer"
          >
            <img
              src={`../../../img/icon/Content/Menu_Left/${item.icon}_icon.png`}
            />
            <h2 className="font-medium">{item.title}</h2>
          </li>
        ))}
        <li className="flex space-x-3 justify-start items-center capitalize hover:bg-content_menu_hover py-2 px-2  rounded-lg cursor-pointer">
          <div className="w-9 h-9 p-2.5 bg-menu_top_right rounded-full">
            <ArrowDown_icon />
          </div>
          <h2 className="capitalize font-medium">see more</h2>
        </li>
      </ul>
      <ul className="py-3">
        <h2 className="capitalize font-medium text-2xl text-gray-500 mb-2">
          your shortcuts
        </h2>
        {Menu_list_shourtcuts.map((item) => (
          <li
            key={item.id}
            className="flex space-x-3 justify-start items-center capitalize hover:bg-content_menu_hover py-2 px-2  rounded-lg cursor-pointer"
          >
            <img
              src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.0-0/cp0/c635.0.780.780a/s75x225/109796403_3060422874056029_8724299076679555576_o.png?_nc_cat=104&ccb=2&_nc_sid=ca434c&_nc_ohc=n0oPRmHT4OEAX88OE1Y&_nc_ht=scontent.ffco2-1.fna&_nc_tp=30&oh=0ce5622a62184f7c408bf766fe2e0a30&oe=600B7765"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="font-medium">{item.title}</h2>
          </li>
        ))}
        <li className="flex space-x-3 justify-start items-center capitalize hover:bg-content_menu_hover py-2 px-2  rounded-lg cursor-pointer">
          <div className="w-9 h-9 p-2.5 bg-menu_top_right rounded-full">
            <ArrowDown_icon />
          </div>
          <h2 className="capitalize font-medium">see more</h2>
        </li>
      </ul>
    </div>
  );
};

export default Content_Left;
