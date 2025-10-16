export default function Header() {
  return (
    <header className="bg-orange-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🛍️ Lokrang Marketplace</h1>
      <nav className="flex gap-5">
        <a href="#">Home</a>
        <a href="#">Cart</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  )
}
