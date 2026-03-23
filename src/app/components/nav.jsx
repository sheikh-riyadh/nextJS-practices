import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 px-10 bg-black z-40 p-6">
      <nav>
        <ul className="flex justify-between">
          <Link href={"/"}>
            <li className="hover:underline cursor-pointer">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:underline cursor-pointer">About</li>
          </Link>
          <Link href={"/services"}>
            <li className="hover:underline cursor-pointer">Services</li>
          </Link>
          <Link href={"/post"}>
            <li className="hover:underline cursor-pointer">Post</li>
          </Link>
          <Link href={"/meals"}>
            <li className="hover:underline cursor-pointer">Meals</li>
          </Link>
          <Link href={"/contact-us"}>
            <li className="hover:underline cursor-pointer">Contact US</li>
          </Link>
          <Link href={"/admin-dashboard"}>
            <li className="hover:underline cursor-pointer">Dashboard</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
