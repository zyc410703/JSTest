
require('UITableViewCell');
defineClass('ViewController', {
    viewDidLoad: function() {
        self.ORIGviewDidLoad();
            var hello = self.arr().toJS();
            hello = [1,2,3,4];
            console.log(hello[2]);
    },
//     tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
//         var cell = tableView.dequeueReusableCellWithIdentifier("cell")
//         if (!cell) {
//            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(3, "cell")
//         }
//         var arr = self.dataArray().toJS();
//         cell.textLabel().setText(arr[indexPath.row()]);
//         cell.detailTextLabel().setText('what');
//         return cell;   
//     },
    tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
        return 64;
    },
})
