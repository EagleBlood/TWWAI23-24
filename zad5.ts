type MyCache = {
    [key: string]: number;
};

function sumWithCache(cache: MyCache, arg1: number, arg2: number): number {
    const key = `${arg1}_${arg2}`;

    if (key in cache) {
        console.log(`\nWartość z pamięci: ${cache[key]}`);
        return cache[key];
    }
    else{
        const result = arg1 + arg2;
        cache[key] = result;
        return result;
    }

    
}

const cache: MyCache = {};
console.log("Zadanie 5\n\r");
console.log("Suma 1 + 2: " + sumWithCache(cache, 1, 2));
console.log("Suma 1 + 2: " + sumWithCache(cache, 1, 2));
console.log("Suma 3 + 4: " + sumWithCache(cache, 3, 4));
console.log("Suma 3 + 4: " + sumWithCache(cache, 3, 4));
