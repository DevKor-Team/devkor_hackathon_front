import { setDemo as setDemoAction } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useDemo() {
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  const setDemo = (data) => {
    dispatch(setDemoAction(data));
  };
  return [demo, setDemo];
}
