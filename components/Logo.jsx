import Link from "next/link";
import Image from "next/image";

const Logo = ({ forClosing }) => {
  return (
    <Link href="/">
      <Image
        onClick={forClosing}
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};

export default Logo;
