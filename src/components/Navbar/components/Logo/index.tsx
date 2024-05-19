const Logo = () => {
  return (
    <div className="lg:flex sm:flex md:flex items-center">
      <a href="#" className="-m-1.5 p-1.5 lg:flex sm:flex md:flex text-center items-center">
        <span className="sr-only">Fútbol Time!</span>
        <img className="h-12 w-auto" src="https://www.svgrepo.com/show/68129/soccer-field.svg" alt="" />
      <h1 className="mx-2 text-xl bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
        Fútbol Time
      </h1>
      </a>
    </div>
  );
};

export default Logo;
