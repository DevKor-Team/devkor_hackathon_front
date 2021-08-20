import { changeTechStacks } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useTechStacks() {
  const dispatch = useDispatch();
  const techStacks = useSelector((state) => state.demo.techStacks);

  const setTechStacks = (data) => {
    dispatch(changeTechStacks(data));
  };
  return [techStacks, setTechStacks];
}
