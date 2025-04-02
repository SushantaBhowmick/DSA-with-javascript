const map1  = new Map()
const set = new Set()
const a1 = [1, 2, 3, 4, 5, 6, 7,2, 8, 9, 10, 11, 12, 13];


for (const element of a1) {
    map1.set(element, (map1.get(element) || 0) + 1);
}
for (const element of a1) {
    set.add(element,(set.values));
}
console.log(map1)
console.log(set)