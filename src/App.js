// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// // import Dashboard from "./pages/Dashboard";
// // import Logout from "./pages/Logout";

// function App() {
//   return (
//     // <Router>
//       <div>
//         <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
//           <Link to="/">
//             <img alt="Logo" className="h-10" />
//           </Link>
//           <div className="flex gap-6">
//             <Link to="/" className="hover:text-cyan-400">Home</Link>
//             <Link to="/about" className="hover:text-cyan-400">About</Link>
//             <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
//             <Link to="/signup" className="hover:text-cyan-400">Signup</Link>
//             <Link to="/login" className="hover:text-cyan-400">Login</Link>
//           </div>
//         </nav>

//         <div className="p-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             {/* <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/logout" element={<Logout />} /> */}
//           </Routes>
//         </div>
//       </div>
//     // </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <NavLink to="/" className="text-2xl font-extrabold text-cyan-400 tracking-wider hover:text-cyan-300 transition duration-300">
              MyApp
            </NavLink>

            <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 underline" : "hover:text-cyan-400 transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 underline" : "hover:text-cyan-400 transition duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 underline" : "hover:text-cyan-400 transition duration-300"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 underline" : "hover:text-cyan-400 transition duration-300"
                }
              >
                Signup
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 underline" : "hover:text-cyan-400 transition duration-300"
                }
              >
                Login
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-5xl mx-auto mt-10 p-4 md:p-8 bg-white rounded-xl shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </main>
      </div>
   
  );
}

export default App;

