import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login to Threads</h2>
        <form className="space-y-6">
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
              className="w-full px-3 py-2 mt-1 border rounded-md"
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
              required
              className="w-full px-3 py-2 mt-1 border rounded-md "
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label> */}
            </div>
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
          <a
            href="#"
            className="font-medium text-primary hover:text-primary/50 transition-colors duration-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
