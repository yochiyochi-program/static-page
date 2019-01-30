function like(element) {
    console.log('like!');
    element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent) + 1
}