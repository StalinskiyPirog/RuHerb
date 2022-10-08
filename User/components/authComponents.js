
  export function LoginForm({setIsLogin}){
    return(
       <div className="bg-green-100 rounded-bl-3xl rounded-tr-3xl border border-green-600 shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
             <h2 className='p-3 text-3xl font-bold text-green-600'>RuHerb</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <h3 className='text-xl font-semibold text-orange-400 pt-2'>Логин</h3>
             
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center'>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-2xl m-2 text-white bg-green-400 w-2/5 px-4 py-2 shadow-md hover:text-green-400 hover:bg-green-100 transition duration-200 ease-in'>
                Ввод
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <p className='text-green-400 mt-4 text-sm'>Нет аккаунта?</p>
             <p className='text-green-400 mb-4 text-sm font-bold cursor-pointer' onClick={() => setIsLogin(false)}>Создайте новый аккаунт</p>
          </div>
    )
  }
  
 export function SignUpForm({setIsLogin}){
     return(
        <div className="bg-orange-400  rounded-br-3xl rounded-tl-3xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
              <h2 className='p-3 text-3xl font-bold '>RuHerb</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <h3 className='text-xl font-semibold  pt-2'>Создать аккаунт</h3>
             
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center mt-2'>
             <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in'>
                Ввод
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <p className=' mt-4 text-sm'>Уже есть аккаунт?</p>
             <p className=' mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Войти</p>
          </div>
     )
  }