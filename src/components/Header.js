import { LOGO, USER } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-20 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44"
      src={LOGO}/>

      <div className="flex p-2 gap-3">
        <img className="h-12 w-12" src={USER}/>
        <button className="font-bold">(Sign Out)</button>
      </div>
    </div> 
  );
}

export default Header;


