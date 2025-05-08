export function Sidebar() {
    return (
      <aside className="bg-gray-900 text-gray-300 w-64 p-4 flex flex-col gap-6">
        <nav>
          <ul className="flex flex-col gap-4">
          <button className="w-8 h-8">
          <img src="/icons/dashboard.png" alt="Dashboard" className="w-full h-full object-contain" />
        </button>
            <li className="hover:text-white cursor-pointer">AI Assistant</li>
            <li className="hover:text-white cursor-pointer">Goals</li>
            <li className="hover:text-white cursor-pointer">Budget Plans</li>
            <li className="hover:text-white cursor-pointer">Trends</li>
            <li className="hover:text-white cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>
    );
  }
  