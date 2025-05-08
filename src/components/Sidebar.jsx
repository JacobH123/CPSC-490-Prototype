import { Link } from "react-router-dom";

export function Sidebar({ isOpen }) {
    return (
      <aside
      className={`
        bg-[#0d1117] text-white w-64 p-4 transition-all duration-300 ease-in-out border-r border-gray-500
        ${isOpen ? "ml-0" : "-ml-64 "}
      `}
    >


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
  