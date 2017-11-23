/**
 * Created by chaowang on 2017/11/23.
 */

export const heredoc  = function(fn){
  return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><');
}

export const debounce = function(fn, delta) {
  var timeoutID = null;
  delta = delta || 500;
  return function() {
    clearTimeout(timeoutID);

    var args = arguments;
    timeoutID = setTimeout(function() {
      console.log(args);
      fn.apply(null, args);
    }, delta);
  };
}

export const timer = function($inter,  $immediate){
  var inter = $inter || 3000;
  var nums = 3;
  var immediate = $immediate || true;
  var intervalId = null;
  var end = function(){
    inter = 3000;
    nums = 3;
    return {timer: arguments.callee};
  }
  var run = function($fn){
    if(immediate == true) {
      $fn();
      nums--;
    }
    intervalId = setInterval(function(){
      $fn();
      nums--;
      if(nums === 0){
        clearInterval(intervalId);
        intervalId = null;
      }
    }, inter)

  }
  var num = function($nums){
    nums = $nums;
    return {run: run};
  }
  return { num : num }
}

export default {
  heredoc,
  debounce,
  timer
}
