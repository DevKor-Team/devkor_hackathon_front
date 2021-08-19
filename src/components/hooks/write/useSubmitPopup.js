import { changeSubmitPopup } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useSubmitPopup() {
  const dispatch = useDispatch();
  const submitPopup = useSelector((state) => state.demo.submitPopup);

  const setSubmitPopup = (data) => {
    dispatch(changeSubmitPopup(data));
  };
  return [submitPopup, setSubmitPopup];
}
