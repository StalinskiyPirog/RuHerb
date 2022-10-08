import Link from "next/link";
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
export default function StarRating({ i }) {
  return (
    <ul className=" justify-center inline-block">
      {() => {
        for (var s = 1; s < 6; s++) {
          s>i? <AiOutlineStar /> :<AiFillStar />;
        }
      }}
    </ul>
  );
}
