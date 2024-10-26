Array.prototype.forEach2 = function (cb){
    var length = this.length;
   for (var i = 0; i < length; i++) {
        if (this.hasOwnProperty(i)) {
            cb(this[i], i, this);
        }    
    }
}
var courses = [
    'JS', 'HTML', 'CSS'
]
var result = courses.forEach2(function(course, index, courses) {
    console.log(course);
})
console.log(result);

var result2 = courses.forEach((course) => console.log(course));
console.log(result2);