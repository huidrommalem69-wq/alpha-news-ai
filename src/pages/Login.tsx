export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded mb-2 w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded mb-4 w-64"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}