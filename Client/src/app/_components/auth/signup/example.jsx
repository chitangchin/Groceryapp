import React from 'react'

const example = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
<div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="your@email.com"
    required
  />
</div>
<div className="mb-6">
  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
    Password
  </label>
  <input
    id="password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="********"
    required
  />
</div>
{errorMsg && (
  <div className="text-red-500 text-sm mb-4">{errorMsg}</div>
)}
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Sign In
  </button>
  <a href="/forgot-password" className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800">
    Forgot Password?
  </a>
</div>
</form>
    </div>
  )
}

export default example
