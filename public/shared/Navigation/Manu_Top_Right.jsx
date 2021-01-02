import Add_icon from "../../img/icon/Nav_icon_Right/Add_Filled_Icon";
import Message_icon from "../../img/icon/Nav_icon_Right/Message_Top_Icon";
import Notification_icon from "../../img/icon/Nav_icon_Right/Notification_Top_Icon";
import Caret_Down_icon from "../../img/icon/Nav_icon_Right/Caret_Down_Icon";

const Menu_list = [
  {
    id: 1,
    title: "add",
  },
  {
    id: 2,
    title: "message",
  },
  {
    id: 3,
    title: "notification",
  },
  {
    id: 4,
    title: "caret_down",
  },
];

function menuItem(title) {
  switch (title) {
    case "add":
      return <Add_icon />;
    case "message":
      return <Message_icon />;
    case "notification":
      return <Notification_icon />;
    case "caret_down":
      return <Caret_Down_icon />;
  }
}

const Menu_Top_Right = () => {
  return (
    <div className="  h-full ">
      <ul className="flex justify-center items-center space-x-2">
        <li className="flex  items-center space-x-1  mr-2">
          <div className=" h-10 w-10 p-1">
            <img
              src="https://scontent.fmxp6-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/42601117_10217033144171665_704951334687735808_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=ibB2LQhoNjAAX8SgBBa&_nc_ht=scontent.fmxp6-1.fna&tp=27&oh=d91cad49b6b45047d06209b82d939fea&oe=60073D22"
              className="rounded-full h-full w-full "
            />
          </div>
          <h3>Mark</h3>
        </li>
        {Menu_list.map((item) => (
          <li
            key={item.id}
            className=" cursor-pointer h-full p-2.5 h-10 w-10 rounded-full bg-menu_top_right hover:bg-menu_top_right_hover "
          >
            {menuItem(item.title)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu_Top_Right;
