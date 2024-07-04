describe('maths', ()=>{
    
    describe('addFive', ()=>{
        it('should return undefined', ()=>{
            expect(mathEnforcer.addFive('string')).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.addFive({name: 'hey'})).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.addFive([1, 2])).to.equal(undefined);
        })

        it('should return number', ()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('should return number', ()=>{
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        })
        it('should return number', ()=>{
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })
        it('should return number', ()=>{
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
    })

    describe('subtractTen', ()=>{
        it('should return undefined', ()=>{
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.subtractTen({name: 'hey'})).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.subtractTen([1, 2])).to.equal(undefined);
        })

        it('should return zero', ()=>{
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
        it('should return negative number', ()=>{
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('should return float number', ()=>{
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        })
        it('should return negative number', ()=>{
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    })

    describe('sum', ()=>{
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum('string', false)).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum(true, 'string')).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum({name: 'hey'}, [3, 4])).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum([1, 2], {name: 'hey'})).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum(2, true)).to.equal(undefined);
        })
        it('should return undefined', ()=>{
            expect(mathEnforcer.sum([1, 2], 5.5)).to.equal(undefined);
        })

        it('should return number', ()=>{
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        })
        it('should return number', ()=>{
            expect(mathEnforcer.sum(0, 5)).to.equal(5);
        })
        it('should return number', ()=>{
            expect(mathEnforcer.sum(-2, 3)).to.equal(1);
        })
        it('should return zero', ()=>{
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        })
        it('should return negative number', ()=>{
            expect(mathEnforcer.sum(-2, -3)).to.equal(-5);
        })
        it('should return negative float umber', ()=>{
            expect(mathEnforcer.sum(2.5, 2.3)).to.equal(4.8);
        })
    })
})
