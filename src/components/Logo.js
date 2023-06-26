import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="font-bold text-xl tracking-wide hover:tracking-widest mr-5 transform-all ease-in-out duration-700"
      href="/"
    >
      Knox Restoration
    </Link>
  );
};

export default Logo;
