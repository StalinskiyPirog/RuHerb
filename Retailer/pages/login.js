import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
        email: e.target.email.value,
        password: e.target.password.value,
      }
      fetch("/api/retailer.profile.login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          router.push("/lk");
        } else {
          router.reload();
        }
      });
    };

  return(<main className="bg-white font-family-karla h-screen">

  <div className="w-full flex flex-wrap">

      <div className="w-full md:w-1/2 flex flex-col">

          <div className="flex relative w-32 h-32 justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
              
              <Link href="/client" className="bg-black text-white font-bold text-xl p-4">
                <Image
                  src="/design_parts/logo.png"
                  href="/"
                  layout="fill"
                  objectFit="cover"
                  alt="/"
                />
              </Link>
          </div>
          
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p className="text-center text-3xl">Авторизация</p>
              <form className="flex flex-col pt-3 md:pt-8" onSubmit="event.preventDefault();">
                  <div className="flex flex-col pt-4">
                      <label htmlFor="email" className="text-lg">Email</label>
                      <input
                  required
                  type="email"
                  name="email"
                  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  placeholder="name@mail.ru"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
  
                  <div className="flex flex-col pt-4">
                      <label htmlFor="password" className="text-lg">Пароль</label>
                      <input type="password" id="password" placeholder="Пароль" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                      
                  </div>
  
                  <input type="submit" value="Ввод" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
              </form>
              <div className="text-center pt-12 pb-12">
                  <p>Еще не зарегистрированы? Заполните форму<a href="./#fourth" className="underline font-semibold"> здесь</a> и дождитесь письма с информацией для авторизации</p>
              </div>
          </div>

      </div>

    
      <div className="w-1/2 shadow-2xl">
      <div className="relative w-full h-screen hidden md:block">
          <Image src="/design_parts/berrys_in_a_bowl.jpg" alt="Background"  layout="fill" objectFit="cover" /></div>
      </div>
  </div>

</main>);
}