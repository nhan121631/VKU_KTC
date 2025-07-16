import Image from "next/image";
import LoginForm from "../components/FormLogin";

export default function LoginPage() {
  // const { setUser } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#e3f2fd] to-[#f1f5ff] px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <Image
            width={500}
            height={500}
            src="/images/login.png"
            alt="Login illustration"
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#7f7fd5]">
            Đăng nhập
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
