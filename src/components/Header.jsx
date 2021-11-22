const Header = ({ text, styling }) => {
  return (
    <header className={styling}>
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
