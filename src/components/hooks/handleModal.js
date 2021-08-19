export const handleModal = () => {
  const rootNode = document.documentElement;
  const popupState = getComputedStyle(document.documentElement).getPropertyValue('--popup');

  if (popupState !== 'block') {
    rootNode.style.setProperty('--popup', 'block');
  } else {
    rootNode.style.setProperty('--popup', 'none');
  }
};

export default handleModal;
