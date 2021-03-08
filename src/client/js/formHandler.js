function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (Client.checkForName(formText)){
        submitToServer(formText)
        .then(data=>appendDataToResults(data))
   
    }else{
        alert('input invalid');
    }
    
}

async function submitToServer(formText){
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
    const data = res.json();
    return data;
    document.getElementById('results').innerHTML = data.message;
    }catch(error) {
    console.log('error',error);
    }
}
export {handleSubmit,submitToServer}

function appendDataToResults(data) {
    const list = document.createElement('ul');
    const agreementNode = document.createElement('li');
    const confidenceNode = document.createElement('li');
    const ironyNode = document.createElement('li');
    const subjectivityNode = document.createElement('li');
    
    agreementNode.textContent = data.agreement;
    confidenceNode.textContent = data.confidence;
    ironyNode.textContent = data.irony; 
    subjectivityNode.textContent = data.subjectivity;
    
    list.appendChild(agreementNode)
    list.appendChild(confidenceNode);
    list.appendChild(ironyNode);
    list.appendChild(subjectivityNode);
    
    document.getElementById('results').appendChild(list);
}
