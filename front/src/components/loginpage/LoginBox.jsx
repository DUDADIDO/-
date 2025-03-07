import { useState } from "react";

export default function LoginBox() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("ID:", id, "Password:", password);
  };

  return (
    <main className="flex justify-center items-center bg-gray-100">
      <div className="relative w-full max-w-3xl">
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-appBlue2 to-appBlue1 -rotate-6 z-0 rounded-2xl"></div>
        <div className="relative z-10 shadow-lg rounded-2xl bg-white p-8">
          <div className="flex gap-[5vw] items-center min-w-[40vw] pl-[3vw]">
            <img src="/chunsik.png" alt="image" />
            <div className="flex flex-col gap-10">
              <div className="flex flex-col">
                <label htmlFor="id" className="text-gray-600">
                  아이디
                </label>
                <input
                  id="id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-appBlue1"
                  placeholder="아이디"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-600">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-appBlue1"
                  placeholder="비밀번호"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly mt-10">
            <button
              onClick={handleLogin}
              className="bg-appBlue2 text-white font-bold py-2 px-6 rounded-lg hover:bg-appBlue1 transition duration-300"
            >
              로그인
            </button>
            <button className="bg-appBlue2 text-white font-bold py-2 px-6 rounded-lg hover:bg-appBlue1 transition duration-300">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
