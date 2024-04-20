import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Home Page
      <Link href="/api/auth/login">login</Link>
    </main>
  );
}
