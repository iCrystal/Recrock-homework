1. 创建一个Person类, Person类的对象包含以下功能:

   1. toString方法: 返回Person对象的name属性
   2. count属性: 返回所有的Person对象的个数 (提示: getter)
   
2. 创建一个复数(Complex)类, 有以下实例方法
    1. 有两个参数: 实数部分与虚数部分, 各个参数的默认值为0 (tip: 注意检测输入值的类型和NaN)
   2. mul方法: 传入另一个复数类的对象, 得到乘积

      ```javascript
      var num1 = new Complex(1, -1);
      var num2 = new Complex(-1, 1);
      num1.mul(num2); // => 答案, 也是Complex类的实例对象
      ```
   3. add方法: 同上, 得到相加的结果
   4. mag方法: 返回自身的模
   5. neg方法: 自己取反
   6. equal方法: 传入另一个复数类的对象, 若值相等返回true否则false
   7. toString方法, 返回一个人类可以阅读的字符串, 让我知道实数部分是什么, 虚数部分是什么;
