import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Quiz App
      </h2>

      <div style={styles.right}>
        {user ? (
          <>
            <span style={styles.username}>
              {user?.name || "User"}
            </span>

            <button style={styles.btn} onClick={() => navigate("/dashboard")}>
              Dashboard
            </button>

            {user.role === "admin" && (
              <button style={styles.btn} onClick={() => navigate("/admin")}>
                Admin
              </button>
            )}

            <button style={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button style={styles.btn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button style={styles.btn} onClick={() => navigate("/signup")}>
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "#fff",
    alignItems: "center"
  },
  right: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  btn: {
    padding: "6px 12px",
    cursor: "pointer"
  },
  logout: {
    padding: "6px 12px",
    background: "red",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  username: {
    marginRight: "10px"
  }
};

export default Navbar;