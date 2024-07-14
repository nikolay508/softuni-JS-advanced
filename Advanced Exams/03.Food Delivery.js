describe('tests', ()=>{
    describe('test the getCategory', ()=>{
        it('should work with vegan', ()=>{
            expect(foodDelivery.getCategory('Vegan')).to.equal("Dishes that contain no animal products.");
        })
        it('should work with vegetarian', ()=>{
            expect(foodDelivery.getCategory('Vegetarian')).to.equal("Dishes that contain no meat or fish.");
        })
        it('should work with gluten-free', ()=>{
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal("Dishes that contain no gluten.");
        })
        it('should work with all', ()=>{
            expect(foodDelivery.getCategory('All')).to.equal("All available dishes.");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.getCategory(true)).to.throw("Invalid Category!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.getCategory(12)).to.throw("Invalid Category!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.getCategory([12])).to.throw("Invalid Category!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.getCategory({name: 'tod'})).to.throw("Invalid Category!");
        })
    })

    describe('test the addMenuItem', ()=>{
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem(12, 41)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem('hey', 41)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem({name: 'tod'}, 14)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([1, 2, 3], true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([1, 2, 3], 'true')).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([1, 2, 3], [1, 2, 3])).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([1, 2, 3], {name: 'tod'})).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([], 4)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.addMenuItem([{first: 1}], 4)).to.throw("Invalid Information!");
        })
        it('should return 3 products', ()=>{
            expect(foodDelivery.addMenuItem([{name: 'apple', price: 0}, {name: 'peach', price: 5}, {name: 'candy', price: 9.99}], 10)).to.equal(`There are 3 available menu items matching your criteria!`);
        })
        it('should return 2 products', ()=>{
            expect(foodDelivery.addMenuItem([{name: 'apple', price: 10.01}, {name: 'peach', price: -5}, {name: 'candy', price: 10}], 10)).to.equal(`There are 2 available menu items matching your criteria!`);
        })
    })

    describe('test the calculateOrderCost', ()=>{
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost(true, [1], true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost('true', [1], true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost(12, [1], true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost({first: 1}, [1], true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], 1, true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], 'new', true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], true, true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], {first: 1}, true)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], [1], 'true')).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], [1], 12)).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost([1], [1], [1])).to.throw("Invalid Information!");
        })
        it('should throw error', ()=>{
            expect(()=>foodDelivery.calculateOrderCost(true, [1], {first: 1})).to.throw("Invalid Information!");
        })
        it('should return right amount', ()=>{
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.equal("You spend $12.50 for shipping and addons!");
        })
        it('should return right amount', ()=>{
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.equal(`You spend $10.63 for shipping and addons with a 15% discount!`);
        })
    })
})
