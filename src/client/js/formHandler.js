async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    const res = await fetch('http://localhost:8081/addData', {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({formText}), 
      });
      try {
        const data = await res.json();
        document.getElementById('results').innerHTML = data.message;
    }catch(error) {
        console.log('error',error);
    }
}

export { handleSubmit }
