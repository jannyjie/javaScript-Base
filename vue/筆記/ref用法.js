this.$refs.topcatSticky.style.display = 'none'
this.$refs.topcatContainer.removeEventListener('scroll', this.scrollFn);

ref="topcatSticky" 

// 如何vue $refs获取id的值？

// 我在看到的控制台是{},不知道如何获得id的值?如何得到$refs的id值，但是我尝试使用console.log(this.$refs.dataInfo.id)来打印id值，得到的是undefined.
// javascript文件：

console.log(this.$refs.dataInfo.id)

{/* <tab-item v-for="item in category" :id="item.id" ref="dataInfo">{{item.name}}</tab-item> */}

//Vue 例項中使用$refs的注意事項 https://www.796t.com/article.php?id=242009