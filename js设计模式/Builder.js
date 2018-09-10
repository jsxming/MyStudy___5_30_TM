// 建造者模式
/**
 * 创建多个对象，把这些对象赋值给一个主体对象
 * 
 */
class Human{
    constructor(param){
        this.skill = param && param.skill || "保密";
        this.hobby = param && param.hobby || "保密";
    }
    getSkill(){
        return this.skill;
    }
    getHobby(){
        return this.hobby;
    }
}

class Named {
    constructor(name){
        this.wholeName = name;
        this.FirstName = name.slice(0,name.indexOf(" "));
        this.secondName = name.slice(name.indexOf(" "));
    }
}

class Work {
    constructor(work){
        switch (work){
            case 'code':
                this.work = '工程师';
                this.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case "UE":
                this.work = '设计师';
                this.workDescript = "设计更似一种艺术";
                break;
            case 'teach':
                this.work = '教师';
                this.workDescript = "分享也是一种快乐";
            default :
                this.work = work;
                this.workDescript = "对不起";
        }
    }
    changeWork(work){
        this.work = work;
    }
    changeDescript(setence){
        this.workDescript = setence;
    }
}
class Person {
    constructor(name,work){
        var _person = new Human();
        _person.name = new Named(name);
        _person.work = new Work(work);
        return _person;
    }
}
var person = new Person('xiaoming','code');
export default person;