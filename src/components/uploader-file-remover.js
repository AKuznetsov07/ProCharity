function handleFileListClick(evt) {
  evt.preventDefault();
  
  if (evt.target.classList.contains('uploader__btn-delete')) {
    evt.target.closest('.uploader__item').remove();
  }
}

// export function setFilesRemover() {
//   const filesList = document.querySelector('.uploader__files-list');
  
//   if (filesList) {
//     filesList.addEventListener('mousedown', handleFileListClick);
//   }
// }

export function setFilesRemover() {
  const filesLists = document.querySelectorAll('.uploader__files-list');
  
  if (filesLists.length > 0) {
    filesLists.forEach(element => {
      element.addEventListener('mousedown', handleFileListClick);      
    });
  }
}