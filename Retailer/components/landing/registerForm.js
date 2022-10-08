import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name,
      surname,
      email,
      phone,
      city,
      category,
      companyName
    };
    fetch("/api/registerNewRetailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Ответ получен");
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setCategory("Витамины");
        Router.push("/lk/login");
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
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Название компании
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  required
                  type="text"
                  pattern="[а-яА-яa-zA-Z]+"
                  placeholder="RuHerb"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="city"
                  className="block invalid:border-pink-500 invalid:text-pink-600 w-full shadow-md shadow-black mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
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
                 border border-transparent rounded-md  false`+(submitted? `border-purple-600 bg-purple-500`:`active:bg-gray-900 bg-gray-900`)}
                
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
