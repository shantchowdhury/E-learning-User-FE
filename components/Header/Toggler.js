import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Toggler = ({ fn, isMenuOpen }) => {
  return (
    <button className={style} onClick={fn}>
      {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
};

const style = 'rounded-full p-2 hover:bg-white/10 duration-300 text-[white] ml-auto text-2xl lg:hidden';

export default Toggler;
