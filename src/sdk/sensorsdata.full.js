import {isArray} from './utils' //把这行注释掉就可以 正确打印了
import {functions} from './variables'
function implementCore(isRealImp) {
  var imp = isRealImp ? functions : saEmpty

  for (var f in imp) {
    sd[f] = imp[f]
  }
}
const sd = {}
sd.init = function(para) {
  implementCore([])
}



export default sd
