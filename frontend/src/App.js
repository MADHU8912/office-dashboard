export default function Dashboard() {
  const cards = [
    { title: 'Total Users', value: '8,679', color: 'from-blue-200 to-blue-400' },
    { title: 'Active Projects', value: '230', color: 'from-green-200 to-green-400' },
    { title: 'Daily Active Users', value: '8,679', color: 'from-purple-200 to-purple-400' },
    { title: 'Revenue', value: '$45,230', color: 'from-orange-200 to-orange-400' },
    { title: 'New Employees', value: '123', color: 'from-pink-200 to-pink-400' },
    { title: 'Online Now', value: '80', color: 'from-cyan-200 to-cyan-400' },
    { title: 'Pending Tasks', value: '23', color: 'from-red-200 to-red-400' },
    { title: 'Tasks Completed', value: '452', color: 'from-indigo-200 to-indigo-400' },
  ];

  const users = [
    {
      name: 'Habiba Phiuli',
      country: 'Saudi Arabia',
      status: '2 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Adil Rashid',
      country: 'Egypt',
      status: '30 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Oksana',
      country: 'Ukraine',
      status: '1 hour ago',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">

        {/* Top Navbar */}
        <div className="flex items-center justify-between px-8 py-5 border-b bg-gray-50">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm">IT Office Admin Control Center</p>
          </div>

          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search here"
              className="bg-white border border-gray-200 rounded-full px-5 py-2 w-80 outline-none"
            />

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="admin"
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <h2 className="font-semibold">Admin User</h2>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">

          {/* Sidebar */}
          <div className="w-72 bg-white border-r min-h-screen p-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                IT
              </div>
              <div>
                <h2 className="font-bold text-lg">IT Office</h2>
                <p className="text-gray-400 text-sm">Admin Dashboard</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                'Dashboard',
                'Employees',
                'Projects',
                'Tasks',
                'Attendance',
                'Notifications',
                'Analytics',
                'Docker Logs',
                'Settings',
              ].map((item, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 rounded-xl cursor-pointer transition-all ${
                    index === 0
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <button className="mt-16 w-full bg-red-100 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-200 transition-all">
              Logout
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 bg-gray-50">

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${card.color} rounded-2xl p-5 shadow-md`}
                >
                  <h3 className="text-gray-700 font-medium">{card.title}</h3>
                  <p className="text-3xl font-bold mt-3 text-gray-900">
                    {card.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    +12.5% last month
                  </p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">User Growth</h2>

                <div className="h-72 bg-gradient-to-b from-purple-200 to-white rounded-2xl flex items-end p-5 gap-2">
                  {[20, 30, 35, 50, 70, 90, 40].map((h, i) => (
                    <div
                      key={i}
                      className="bg-purple-600 rounded-t-xl w-full"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Project Activity</h2>

                <div className="h-72 bg-gradient-to-b from-cyan-200 to-white rounded-2xl flex items-end p-5 gap-2">
                  {[10, 20, 40, 60, 80, 85, 35].map((h, i) => (
                    <div
                      key={i}
                      className="bg-cyan-500 rounded-t-xl w-full"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Employee Table */}
            <div className="mt-8 bg-white rounded-3xl shadow-md p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Employee List</h2>
                <button className="text-purple-600 font-semibold">
                  See all
                </button>
              </div>

              <div className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-14 h-14 rounded-full"
                      />

                      <div>
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <p className="text-gray-500 text-sm">Employee</p>
                      </div>
                    </div>

                    <div className="text-gray-600">{user.country}</div>

                    <div className="text-gray-400 text-sm">{user.status}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
