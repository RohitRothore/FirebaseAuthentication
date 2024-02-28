import { Inter } from "next/font/google";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};


