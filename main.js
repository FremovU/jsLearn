
const TEST = {
    test: 1,
    test1() {
        console.log('1')
    }
}
const TEST1 = JSON.parse(JSON.stringify(TEST))
TEST1.test2 = 2
console.log(TEST)
console.log(TEST1)


