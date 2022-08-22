function process( url ){
    //.... 使用reduce
  let arr= url.split('?')
//   console.log(arr[1]);
let result =arr[1].replaceAll('=',':').replaceAll('&',',').replaceAll('#','')
let Arr = result.split(',')
  let obj=  Arr.reduce(function(acc,item){
        return acc+=item
    })
    console.log(obj);
}

process('http://www.baidu.com/?name=zhangsan&age=18&sex=nan#')
