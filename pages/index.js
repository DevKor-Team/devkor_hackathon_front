import { useSelector } from 'react-redux';
import { getUserData } from 'axios/User';

export default function Home() {
  let state = useSelector(state => state);
  getUserData().then(res => console.log(res));
  return (
    <div>
      <main>
        main
      </main>
    </div>
  )
}
