import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
       home
      </div>
      <Link href="/login">login</Link>
    </main>
  );
}
