//创建一个复数(Complex)类, 有以下实例方法
function Complex(real,imaginary) {
	if (isNaN(real) || isNaN(imaginary)) {
		throw TypeError();
	}else{
		console.log( typeof(real) );
		console.log( typeof(imaginary) );
	}
	this.r=real;
	this.i=imaginary;
}
//传入另一个复数类的对象, 得到乘积
Complex.prototype.mul=function(another) {
	console.log(this.r * another.r - this.i * another.i , this.r * another.i + this.i * another.r);
};
//传入另外一个负数类的对象，得到相加的结果
Complex.prototype.add = function (another) {
	console.log(this.r + another.r , this.i + another.i);
};
//返回自身的模
Complex.prototype.mag = function() {
	console.log(this.r * this.r + this.i * this.i);
};
//自己取反
Complex.prototype.neg = function() {
	console.log(-this.r,-this.i);
};
//传入另一个复数类的对象, 若值相等返回true否则false
Complex.prototype.equal = function (another) {
	if (another != null && another.constructor === Complex && this.r === another.r && this.i === another.i) {
		console.log("these two complex are equal");
	}
};
//返回一个字符串
Complex.prototype.toString = function () {
	console.log (this.r.toString(),this.i.toString());
};