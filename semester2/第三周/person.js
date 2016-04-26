 (function(window,undefined){
    var count = 0;
    //构造函数
    function Person(name){
      count++;
      this.name = name;
      this.count = getCount;
    }
    
    function getCount(){
      return count;
    }
    
    //导出到window对象上的内容
    window.Person = Person;
  })(window);

  //测试用例
  var person1 = new Person("tom");
  console.log(person1.count());
  var person2 = new Person("jack");
  console.log(person2.count());
  console.log(person1.name.toString());
  console.log(person2.name.toString());

