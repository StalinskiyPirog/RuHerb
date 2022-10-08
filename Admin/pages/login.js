import { useRouter } from "next/router";
import {useState, useEffect} from "react";
import Image from "next/Image";
import { destroyCookie } from "nookies";

export default function LoginPage({}){
  const router = useRouter();
  const [IsLoading,setIsLoading] = useState(false);

  useEffect(() => {
    destroyCookie(null, 'session-key')
    
  }, []);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault()

    const data = {
      password: e.target.password.value,
    }
    fetch("/api/admin.login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/");
      } else {
        router.reload();
      }
    });
  };

    return(<section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
      >{IsLoading?
        <></>:<img
          alt="Pattern"
          src="/design_parts/patternBG.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />}
      </aside>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
        <div className="w-20 h-20 relative">
            <Image
              src="/design_parts/logo.png"
              layout="fill"
              onClick={()=>router.push("/")}
              objectFit="cover"
              href="/profile"
            />{" "}
          </div>
          <h1
            className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Логин
          </h1>
  
  
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Login"
                className="block text-sm font-medium text-gray-700"
              >
                Login
              </label>
  
              <input
                type="text"
                id="Login"
                name="Login"
                disabled
                value="admin"
                className="mt-1 w-full border rounded-md border-black bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
  
            
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
  
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 w-full border rounded-md border-black bg-white text-sm text-black shadow-sm"
              />
            </div>
  
            
  
            
  
            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                Пароль меняется только обладателем сайта
              </p>
            </div>
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
              >
                Войти
              </button>
  
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
  );
}