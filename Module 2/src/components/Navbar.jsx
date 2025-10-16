export default function Navbar() {
  return (
    <nav className="w-full bg-orange-500 text-white py-3 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Lokrang Dashboard</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  )
}
