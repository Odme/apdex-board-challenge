import { useContext } from 'react';
import { UiContext } from '../context/uiContext';

const useUi = () => useContext(UiContext);

export default useUi;
