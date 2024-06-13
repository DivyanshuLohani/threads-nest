import { FormEvent, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import api from "../api/api";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isUsernameAvailable, setIsAvailable] = useState(true);
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        email,
        password,
        fullName: name,
      });
      const { access, refresh } = response.data as {
        access: string;
        refresh: string;
      };
      const userResponse = await api.get("/auth/user", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setAuth(userResponse.data);

      sessionStorage.setItem("access", access);
      sessionStorage.setItem("refresh", refresh);

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const checkUsername = async () => {
    if (!username) return;
    try {
      await api.get(`/u/${username}`);
      setIsAvailable(true);
    } catch (e) {
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    checkUsername();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Signup to Threads</h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/50"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jhon Doe"
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-foreground/50"
            >
              Username
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              required
              placeholder="@jhondoe"
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {!isUsernameAvailable && (
              <span className="text-red-900">Not Awailable</span>
            )}
          </div>
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

          <div>
            <Button className="w-full text-lg">Sign Up</Button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-foreground/50">
          Already have an Account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-primary hover:text-primary/50 transition-colors duration-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
