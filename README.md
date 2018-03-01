# ife
百度前端学院任务
[百度前端技术学院](http://ife.baidu.com/)的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。

课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。


##### [瀑布流](https://keangj.github.io/waterfall)  https://github.com/keangj/waterfall
##### [定位导航](https://keangj.github.io/navigation/定位导航/)  https://github.com/keangj/navigation/tree/master/%E5%AE%9A%E4%BD%8D%E5%AF%BC%E8%88%AA

#### 小薇学院

##### [通过HTML及CSS模拟报纸排版](https://keangj.github.io/ife/xiaowei/task06/index06.html)
* 实现页面开发，要求实现效果与 [样例](https://github.com/keangj/ife/blob/master/xiaowei/task06/image/task.jpg) 基本一致
页面宽度固定（定宽）

##### [实现常见的技术产品官网的页面架构及样式布局](https://keangj.github.io/ife/xiaowei/task07/index07.html)
* 通过HTML及CSS实现设计稿 设计稿PSD文件，效果如 [效果图](https://github.com/keangj/ife/blob/master/xiaowei/task07/images/task.jpg)
* 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。

##### [响应式网格（栅格化）布局](https://keangj.github.io/ife/xiaowei/task08/index.html)
* 只需要完成HTML，CSS代码编写，不需要写JavaScript
* 设计稿中的图片、文案均可自行设定
* 在Chrome中完美实现与设计稿的各项字体、布局、内外边距等样式

##### [使用HTML/CSS实现一个复杂页面](https://keangj.github.io/ife/xiaowei/task09/index.html)
* 纯CSS实现tab切换
* 通过HTML及CSS实现设计稿 设计稿PSD文件，效果如 [效果图](https://github.com/keangj/ife/blob/master/xiaowei/task09/images/task.jpg)
* 整个页面内容宽度固定，但头部的蓝色导航和浏览器宽度保持一致

---

#### 斌斌学院

##### [零基础JavaScript编码（一）](https://keangj.github.io/ife/binbin/task.html)
* 本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

##### [零基础JavaScript编码（二）](https://keangj.github.io/ife/binbin/task01.html)
* 页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

##### [零基础JavaScript编码（三）](https://keangj.github.io/ife/binbin/task02.html)
* 读取页面上已有的source列表，从中提取出城市以及对应的空气质量
* 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

##### [基础JavaScript练习（一）](https://keangj.github.io/ife/binbin/task03/index.html)
* 有一个input输入框，以及4个操作按钮
* 点击"左侧入"，将input中输入的数字从左侧插入队列中；
* 点击"右侧入"，将input中输入的数字从右侧插入队列中；
* 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
* 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
* 点击队列中任何一个元素，则该元素会被从队列中删除

##### [基础JavaScript练习（二）](https://keangj.github.io/ife/binbin/task04/index04.html)
* 基于上一任务
* 限制输入的数字在10-100
* 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
* 队列展现方式变化如图，直接用高度表示数字大小
* 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料

##### [基础JavaScript练习（三）](https://keangj.github.io/ife/binbin/task05/index05.html)
* 基于任务四进行升级
* 将新元素输入框从input改为textarea
* 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
* 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识

---

#### 耀耀学院

##### [表单（一）单个表单项的检验](https://keangj.github.io/ife/yaoyao/task01/index.html)
* 在页面中实现一个输入框与按钮，要求点击验证按钮后，对输入框中内容进行格式校验，并在其下方显示校验结果

* 校验规则：
 1.符数为4~16位
 2.个英文字母、数字、英文符号长度为1
 3.个汉字，中文符号长度为2

##### [表单（二）多个表单项的动态校验](https://keangj.github.io/ife/yaoyao/task02/index.html)
* 上一个任务，在页面中添加多个表单

* 要求:
 - 单获得焦点时，下方显示表单填写规则
 - 表单失去焦点时校验表单内容
 - 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
 - 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
 - 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”

##### [表单（三）联动](https://keangj.github.io/ife/yaoyao/task03/index.html)
* 在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。
* 当选择在校生时，出现两个select下拉菜单，一个选择城市，一个选择学校，当选择非在校生时，出一个文本输入框
* 学校下拉菜单里的学校名单均为城市下拉菜单中所选的城市中的大学，当城市发生变化时，学校一起发生变化
* 城市及学校的数据随意编造即可，无需真实完整

##### [图片库](https://keangj.github.io/Gallery/JavaScript%E5%9B%BE%E7%89%87%E5%BA%93/Gallery.html)
