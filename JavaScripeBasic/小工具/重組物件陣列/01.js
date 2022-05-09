function MyString(x) {
    if (this instanceof MyString) {
        this.val = x;
    } else {
        return new MyString(x);
    }
}

var arr = [1, 2, 3];
arr.map(MyString); // [ {val: "1"}, {val: "2"}, {val: "3"} ]