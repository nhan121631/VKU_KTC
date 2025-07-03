import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
type Props = {
  isLike?: boolean;
};

export const ButtonLike = ({ isLike = false }: Props) => {
  const [like, setLike] = React.useState(isLike);
  const handleClick = () => {
    setLike((prev) => !prev);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>
        {like ? <AiOutlineLike /> : <AiFillLike />}
      </button>
      <span>
        {like ? "Click like if this post is useful to you !" : "Thank you !"}
      </span>
    </div>
  );
};
