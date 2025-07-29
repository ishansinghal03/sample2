function landing() {

  return (
    <div>
    <header className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Online Exam Portal</h1>
        <nav className="flex space-x-4 text-white">
          <a href="/login" className="hover:underline">
            Login
          </a>
          <a href="/register" className="hover:underline">
            Register
          </a>
        </nav>
      </div>
  </header>

    </div>
  )
}

export default landing
