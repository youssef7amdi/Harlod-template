import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

function SmallNav({ isShow, onShow }) {
  return (
    <div className="small-nav">
      <button className="btn-show-nav" onClick={onShow}>
        {isShow ? <AiOutlineClose /> : <SlMenu />}
      </button>
    </div>
  );
}

export default SmallNav;
