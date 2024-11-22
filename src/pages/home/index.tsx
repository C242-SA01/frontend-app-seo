import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("auth/login");
    }
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ut
        quidem, excepturi rerum eos ipsa officia maxime perferendis sequi labore
        dolorem dolorum laudantium.
      </p>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </div>
  );
};
export default HomePage;
