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
            <li><Link to="/aiassiant" className="hover:text-white">AI Assistant</Link></li>
            <li><Link to="/goals" className="hover:text-white">Goals</Link></li>
            <li><Link to="/budgets" className="hover:text-white">Budget Plans</Link></li>
            <li><Link to="/trends" className="hover:text-white">Trends</Link></li>
            <li><Link to="/settings" className="hover:text-white">Settings</Link></li>
          </ul>
        </nav>
      </aside>
    );
  }
  