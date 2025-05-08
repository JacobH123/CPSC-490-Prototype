import { Link } from "react-router-dom";

export function Sidebar() {
    return (
      <aside className="bg-gray-900 text-white w-64 p-4 flex flex-col gap-6 hidden md:flex rounded-lg">

        <nav>
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="hover:text-white">AI Assistant</Link></li>
            <li className="hover:text-white cursor-pointer">Goals</li>
            <li className="hover:text-white cursor-pointer">Budget Plans</li>
            <li className="hover:text-white cursor-pointer">Trends</li>
            <li><Link to="/settings" className="hover:text-white">Settings</Link></li>
          </ul>
        </nav>
      </aside>
    );
  }
  