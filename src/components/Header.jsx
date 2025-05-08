export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Dashboard</div>
      <div className="flex gap-4 items-center">
        {/* Dashboard button */}
        <button className="w-8 h-8">
          <img src="/icons/dashboard.png" alt="Dashboard" className="w-full h-full object-contain" />
        </button>

        {/* AI page button */}
        <button className="w-8 h-8">
          <img src="/icons/ai.png" alt="AI Page" className="w-full h-full object-contain" />
        </button>

        {/* Notification bell */}
        <button className="w-8 h-8">
          <img src="/icons/bell.png" alt="Notifications" className="w-full h-full object-contain" />
        </button>

        {/* Avatar placeholder */}
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
      </div>
    </header>
  );
}