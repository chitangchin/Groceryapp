import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/api/auth/login">login</Link>
    </main>
  );
}
