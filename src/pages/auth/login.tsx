import Link from "next/link";
import RegisterPage from "./register";
import { useRouter } from "next/router";
const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum Punya Akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
