/**
 * Created by chaowang on 2017/11/23.
 */
import { toString } from './func'
const types = ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window"];
let is = {}, wis = {}
for(var i = 0, type; type = types[i++ ]; )
  {
    is['is' + type] = is[type] = (function(type) {
      return function(obj) { return toString.call(obj) == "[object " + type + "]" }
    })(type);
  }
// NodeType
// const unsigned short      ELEMENT_NODE                   = 1;   元素节点
// const unsigned short      ATTRIBUTE_NODE                 = 2;   属性节点
// const unsigned short      TEXT_NODE                      = 3;   文本节点
// const unsigned short      CDATA_SECTION_NODE             = 4;   CDATA 区段
// const unsigned short      ENTITY_REFERENCE_NODE          = 5;   实体引用元素
// const unsigned short      ENTITY_NODE                    = 6;   实体
// const unsigned short      PROCESSING_INSTRUCTION_NODE    = 7;   表示处理指令
// const unsigned short      COMMENT_NODE                   = 8;   注释节点
// const unsigned short      DOCUMENT_NODE                  = 9;   最外层的Root element,包括所有其它节点
// const unsigned short      DOCUMENT_TYPE_NODE             = 10;   <!DOCTYPE………..>
// const unsigned short      DOCUMENT_FRAGMENT_NODE         = 11;   文档碎片节点
// const unsigned short      NOTATION_NODE                  = 12;   DTD 中声明的符号节点

is.isElem = is.Elem = function(obj){ return obj.nodeType === 1}
is.isPlainObject = is.PlainObject = function(o){ return o && toString.call(o) === '[object Object]' && ('isPrototypeOf' in o)};
export default is  = is