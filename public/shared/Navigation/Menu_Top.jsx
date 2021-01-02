import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Home_icon from "../../img/icon/Nav_icon/Home_Top_Icon";

import Page_icon from "../../img/icon/Nav_icon/Page_Top_Icon";

import Watch_icon from "../../img/icon/Nav_icon/Watch_Top_Icon";

import Marketplace_icon from "../../img/icon/Nav_icon/Marketplace_Top_Icon";

import Group_icon from "../../img/icon/Nav_icon/Group_Top_Icon";

const switch_icon = (title) => {
  switch (title) {
    case "home":
      return <Home_icon />;
    case "page":
      return <Page_icon />;
    case "watch":
      return <Watch_icon />;
    case "marketplace":
      return <Marketplace_icon />;
    case "group":
      return <Group_icon />;
  }
};

const Menu_Top = (props) => {
  const router = useRouter();

  const { menu } = router.query;

  const menu_list = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "page",
    },
    {
      id: 3,
      title: "watch",
    },
    {
      id: 4,
      title: "marketplace",
    },
    {
      id: 5,
      title: "group",
    },
  ];
  const MenuItem = (props) => {
    const item = props.item;

    return (
      <Link
        href={{
          pathname: router.pathname,
          query: { menu: item.title },
        }}
        passHref
      >
        <li
          className={`${
            item.title == menu
              ? "text-menu_active border-menu_active"
              : "border-white"
          } px-8 xl:px-12 h-11 border-b-3 cursor-pointer `}
        >
          {switch_icon(item.title)}
        </li>
      </Link>
    );
  };

  return (
    <React.Fragment>
      <div className=" h-full">
        <ul className="flex justify-center items-center pt-3 flex-wrap  ">
          {menu_list.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Menu_Top;
