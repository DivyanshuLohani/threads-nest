import { FaRegPaperPlane, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export default function Post() {
  return (
    <div className="flex p-5 gap-3">
      <div className="w-1/5">
        <img
          src="https://randomuser.me/api/portraits/women/43.jpg"
          alt="profile image"
          className=" w-14 rounded-full p-1 border"
          draggable={false}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span className="font-bold hover:underline cursor-pointer">
            Username
          </span>
          <span className="text-foreground/30">6h</span>
        </div>

        <div className="content">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            earum tenetur molestias ad quibusdam quae velit. Expedita
            temporibus, repellendus qui voluptates aliquam illum earum officia
            sunt tempora ex magnam rem.
          </span>
        </div>
        {/* <div className="object-contain">
          <img
            src="https://images.unsplash.com/photo-1718039006696-b653fe660e3e?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div> */}

        <div className="mt-10 w-full text-2xl text-foreground/60  justify-self-end">
          <ul className="flex gap-3 w-full -ml-3">
            <li className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300">
              <FaRegHeart /> <span className="text-lg ml-1">10</span>
            </li>
            <li className="hover:text-primary cursor-pointer px-3  py-2 flex items-center justify-center rounded-lg hover:bg-foreground/10 transition-colors duration-300">
              <FaRegComment />
              <span className="text-lg ml-1">10</span>
            </li>
            <li className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300">
              <BiRepost />
              <span className="text-lg ml-1">10</span>
            </li>
            <li className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300">
              <FaRegPaperPlane />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
