// const t = [1, -1, 4]

// t.push(5)   //数组作为对象，可以被修改

// t.forEach( value => {   //forEach 对数组的每个元素执行一次给定函数
//     console.log(value)
// })

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        console.log(a + b)
    },
}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed

// arto.greet()

const referenceToGreet = arto.greet.bind(arto)
referenceToGreet() // prints "hello, my name is undefined"
