const textArea = document.querySelector('#textInput');
const display = document.querySelector('.display-area')
const displayTextArea = document.querySelector('#textDisplay');
const btnCryptText = document.querySelector('#crypt');
const btnDecryptText = document.querySelector('#decrypt');
const btnCopyText = document.querySelector('#copy')

const encryptText = () => {
  const targetText = textArea.value;

  let encryptedText = '';

  for (const letter of targetText.toLowerCase()) {
    letter === 'e' ? encryptedText += 'enter'
      : letter === 'i' ? encryptedText += 'imes'
        : letter === 'a' ? encryptedText += 'ai'
          : letter === 'o' ? encryptedText += 'ober'
            : letter === 'u' ? encryptedText += 'ufat'
              : encryptedText += letter;
  };

  displayTextArea.innerHTML = encryptedText;

  handleDisplayContentChange()
};

const decryptText = () => {
  const targetText = textArea.value;

  let decryptedText = targetText.replaceAll('enter', 'e')
  decryptedText = decryptedText.replaceAll('imes', 'i')
  decryptedText = decryptedText.replaceAll('ai', 'a')
  decryptedText = decryptedText.replaceAll('ober', 'o')
  decryptedText = decryptedText.replaceAll('ufat', 'u')

  displayTextArea.innerHTML = decryptedText;

  handleDisplayContentChange()
}

const handleDisplayContentChange = () => {
  display.style.setProperty('justify-content', 'space-between');
  display.style.setProperty('align-items', 'start');
  btnCopyText.removeAttribute('hidden');
  btnCopyText.addEventListener('click', copyText)
};

const copyText = () => {
  const textToCopy = displayTextArea.textContent;

  navigator.clipboard.writeText(textToCopy)

  alert('Copiado para a área de transferência!')
};

btnCryptText.addEventListener('click', encryptText);

btnDecryptText.addEventListener('click', decryptText);
