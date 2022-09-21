
import {useRouter} from 'next/router';
import { useEffect } from 'react';

export default function Error() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {},5000)
        router.push("/")
    }, );
    return (<div>Случилась ошибка. Мы уже работаем над её решением. Через 5 секунд вас перенаправит на главную страницу</div>)
  }
