import * as React from "react";
import { CreatList } from "./CreatList";
import { List } from "./List";

export function Index() {
  const [reload, setReload] = React.useState(false);
  const onCreate = (customer: any) => {
    console.log(customer);
    setReload((prev) => !prev);
  };

  return (
    <div>
      <div className="w-[80%]">
        <CreatList onCreate={onCreate} />
      </div>
      <List reload={reload} />
    </div>
  );
}
