import { handleSubmit } from './formHandler.js';

window.Client = {
    checkForName:jest.fn()
}

const submitToServer = jest.fn();

jest.spyOn(window, 'alert').mockImplementation(()=>{})

const mockEvent = {
    preventDefault: jest.fn()
  }

test ("input name is incorrect",()=>{
    document.body.innerHTML = `
    <input id="name" value="'00%*&@@'" />
  `;
    handleSubmit(mockEvent)
    expect(window.alert).toHaveBeenCalledWith('input invalid')
})


test ("input name is correct",()=>{
    document.body.innerHTML = `
    <input id="name" value="'test'" />
  `;
    handleSubmit(mockEvent);
    setTimeout(()=> {
        expect(submitToServer).toHaveBeenCalledWith('test')
    })
})