import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Home Page
      <Link href="/login">login</Link>
    </main>
  );
}
