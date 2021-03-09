function checkForName(inputText) {
    const letters = /^[\.a-zA-Z0-9,!? ]*$/;
    console.log("::: Running checkForName :::", inputText);
    
    return letters.test(inputText);
    
}

export { checkForName }