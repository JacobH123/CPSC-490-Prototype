export function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">My Workspace</div>
        <div className="flex gap-4">
          <input className="px-2 py-1 rounded" placeholder="Search..." />
          <button className="bg-green-500 px-3 py-1 rounded">Create</button>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>{" "}
          {/* User avatar placeholder */}
        </div>
      </header>
    );
  }
  