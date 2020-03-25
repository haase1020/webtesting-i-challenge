const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair(item)', () => {
        it('acepts an item object and returns a new item with durability of 100', () => {
const item = {
    name: 'computer',
    durability: 70,
    enhancement: 10
    
};
    expect(enhancer.repair(item).durability).toBe(100);
   

        });
    });
})

describe ('enhancer.js', () => {
    describe('succeed(item', () => {
        it('should increase the enhancement of items by 1', () => {
            const item = {
                name: 'computer',
                durabilty: 70,
                enhancement: 10
            };
            expect(enhancer.succeed(item).enhancement).toBe(11);
        });
        it('does not increase level of enhancement if is at 20', () => {
            const item = {
                name: 'computer',
                durability: 70,
                enhancement: 20
            };
            expect(enhancer.succeed(item).enhancement).toBe(20)
        })
    })
})
