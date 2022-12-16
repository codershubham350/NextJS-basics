import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/user.png" alt="User List Logo" width={100} height={100} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/weblisting">User Listing</Link>
    </nav>
  );
};

export default Navbar;
