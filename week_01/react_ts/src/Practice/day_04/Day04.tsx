import { ButtonAccordtions } from "./components/HomeWork/ButtonAccordtions";
import { ButtonItem } from "./components/HomeWork/ButtonTabs/ButtonItem";
import { ButtonTabsInline } from "./components/HomeWork/ButtonTabs/ButtonTabsInline";
import { ButtonTabsOutLine } from "./components/HomeWork/ButtonTabs/ButtonTabsOutLine";
import { ButtonLike } from "./components/HomeWork/LikeButton";
import { SlideThumbnail } from "./components/HomeWork/Slide";
import { RenderList01s } from "./components/List1/RenderList01S";
import { PKlist } from "./components/List4/PKList";
import { Item } from "./components/List5/Item";
import { ListItem } from "./components/List5/List";
import { Rating } from "./components/Rating";
import { ListButton } from "./components/State1/ListButton";
import styles from "./Day04.module.css";
export const Day04 = () => {
  return (
    <div className={styles.container}>
      {/* <RenderList01s /> */}
      {/* 
      <ListButton /> */}
      {/* <PKlist /> */}
      <ListItem />

      {/* HomeWord */}
      {/* <Rating />
      <ButtonLike />
      <SlideThumbnail />
      <ButtonTabsInline />
      <ButtonTabsOutLine />
      <ButtonAccordtions /> */}

      {/* <div>
      </div> */}
    </div>
  );
};
