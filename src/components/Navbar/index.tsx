import ItemMenu from './components/ItemMenu';
import Logo from './components/Logo';

const Nabvar = () => {
  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8" aria-label="Global">
        <Logo />

        <div className="lg:flex lg:gap-x-12 sm:flex sm:gap-x-3">
          <ItemMenu text="Canchas" href="#" />
          <ItemMenu text="Reservas" href="#" />
          <ItemMenu text="Últimos Horarios" href="#" />
          <ItemMenu text="Cómo funciona" href="#" />
        </div>

        <div className="flex justify-end">
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
            Iniciar sesión
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nabvar;
