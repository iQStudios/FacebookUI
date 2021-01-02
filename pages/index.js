import Head from "next/head";

//Import Layout
import LayoutIndex from "../public/Layout/index";
import LayoutHome from "../public/Layout/Home/index";

export default function Home() {
  return (
    <LayoutIndex>
      <LayoutHome />
    </LayoutIndex>
  );
}
