function sumWithCache(cache, arg1, arg2) {
    var key = "".concat(arg1, "_").concat(arg2);
    if (key in cache) {
        console.log("\nWarto\u015B\u0107 z pami\u0119ci: ".concat(cache[key]));
        return cache[key];
    }
    else {
        var result = arg1 + arg2;
        cache[key] = result;
        return result;
    }
}
var cache = {};
console.log("Zadanie 5\n\r");
console.log("Suma 1 + 2: " + sumWithCache(cache, 1, 2));
console.log("Suma 1 + 2: " + sumWithCache(cache, 1, 2));
console.log("Suma 3 + 4: " + sumWithCache(cache, 3, 4));
console.log("Suma 3 + 4: " + sumWithCache(cache, 3, 4));
