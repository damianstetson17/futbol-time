import { ItemMenuProps } from './types';

const ItemMenu = ({ text, href }: ItemMenuProps) => {
  return (
    <a href={href} className="text-md font-semibold leading-6 text-stone-200 hover:text-emerald-700">
      {text}
    </a>
  );
};

export default ItemMenu;
