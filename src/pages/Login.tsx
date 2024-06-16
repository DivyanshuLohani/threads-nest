import { FormEvent, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../api/data";
import { loginUser } from "../api/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from: string | null = location.state?.from;

  useEffect(() => {
    const accessToken = sessionStorage.getItem("access") as string;
    if (!auth && accessToken) {
      getUserData().then((d) => {
        setAuth(d);
        navigate(from ?? "/");
      });
    }
  }, [auth, navigate, setAuth, from]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginUser(email, password);

      const userResponse = await getUserData();
      setAuth(userResponse);

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login to Threads</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/50"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jhondoe@example.com"
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground/50"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center"></div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <Button className="w-full text-lg">Sign In</Button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-foreground/50">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-primary hover:text-primary/50 transition-colors duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
