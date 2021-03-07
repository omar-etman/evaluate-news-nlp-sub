import {checkForName} from './nameChecker.js';



test ("input name is correct",()=>{
    expect(checkForName('Picard')).toEqual(true)
})
test ("input name is incorrect",()=>{
    expect(checkForName('12345@-')).toEqual(false)
   
})

