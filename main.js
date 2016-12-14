

// defineClass('ViewController', {
//            viewDidLoad: function() {
//            self.ORIGviewDidLoad();
//            var width = require('UIScreen').mainScreen().bounds().width
//            var btn = require('UIButton').alloc().initWithFrame({x:0, y:100, width:width, height:50})
//            btn.setTitle_forState('这个按钮是通过JSPatch动态添加上去的啊', 0)
//            btn.addTarget_action_forControlEvents(self, "handleBtn:", 1 << 6)
//            btn.setBackgroundColor(require('UIColor').redColor())
//            self.view().addSubview(btn)
//            },
//        handleBtn: function(sender) {
//        console.log('这是动态添加的按钮响应事件')
//    },
// })
require('UITableViewCell');
defineClass('ViewController', {
    viewDidLoad: function() {
        self.ORIGviewDidLoad();
            var hello = self.arr().toJS();
            hello = [1,2,3,4];
            console.log(hello[2]);
    },
//    tableView_numberOfRowsInSection: function(tableView, section) {
//        return 150;
//    },
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
        var cell = tableView.dequeueReusableCellWithIdentifier("cell")
        if (!cell) {
           cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(3, "cell")
        }
        var arr = self.dataArray().toJS();
        cell.textLabel().setText(arr[indexPath.row()]);
        cell.detailTextLabel().setText('what');
        return cell
         
    },
    tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
        return 64;
    },
            
    
})
