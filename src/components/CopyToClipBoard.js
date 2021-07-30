function copyToClipBoard(text) {
  const tmpTextarea = document.createElement('textarea');
  tmpTextarea.setAttribute('readonly', 'true');
  tmpTextarea.value = text;
  document.body.appendChild(tmpTextarea);
  tmpTextarea.select();
  tmpTextarea.setSelectionRange(0, 9999);
  document.execCommand('copy');
  document.body.removeChild(tmpTextarea);
}

export default copyToClipBoard;
