import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";
import ForYou from "./for-you";
export default function Home() {
  return (
    <>
      <StickyHeader></StickyHeader>
      <Tab activeTab="for-you">
        <Tab.Items>
          <Tab.Item id="for-you">For you</Tab.Item>
          <Tab.Item id="followings">Followings</Tab.Item>
        </Tab.Items>
        <Tab.Content id="for-you">
          <ForYou></ForYou>
        </Tab.Content>
        <Tab.Content id="followings">2.Content</Tab.Content>
      </Tab>

    </>
  );
}
