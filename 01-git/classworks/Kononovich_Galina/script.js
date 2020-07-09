function snakeCase(value) {
    let ret = 'hello';

if(value[0] === '-') {
    for(let i = 0; i< value.length; i++) {
        
    }
}
   
    if(value.includes(' ' || '-')) {
               value = value.toLowerCase();
               ret = value.split(' ').join('_');
           }
           else {           
           for(let i = 0; i< value.length; i++) {
                       if(value[i] === value[i].toUpperCase()) {
                        let start = value.slice(0, i);
                        let end = (value.slice(i)).toLowerCase();
                        
                          ret = (start + '_' + end);
                    
                       }
                   }
                }
                return ret;
}
snakeCase('Foo Bar');
snakeCase('fooBar');
// console.log(snakeCase('--FOO-BAR--'));


