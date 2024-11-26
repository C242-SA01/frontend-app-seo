import { useRouter } from "next/router";
import Navbar from "../Navbar";
type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  // Tentukan apakah halaman saat ini adalah beranda
  const isHomePage = pathname === "/";

  return (
    <main>
      {/* Hanya render Navbar jika URL tidak termasuk dalam `disableNavbar` */}
      {!disableNavbar.includes(pathname) && <Navbar isHomePage={isHomePage} />}
      {children}
    </main>
  );
};

export default AppShell;
