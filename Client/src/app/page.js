import Link from 'next/link'
import { cookies } from 'next/headers'

export default function Home() {

  const data = {
    "username": "Aleh12",
    "password": "usertest1"
  }


  async function markAsSeen() {
    'use server'
    let token = "";
    await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then(res => {
      let cookie = res.headers.get('set-cookie')
      var arr = cookie.split(";");
      token = arr[0].split("=")[1];
    })
    console.log(token)
    cookies().set('token', token,
      { httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000
       },
    );
  }

  const viewedWelcomeMessage = cookies().has("viewedWelcomeMessage")
  if (viewedWelcomeMessage) {
    return <div>Welcome back!</div>
  }

  return (
    <main>
      <form action={markAsSeen}>
        Welcome!
        <button type="submit">Mark as seen</button>
      </form>
      <Link href="/api/auth/login">login</Link>
    </main>
  );
}
