import { checkOption } from '../variables' //把这行注释掉就可以 正确打印了
export function addPropsHook(data) {
  var isNotProfileType = !data.type || data.type.slice(0, 7) !== 'profile'
  var isSatisfy = sd.para.preset_properties && isNotProfileType
  if (isSatisfy && sd.para.preset_properties.url && typeof data.properties.$url === 'undefined') {
    data.properties.$url = getURL()
  }
  if (isSatisfy && sd.para.preset_properties.title && typeof data.properties.$title === 'undefined') {
    data.properties.$title = document.title
  }
}