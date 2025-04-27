export function Sidebar() {
    return (
      <aside className="bg-gray-900 text-gray-300 w-64 p-4 flex flex-col gap-6">
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-white cursor-pointer">Recent</li>
            <li className="hover:text-white cursor-pointer">Settings</li>
            <li className="hover:text-white cursor-pointer">Invite Members</li>
            <li className="hover:text-white cursor-pointer">Upgrade</li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm uppercase text-gray-400">Repositories</h2>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="hover:text-white cursor-pointer">All repositories</li>
            <li className="hover:text-white cursor-pointer">My contributions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm uppercase text-gray-400">Devboxes</h2>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="hover:text-white cursor-pointer">Drafts</li>
            <li className="hover:text-white cursor-pointer">All folders</li>
            <li className="hover:text-white cursor-pointer">Recently deleted</li>
          </ul>
        </div>
      </aside>
    );
  }
  