import { NavLink } from "@remix-run/react";

const Header = () => {
  return (
    <div className="flex gap-5 justify-center items-center text-xl shadow-xl rounded-lg p-4 w-full">
      <NavLink to="/pdfViewer">PdfViewer </NavLink>
      <NavLink to="/hello1">HelloWorld1 </NavLink>
      <NavLink to="/hello2">HelloWorld2 </NavLink>
    </div>
  );
};

export default Header;
