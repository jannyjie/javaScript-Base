// getBoundingClientRect 的用法

// Element.getBoundingClientRect() 回傳元素的大小，以及其相對於可視範圍 (viewport) 的位置。這篇文章將會教你 getBoundingClientRect() 的用法，以及 left、top、right、bottom、width、height 等位置及大小的屬性，並教你如何搭配 window.pageXOffset 和 window.pageYOffset 轉換成絕對位置。

// getBoundingClientRect() 屬性說明 (left, top, right, bottom, width, height)
// x/left：elem 左上角的 x 座標
// y/top：elem 左上角的 y 座標
// width：elem 的寬度，通常等於 offsetWidth
// height：elem 的高度，通常等於 offsetHeight
// right：elem 右下角的 x 座標
// bottom：elem 右下角的 y 座標

// 這些屬性有一些需要注意的事項：

// 座標可能是負值，例如：當元素的頂端超出視窗頂端的範圍時，top就會變成負的。
// IE 跟 Edge 沒有 x 跟 y 屬性，但可用 left 跟 top。
// rect.width 跟 rect.height 可能有小數，而 offsetWidth/offsetHeight 會回傳整數。如果需要精確的大小則需要用到 getBoundingClientRect()。
// 一般來說 rect.width 等於 elem.offsetWidth，但 elem.offsetWidth 是 layout 的大小，而 width 是實際 rendering 的大小。比如說用了 transform: scale(0.5)，寬度 200px 的元素在空間上佔據的位置一樣是 200px (offsetWidth)，但是視覺實際看到只有 100px (rect.width)。可以看以下的例子：
// See the Pen RwNGJoy by Shubo Chao (@sh