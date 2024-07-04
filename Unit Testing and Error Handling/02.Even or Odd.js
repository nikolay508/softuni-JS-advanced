describe('String', ()=>{
    
    it('should be undefined', ()=>{
        expect(isOddOrEven(12)).to.equal(undefined);
    })

    it('should be undefined', ()=>{
        expect(isOddOrEven(true)).to.equal(undefined);
    })

    it('should be even', ()=>{
        expect(isOddOrEven('math')).to.equal('even');
    })

    it('should be odd', ()=>{
        expect(isOddOrEven('maths')).to.equal('odd');
    })

    it('should be odd', ()=>{
        expect(isOddOrEven('maths', 'heyy', 'wassup')).to.equal('odd');
    })
})
