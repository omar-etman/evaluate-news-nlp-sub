import {handleSubmit,submitToServer} from './formHandler.js';


window.Client = {checkForName:jest.fn()}

// window.Client.checkForName = jest.fn()

jest.spyOn(window, 'alert').mockImplementation(()=>{})
// jest.spyOn(submitToServer).mockImplementation(formText=>{})
const submitToServer = jest.fn();

const mockEvent = {
    preventDefault: jest.fn()
  }

test ("input name is incorrect",()=>{
    document.body.innerHTML = `
    <input id="name" value="'00%*&@@'" />
  `;
    const event = { preventDefault: () => {} };
    handleSubmit(mockEvent)
    expect(window.alert).toHaveBeenCalledWith('input invalid')
})

test ("input name is correct",()=>{
    const event = { preventDefault: () => {} };
    handleSubmit(mockEvent)
    expect(submitToServer).toHaveBeenCalledWith('Picard')
})