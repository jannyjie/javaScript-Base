var ex = /[\s\n\t]/gi;
console.log('Wings Project'.split(ex));//["Wings", "Project"]
console.log('Wing\n執筆社群'.split(ex));//["Wing", "執筆社群"]
console.log('Wing  Wing專案'.split(ex));//["Wing", "", "Wing專案"]