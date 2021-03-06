import {checkForName} from './nameChecker.js';

jest.spyOn(window, 'alert').mockImplementation(()=>{})

test ("input name is excluded",()=>{
    checkForName('mohsen')
    expect(window.alert).not.toHaveBeenCalled()
})

test ("input name is included",()=>{
    checkForName('Picard')
    expect(window.alert).toHaveBeenCalledWith("Welcome, Captain!")
})

