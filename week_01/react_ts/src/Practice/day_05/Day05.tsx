import { Ex1 } from "./components/Afternoon/Ex1";
import { Ex10 } from "./components/Afternoon/Ex10";
import { Ex2 } from "./components/Afternoon/Ex2";
import { Ex3 } from "./components/Afternoon/Ex3";
import { Ex4 } from "./components/Afternoon/Ex4";
import { Ex5 } from "./components/Afternoon/Ex5";
import { Ex6 } from "./components/Afternoon/Ex6";
import { Ex7 } from "./components/Afternoon/Ex7";
import { Ex8 } from "./components/Afternoon/Ex8";
import { Ex9 } from "./components/Afternoon/Ex9";
import { Caculator } from "./components/HomeWork/Caculator/Caculator";
import { FormRegister } from "./components/HomeWork/FormRegister";
import { ProductGrid } from "./components/HomeWork/ShoppingCart/components/ProductGrid";
import styles from "./Day05.module.css";

export const Day05 = () => {
  return (
    <div className={styles.container}>
      {/* <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
      <Ex6 />
      <Ex7 />
      <Ex8 />
      <Ex9 />
      <Ex10 /> */}
      {/* <Caculator /> */}
      {/* <FormRegister /> */}
      <ProductGrid />
    </div>
  );
};
