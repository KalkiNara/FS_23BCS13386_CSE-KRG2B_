import Navbar from "@/components/Navbar";
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Manage your artisan profile and products here.
        </p>
      </div>
    </>
  );
}
