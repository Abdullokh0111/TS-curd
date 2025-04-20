"use strict";
class User {
    constructor(name, age) {
        this.id = Math.floor(Math.random() * 100);
        this.name = name;
        this.age = age;
    }
}
