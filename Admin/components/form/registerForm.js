import Image from "next/image";
import Router from "next/router";
import { useState, useRef } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [imgsSrc, setImgsSrc] = useState([])
  const inputFileRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault()
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('city', city);
    formData.append('category', category);
    Object.values(inputFileRef.current.files).forEach(file => {
      formData.append('file', file);
  })
    fetch("/api/registerNewRetailer", {
      method: "POST",
      body: formData,
    }).then((res) => {
      console.log("Ответ получен: ", res.json());
      if (res.status === 200) {
        setIsLoading(false);
        name=""
        email=""
        phone=""
        city=""
        category="Витамины"
        setName("");
        setEmail("");
        setPhone("");
        inputFileRef.current.value = '';
        setCity("");
        setCategory("Витамины");
        Router.push("/lk");
      }
    });
  };
  
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 rounded-lg ">
        <div>
          <h1 className="md:text-4xl text-md mb-4 font-medium text-white">
            Форма регистрации для продавцов
          </h1>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-xl shadow-black sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm   font-medium text-gray-700 undefined"
              >
                Имя
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="name"
                  pattern="[А-Я][а-я]+"
                  placeholder="Иван"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Фамилия
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  required
                  type="text"
                  name="surname"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  pattern="[А-Я][а-я]+"
                  placeholder="Иванов"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Почта
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  placeholder="name@mail.ru"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Телефон
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="phone"
                  name="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                  placeholder="+7 888 888 88 88"
                  className="block invalid:border-pink-500 invalid:text-pink-600 w-full shadow-md shadow-black mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Город
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  required
                  type="text"
                  pattern="[А-Я][а-я]+"
                  placeholder="Москва"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="city"
                  className="block invalid:border-pink-500 invalid:text-pink-600 w-full shadow-md shadow-black mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Файлы
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  required
                  multiple
                  type="file"
                  ref={inputFileRef}
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    for (const file of e.target.files) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          setImgsSrc((imgs) => [...imgs, reader.result]);
                        };
                        reader.onerror = () => {
                          console.log(reader.error);
                        };
                      }
                  }}
                  name="images"
                  className="block invalid:border-pink-500 invalid:text-pink-600 w-full shadow-md shadow-black mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {imgsSrc.map((link) => (
        <div key={imgsSrc.indexOf(link)} onClick={(link)=>imgsSrc.splice(imgsSrc.indexOf(link), 1)}>
          <img src={link} />
          </div>
      ))}
              </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="assort"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Основная категория
              </label>
              <div className="flex flex-col items-start">
                <select
                  required
                  placeholder="Выберите категорию"
                  name="assort"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="block py-2 px-1 border mr-6 focus:outline-none w-full mt-1 shadow-md shadow-black rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>Витамины</option>
                  <option>Биодобавки</option>
                  <option>Лекарства</option>
                  <option>Лечебные травы</option>
                  <option>Чай</option>
                  <option>Фрукты</option>
                  <option>Злаки</option>
                  <option>Напитки</option>
                </select>
              </div>
              <div className="flex items-start mb-6 mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="check"
                    aria-describedby="check"
                    type="checkbox"
                    className="bg-gray-50 invalid:border-pink-500 invalid:text-pink-600 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    required
                  />
                </div>
                <div className="text-sm ml-3">
                  <label htmlFor="check" className="font-medium text-gray-900">
                    Принимаю условия пользовательского соглашения и договора на
                    подключение к Маркету и разрешаю обрабатывать мою
                    персональную информацию на условиях политики
                    конфиденциальности
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                onClick={(e)=>{handleSubmit(e)}}
                className={`inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold
                tracking-widest text-white uppercase transition duration-150 ease-in-out 
                 border border-transparent rounded-md  false`+(isLoading? `border-purple-600 bg-purple-500`:`active:bg-gray-900 bg-gray-900`)}
                
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
