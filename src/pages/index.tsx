import Link from "next/link";

export default function Home() {

  return (
    <>
      <Link href="/" className="mx-2">Home</Link>
      <Link href="/city" className="mx-2">City</Link>
      <Link href="/address" className="mx-2">Address</Link>
    </>
  );
}
