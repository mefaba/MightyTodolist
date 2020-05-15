

export function clamp(value, min, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
}
/* console.log(clamp2(-10, -5, 5)) */

export function distance(a,b){
    return Math.abs(a-b)
}

/* console.log(distance(-5,-100)) */
