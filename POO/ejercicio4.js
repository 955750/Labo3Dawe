var contador = {
    cont: 0,
    sig: function () {
        let temp = this.cont
        this.cont++
        return temp
    }
}
console.log(contador.sig()) // → 0
console.log(contador.sig()) // → 1
console.log(contador.sig()) // → 2