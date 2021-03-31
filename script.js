console.log('This is drag and drop');
let imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox

imgBox.addEventListener('dragstart', (e) => {
    console.log('Drag has started');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})


imgBox.addEventListener('dragend', (e) => {
    console.log('Drag has ended');
    e.target.className = 'imgBox';
})

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Dragover has been triggered');
    })
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Dragenter has been triggered');
        e.target.className += ' dashed';
    })
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Dragleave has been triggered');
        e.target.className = 'whiteBox';
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggered');
        e.target.append(imgBox);
    })
}