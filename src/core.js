/**
 * Created by chaowang on 2017/11/23.
 */
import is from 'is'

var w = {}

// 自返回定义
w = function(selector, context) { return new w.fn.init(selector, context)};
w.fn = w.prototype = {
  elem: '',
  styles: [],
};

w.prototype.init = function($selector, $startNode){
  if($selector.nodeType && $selector.nodeType === 1){
    this.elem = $selector;
  }else if($startNode){
    this.elem = $startNode.querySelector($selector)
  }else{
    this.elem = document.querySelector($selector)
  }
  console.log(this)
  return this;
};
w.fn.init.prototype = w.fn;

// 扩展方法
w.mix = w.fn.mix = function(){
  var i=0, deep = false, override = true, source, key, tar, src, clone, srcIsArray,
    args = slice.call(arguments),
    length = args.length,
    target  = args[0];
  if(length === 1){
    target = !this.window ? this : {};
  }else{
    typeof args[length-1] === 'boolean' && (override =  args.pop());
    typeof args[0]  === 'boolean' && (target = args[1]) && (deep = args.shift());
  }
  while(source = args[i++]){
    for(key in source){
      src = source[key];
      if(override || !(key in target)){
        tar = target[key];
        if(deep && src){
          ( is.Array(src) && (clone = tar && is.Array(tar) ? tar : []) ) || ( is.PlainObject(src) && (clone = tar && is.PlainObject(tar) ? src : {}));
          target[key] = w.mix(deep, clone, src, override);
        }else if(src !== undefined)
          target[key] = src;
      }
    }
  }
  return target;
}

export default w;