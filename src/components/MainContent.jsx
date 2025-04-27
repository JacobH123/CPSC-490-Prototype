export function MainContent() {
    return (
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to your new Free workspace!
          </h1>
          <p className="text-gray-400">
            Your Free plan has been updated to our usage-based system. You can
            now:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Use private Sandboxes, Devboxes and Repositories.</li>
            <li>Collaborate live with up to 5 workspace members.</li>
            <li>
              Code in Devboxes using 400 free credits (up to 40 hours) per month.
            </li>
            <li>
              Use all of our AI features and our VS Code extension for free.
            </li>
          </ul>
          <button className="mt-4 bg-green-500 px-4 py-2 rounded">
            View upgrade options
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-400 mb-4">You have no recent work</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-700 px-4 py-2 rounded">
              Explore templates
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded">
              Import repository
            </button>
          </div>
        </div>
      </main>
    );
  }
  